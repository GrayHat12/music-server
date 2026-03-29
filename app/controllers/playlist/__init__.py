from app.models.models import Images, Songs, Playlists
from app.models.response_schema import PlaylistResponse, DeletedResponse, SystemPlaylistResponse
from app.models.request_schema import PlaylistCreateRequest, PlaylistUpdateRequest
from fastapi import HTTPException, APIRouter, Path, Depends, Query
from app.middleware import get_db
from sqlalchemy.orm import Session
from fastapi.encoders import jsonable_encoder
from app.database.database import get_or_create
from app.config import Tags
from datetime import datetime, timezone

router = APIRouter(prefix="/playlist", tags=[Tags.playlist])

SystemPlaylists = {
    "favorites": SystemPlaylistResponse(
        id="favorites",
        name="Favorites",
        image="/static/favorites.png"
    ),
    "recents": SystemPlaylistResponse(
        id="recents",
        name="Recently Player",
        image="/static/recents.png"
    ),
    "top": SystemPlaylistResponse(
        id="top",
        name="Most Played",
        image="/static/top.png"
    )
}


@router.get("s", response_model=list[PlaylistResponse])
def list_all_playlists(db: Session = Depends(get_db)):
    playlists = db.query(Playlists).all()
    return [PlaylistResponse.from_playlist(playlist) for playlist in playlists]


@router.get("/{id}", response_model=PlaylistResponse)
def get_playlist(id: int = Path(...), db: Session = Depends(get_db)):
    playlist = db.get(Playlists, id)
    if not playlist:
        raise HTTPException(404)
    return PlaylistResponse.from_playlist(playlist)


@router.get("s/system", response_model=list[SystemPlaylistResponse])
def list_system_playlists():
    return [p for p in SystemPlaylists.values()]


@router.get("/{id}", response_model=SystemPlaylistResponse)
def get_system_playlist(id: str = Path(...)):
    playlist = SystemPlaylists.get(id, None)
    if not playlist:
        raise HTTPException(404)
    return playlist


@router.post("", response_model=PlaylistResponse, responses={409: {"model": PlaylistResponse, "description": "Conflict! Artist already exists."}})
def create_playlist(create: PlaylistCreateRequest, db: Session = Depends(get_db)):
    playlist_exists = db.query(Playlists).filter(
        Playlists.name == create.name).first()
    if playlist_exists is not None:
        raise HTTPException(409, jsonable_encoder(
            PlaylistResponse.from_playlist(playlist_exists)))

    if isinstance(create.image, int):
        image_exists = db.get(Images, create.image)
        if image_exists is None:
            raise HTTPException(422, {"msg": "invalid playlist image id"})

    playlist_obj = get_or_create(
        db, Playlists, name=create.name, image_id=create.image)
    db.add(playlist_obj)
    db.flush()
    db.commit()
    return PlaylistResponse.from_playlist(playlist_obj)


@router.patch("/{id}", response_model=PlaylistResponse)
def update_playlist(update: PlaylistUpdateRequest, id: int = Path(...), db: Session = Depends(get_db)):
    playlist = db.get(Playlists, id)
    if not playlist:
        raise HTTPException(404)
    if isinstance(update.name, str) and len(update.name) > 0:
        playlist.name = update.name
    if "image" in update.model_fields_set:
        if isinstance(update.image, int):
            # check if image exists
            image = db.get(Images, update.image)
            if image is None:
                raise HTTPException(422, {"msg": "invalid image id"})
        playlist.image_id = update.image
    db.add(playlist)
    db.flush()
    db.commit()
    return PlaylistResponse.from_playlist(playlist)


@router.delete("/{id}", response_model=DeletedResponse)
def delete_playlist(id: int = Path(...), db: Session = Depends(get_db)):
    playlist = db.get(Playlists, id)
    if not playlist:
        raise HTTPException(404)
    db.delete(playlist)
    db.commit()
    return DeletedResponse()


@router.put("/{id}/favorite", response_model=PlaylistResponse)
def set_favorite(id: int = Path(...), favorite: bool = Query(...), db: Session = Depends(get_db)):
    playlist = db.get(Playlists, id)
    if not playlist:
        raise HTTPException(404)
    playlist.favorite = favorite
    db.add(playlist)
    db.commit()
    return PlaylistResponse.from_playlist(playlist)


@router.get("/{id}/songs", response_model=list[int], tags=[Tags.song])
def get_songs_from_playlist(id: int = Path(...), db: Session = Depends(get_db)):
    playlist = db.get(Playlists, id)
    if not playlist:
        raise HTTPException(404)
    return [song.id for song in playlist.songs]


@router.get("/{id}/songs", response_model=list[int], tags=[Tags.song])
def get_songs_from_system_playlist(id: str = Path(...), db: Session = Depends(get_db)):
    playlist = SystemPlaylists.get(id, None)
    if not playlist:
        raise HTTPException(404)
    match playlist.id:
        case "favorites":
            songs = db.query(Songs).where(Songs.favorite == True).all()
            return [song.id for song in songs]
        case "recents":
            songs = db.query(Songs).where(Songs.last_streamed.is_not(
                None)).order_by(Songs.last_streamed.desc()).limit(50).all()
            return [song.id for song in songs]
        case "top":
            songs = db.query(Songs).where(Songs.stream_count > 0).order_by(
                Songs.stream_count.desc()).limit(100).all()
            return [song.id for song in songs]
        case _:
            raise HTTPException(404)


@router.get("/{id}/genres", response_model=list[str], tags=[Tags.genre])
def get_genres_from_playlist(id: int = Path(...), db: Session = Depends(get_db)):
    playlist = db.get(Playlists, id)
    if not playlist:
        raise HTTPException(404)
    return set([song.genre.name for song in playlist.songs if song.genre])


@router.get("/{id}/artists", response_model=list[int], tags=[Tags.artist])
def get_artists_from_playlist(id: int = Path(...), db: Session = Depends(get_db)):
    playlist = db.get(Playlists, id)
    if not playlist:
        raise HTTPException(404)
    return set([song.artist.id for song in playlist.songs if song.artist]).union(set([feature.artist.id for songs in playlist.songs for feature in songs.features if feature.artist]))


@router.get("/{id}/albums", response_model=list[int], tags=[Tags.album])
def get_albums_from_playlist(id: int = Path(...), db: Session = Depends(get_db)):
    playlist = db.get(Playlists, id)
    if not playlist:
        raise HTTPException(404)
    return set([song.album.id for song in playlist.songs if song.album])


@router.get("/{id}/play", response_model=list[int], tags=[Tags.album])
def register_playlist_played(id: int = Path(...), db: Session = Depends(get_db)):
    playlist = db.get(Playlists, id)
    if not playlist:
        raise HTTPException(404)
    playlist.stream_count += 1
    playlist.last_streamed = datetime.now(timezone.utc)
    db.add(playlist)
    db.flush()
    db.commit()
    return set([song.album.id for song in playlist.songs if song.album])
