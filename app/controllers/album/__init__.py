from app.models.models import Albums, Artists, Images
from app.models.response_schema import AlbumResponse, DeletedResponse
from app.models.request_schema import AlbumCreateRequest, AlbumUpdateRequest
from fastapi import HTTPException, APIRouter, Path, Depends, Query
from fastapi.encoders import jsonable_encoder
from app.database.database import get_or_create
from app.config import Tags
from app.middleware import get_db
from sqlalchemy.orm import Session

router = APIRouter(prefix="/album", tags=[Tags.album])
# db = SessionLocal()


@router.get("s", response_model=list[AlbumResponse])
def list_all_albums(db: Session = Depends(get_db)):
    albums = db.query(Albums).all()
    return [AlbumResponse(
        id=album.id,
        name=album.name,
        image=album.image_id or album.artist.image_id,
        lastUpdated=album.last_updated,
        artist=album.artist_id,
        streamCount=album.stream_count,
        lastStreamed=album.last_streamed,
        favorite=album.favorite
    ) for album in albums]


@router.get("/{id}", response_model=AlbumResponse)
def get_album(id: int = Path(...), db: Session = Depends(get_db)):
    album = db.get(Albums, id)
    if not album:
        raise HTTPException(404)
    return AlbumResponse(
        id=album.id,
        name=album.name,
        image=album.image_id or album.artist.image_id,
        lastUpdated=album.last_updated,
        artist=album.artist_id,
        streamCount=album.stream_count,
        lastStreamed=album.last_streamed,
        favorite=album.favorite
    )


@router.post("", response_model=AlbumResponse, responses={409: {"model": AlbumResponse, "description": "Conflict! Album already exists."}})
def create_album(album: AlbumCreateRequest, db: Session = Depends(get_db)):
    artist = db.get(Artists, album.artist)
    if artist is None:
        raise HTTPException(422, {"msg": "Provided artist does not exist"})

    album_exists = db.query(Albums).filter(
        Albums.artist_id == artist.id, Albums.name == album.name).first()
    if album_exists:
        raise HTTPException(409, jsonable_encoder(
            get_album(album_exists.id, db)))
    album_obj = get_or_create(
        db, Albums, name=album.name, artist_id=artist.id, image_id=album.image)
    db.add(album_obj)
    db.flush()
    db.commit()
    return get_album(album_obj.id, db)


@router.patch("/{id}", response_model=AlbumResponse)
def update_album(update: AlbumUpdateRequest, id: int = Path(...), db: Session = Depends(get_db)):
    album = db.get(Albums, id)
    if not album:
        raise HTTPException(404)
    if isinstance(update.name, str) and len(update.name) > 0:
        album.name = update.name
    if "image" in update.model_fields_set:
        if isinstance(update.image, int):
            # check if image exists
            image = db.get(Images, update.image)
            if image is None:
                raise HTTPException(422, {"msg": "invalid image id"})
        album.image_id = update.image
    db.add(album)
    db.flush()
    db.commit()
    return get_album(album.id, db)


@router.delete("/{id}", response_model=DeletedResponse)
def delete_album(id: int = Path(...), db: Session = Depends(get_db)):
    album = db.get(Albums, id)
    if not album:
        raise HTTPException(404)
    db.delete(album)
    db.commit()
    return DeletedResponse()


@router.get("/{id}/songs", response_model=list[int], tags=[Tags.song])
def get_songs_from_album(id: int = Path(...), db: Session = Depends(get_db)):
    album = db.get(Albums, id)
    if not album:
        raise HTTPException(404)
    return [song.id for song in album.songs]


@router.put("/{id}/favorite", response_model=AlbumResponse)
def set_favorite(id: int = Path(...), favorite: bool = Query(...), db: Session = Depends(get_db)):
    album = db.get(Albums, id)
    if not album:
        raise HTTPException(404)
    album.favorite = favorite
    db.add(album)
    db.commit()
    return get_album(id, db)


@router.get("/{id}/genres", response_model=list[str], tags=[Tags.genre])
def get_genres_from_album(id: int = Path(...), db: Session = Depends(get_db)):
    album = db.get(Albums, id)
    if not album:
        raise HTTPException(404)
    return set([song.genre.name for song in album.songs if song.genre])


@router.get("/{id}/features", response_model=list[int], tags=[Tags.artist])
def get_features_from_album(id: int = Path(...), db: Session = Depends(get_db)):
    album = db.get(Albums, id)
    if not album:
        raise HTTPException(404)
    return set([feature.artist.id for songs in album.songs for feature in songs.features if feature.artist])
