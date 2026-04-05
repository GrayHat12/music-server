from app.models.models import Images, Artists, Songs, Genres, Albums, Features
from app.models.response_schema import SongResponse, DeletedResponse
from app.models.request_schema import SongUpdateRequest
from fastapi import HTTPException, APIRouter, UploadFile, Depends, Path, Query
from fastapi.responses import StreamingResponse
from fastapi.encoders import jsonable_encoder
from app.database.database import get_or_create
from app.middleware import validate_audio_file, get_db
from sqlalchemy.orm import Session
from app.utils import load_song_metadata, get_media_type
from datetime import datetime, timezone
from io import BytesIO
import json
from typing import Any
from app.config import Tags
import math

router = APIRouter(prefix="/song", tags=[Tags.song])


@router.get("s", response_model=list[SongResponse])
def list_all_song(db: Session = Depends(get_db)):
    songs = db.query(Songs).all()
    return [SongResponse.from_song(song) for song in sorted(songs, key=lambda x: x.stream_count if not x.favorite else math.inf, reverse=True)]


@router.get("/download/{id}", response_class=StreamingResponse)
def download_song(id: int = Path(...), db: Session = Depends(get_db)):
    song = db.get(Songs, id)
    if not song:
        raise HTTPException(404)
    buffer = BytesIO(song.buffer)
    mime, extension = get_media_type(buffer)
    buffer.seek(0)
    return StreamingResponse(
        content=buffer,
        media_type=mime,
        headers={
            "Content-Disposition": f'attachment; filename="{song.filename}.{extension}"'
        }
    )


@router.get("/{id}", response_model=SongResponse)
def get_song(id: int = Path(...), db: Session = Depends(get_db)):
    song = db.get(Songs, id)
    if not song:
        raise HTTPException(404)
    return SongResponse.from_song(song)


@router.get("/{id}/meta", response_model=dict[str, Any])
def get_song_metadata(id: int = Path(...), db: Session = Depends(get_db)):
    song = db.get(Songs, id)
    if not song:
        raise HTTPException(404)
    return json.loads(song.metatags)


@router.get("/{id}/stream", response_class=StreamingResponse)
def stream_song(id: int = Path(...), db: Session = Depends(get_db)):
    song = db.get(Songs, id)
    if not song:
        raise HTTPException(404)
    now = datetime.now(timezone.utc)
    song.stream_count += 1
    song.last_streamed = now
    if song.artist:
        song.artist.stream_count += 1
        song.last_streamed = now
    if song.album:
        song.album.stream_count += 1
        song.album.last_streamed = now
    if song.genre:
        song.genre.stream_count += 1
        song.genre.last_streamed = now
    db.add(song)
    db.flush()
    db.commit()
    return StreamingResponse(BytesIO(song.buffer), media_type="audio/mpeg")


@router.post("", response_model=SongResponse, responses={409: {"model": SongResponse, "description": "Conflict! Song already exists."}})
async def upload_song(file: UploadFile = Depends(validate_audio_file), db: Session = Depends(get_db)):
    content = await file.read()
    data = load_song_metadata(BytesIO(content))

    print("data")
    for key, value in data.items():
        print(f"{key=} {type(value)=}")

    song_exists = db.query(Songs).filter(
        Songs.buffer == data["buffer"]).first()
    if song_exists is not None:
        raise HTTPException(409, jsonable_encoder(
            SongResponse.from_song(song_exists)))

    image_obj = None
    if data["art_buffer"]:
        image_obj = get_or_create(db, Images, buffer=data["art_buffer"])

    artist_obj = get_or_create(db, Artists, name=data["artist"])
    if image_obj and not artist_obj.image_id:
        artist_obj.image = image_obj

    genre_obj = get_or_create(
        db, Genres, name=data["genre"]) if data["genre"] else None

    album_obj = None
    if data["album"]:
        album_obj = get_or_create(
            db, Albums, name=data["album"], artist_id=artist_obj.id)
        if image_obj and not album_obj.image_id:
            album_obj.image = image_obj

    new_song = Songs(
        title=data["title"],
        buffer=data["buffer"],
        metatags=data["metatags"],
        release=data["release"],
        duration=data["duration"],
        trackno=data["trackno"],
        artist=artist_obj,
        genre=genre_obj,
        album=album_obj,
        cover=image_obj
    )
    db.add(new_song)
    db.flush()

    for feat_name in data["features"]:
        feat_artist = get_or_create(db, Artists, name=feat_name)
        db.add(Features(artist=feat_artist, song=new_song))

    db.commit()
    return SongResponse.from_song(new_song)


@router.patch("/{id}", response_model=SongResponse)
def update_song(update: SongUpdateRequest, id: int = Path(...), db: Session = Depends(get_db)):
    song = db.get(Songs, id)
    if not song:
        raise HTTPException(404)

    if "genre" in update.model_fields_set:
        genre_obj = get_or_create(
            db, Genres, name=update.genre) if update.genre else None
        song.genre_id = genre_obj.id if genre_obj else None
    if "artist" in update.model_fields_set:
        if isinstance(update.artist, int):
            # check if artist exists
            artist = db.get(Artists, update.artist)
            if artist is None:
                raise HTTPException(422, {"msg": "invalid artist id"})
        song.artist_id = update.artist
    if "album" in update.model_fields_set:
        if isinstance(update.album, int):
            # check if album exists
            album = db.get(Albums, update.album)
            if album is None:
                raise HTTPException(422, {"msg": "invalid album id"})
        song.album_id = update.album
    if "cover" in update.model_fields_set:
        if isinstance(update.cover, int):
            # check if image exists
            image = db.get(Images, update.cover)
            if image is None:
                raise HTTPException(422, {"msg": "invalid image id"})
        song.cover_id = update.cover
    if "title" in update.model_fields_set:
        if isinstance(update.title, str):
            song.title = update.title
    if "release" in update.model_fields_set:
        song.release = update.release
    if "trackno" in update.model_fields_set:
        song.trackno = update.trackno
    if "metatags" in update.model_fields_set:
        if isinstance(update.metatags, str):
            song.metatags = update.metatags

    db.add(song)
    db.flush()
    db.commit()
    return SongResponse.from_song(song)


@router.delete("/{id}", response_model=DeletedResponse)
def delete_song(id: int = Path(...), db: Session = Depends(get_db)):
    song = db.get(Songs, id)
    if not song:
        raise HTTPException(404)
    db.delete(song)
    db.commit()
    return DeletedResponse()


@router.put("/{id}/favorite", response_model=SongResponse)
def set_favorite(id: int = Path(...), favorite: bool = Query(...), db: Session = Depends(get_db)):
    song = db.get(Songs, id)
    if not song:
        raise HTTPException(404)
    song.favorite = favorite
    db.add(song)
    db.commit()
    return get_song(id, db)


@router.get("/{id}/features", response_model=list[int], tags=[Tags.artist])
def get_features_from_song(id: int = Path(...), db: Session = Depends(get_db)):
    song = db.get(Songs, id)
    if not song:
        raise HTTPException(404)
    return set([feature.artist.id for feature in song.features])


@router.get("/{id}/playlists", response_model=list[int], tags=[Tags.playlist])
def get_playlists_song_is_part_of(id: int = Path(...), db: Session = Depends(get_db)):
    song = db.get(Songs, id)
    if not song:
        raise HTTPException(404)
    return [playlist.id for playlist in song.playlists]
