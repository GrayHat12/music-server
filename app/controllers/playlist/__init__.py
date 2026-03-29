from app.models.models import Images, Playlists
from app.models.response_schema import PlaylistResponse, DeletedResponse
from app.models.request_schema import PlaylistCreateRequest, PlaylistUpdateRequest
from fastapi import HTTPException, APIRouter, Path, Depends
from app.middleware import get_db
from sqlalchemy.orm import Session
from fastapi.encoders import jsonable_encoder
from app.database.database import get_or_create
from app.config import Tags

router = APIRouter(prefix="/playlist", tags=[Tags.playlist])
# db = SessionLocal()


@router.get("s", response_model=PlaylistResponse)
def list_all_playlists(db: Session = Depends(get_db)):
    playlists = db.query(Playlists).all()
    return [PlaylistResponse(
        id=playlist.id,
        name=playlist.name,
        image=playlist.image_id,
        last_updated=playlist.last_updated,
        # songs=[song.id for song in playlist.songs]
    ) for playlist in playlists]


@router.get("/{id}", response_model=PlaylistResponse)
def get_playlist(id: int = Path(...), db: Session = Depends(get_db)):
    playlist = db.get(Playlists, id)
    if not playlist:
        raise HTTPException(404)
    return PlaylistResponse(
        id=playlist.id,
        name=playlist.name,
        image=playlist.image_id,
        last_updated=playlist.last_updated,
        # songs=[song.id for song in playlist.songs]
    )


@router.post("", response_model=PlaylistResponse, responses={409: {"model": PlaylistResponse, "description": "Conflict! Artist already exists."}})
def create_playlist(create: PlaylistCreateRequest, db: Session = Depends(get_db)):
    playlist_exists = db.query(Playlists).filter(
        Playlists.name == create.name).first()
    if playlist_exists is not None:
        raise HTTPException(409, jsonable_encoder(
            get_playlist(playlist_exists.id)))

    if isinstance(create.image, int):
        image_exists = db.get(Images, create.image)
        if image_exists is None:
            raise HTTPException(422, {"msg": "invalid playlist image id"})

    playlist_obj = get_or_create(
        db, Playlists, name=create.name, image_id=create.image)
    db.add(playlist_obj)
    db.flush()
    db.commit()
    return get_playlist(playlist_obj.id)


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
    return get_playlist(playlist.id)


@router.delete("/{id}", response_model=DeletedResponse)
def delete_playlist(id: int = Path(...), db: Session = Depends(get_db)):
    playlist = db.get(Playlists, id)
    if not playlist:
        raise HTTPException(404)
    db.delete(playlist)
    db.commit()
    return DeletedResponse()


@router.get("/{id}/songs", response_model=list[int], tags=[Tags.song])
def get_songs_from_playlist(id: int = Path(...), db: Session = Depends(get_db)):
    playlist = db.get(Playlists, id)
    if not playlist:
        raise HTTPException(404)
    return [song.id for song in playlist.songs]


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
