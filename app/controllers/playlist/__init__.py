from app.models.models import Images, Songs, Playlists, Genres
from app.models.response_schema import PlaylistResponse, DeletedResponse, SystemPlaylistResponse, GenreResponse
from app.models.request_schema import PlaylistCreateRequest, PlaylistUpdateRequest
from fastapi import HTTPException, APIRouter, Path, Depends, Query
from app.middleware import get_db
from sqlalchemy.orm import Session
from sqlalchemy import select, func
from fastapi.encoders import jsonable_encoder
from app.database.database import get_or_create
from app.config import Tags
from datetime import datetime, timezone

router = APIRouter(prefix="/playlist", tags=[Tags.playlist])

SystemPlaylists = {
    "favorites": SystemPlaylistResponse(
        id="favorites",
        name="Favorites",
        image="/static/favorites.jpg",
        duration=0,
        items=0
    ),
    "recents": SystemPlaylistResponse(
        id="recents",
        name="Recently Played",
        image="/static/recents.jpg",
        duration=0,
        items=0
    ),
    "top": SystemPlaylistResponse(
        id="top",
        name="Most Played",
        image="/static/top.jpeg",
        duration=0,
        items=0
    ),
    "all": SystemPlaylistResponse(
        id="all",
        name="Library",
        image="/static/genre.jpeg",
        duration=0,
        items=0
    )
}

very_old_date = datetime.fromtimestamp(0)


@router.get("s", response_model=list[PlaylistResponse])
def list_all_playlists(db: Session = Depends(get_db)):
    playlists = db.query(Playlists).all()
    return [PlaylistResponse.from_playlist(playlist) for playlist in sorted(playlists, key=lambda x: (x.last_streamed or very_old_date) if not x.favorite else datetime.now(), reverse=True)]


@router.get("/system/{sid}", response_model=SystemPlaylistResponse)
def get_system_playlist(sid: str = Path(...), db: Session = Depends(get_db)):
    # playlist = SystemPlaylists.get(sid, None)
    match sid:
        case "all":
            playlist = SystemPlaylists["all"]
            playlist.duration = db.execute(
                select(func.coalesce(func.sum(Songs.duration), 0)
                       ).select_from(Songs)
            ).scalar() or 0
            playlist.items = db.execute(
                select(func.count()).select_from(Songs)
            ).scalar() or 0
            return playlist
        case "top":
            playlist = SystemPlaylists["top"]
            playlist.duration = db.execute(
                select(func.coalesce(func.sum(Songs.duration), 0)).select_from(Songs).where(Songs.stream_count > 0).order_by(
                    Songs.stream_count.desc()).limit(100)
            ).scalar() or 0
            playlist.items = db.execute(
                select(func.count()).select_from(Songs).where(Songs.stream_count > 0).order_by(
                    Songs.stream_count.desc()).limit(100)
            ).scalar() or 0
            return playlist
        case "recents":
            playlist = SystemPlaylists["recents"]
            playlist.duration = db.execute(
                select(func.coalesce(func.sum(Songs.duration), 0)).select_from(Songs).where(
                    Songs.last_streamed.is_not(None)).order_by(Songs.last_streamed.desc()).limit(50)
            ).scalar() or 0
            playlist.items = db.execute(
                select(func.count()).select_from(Songs).where(
                    Songs.last_streamed.is_not(None)).order_by(Songs.last_streamed.desc()).limit(50)
            ).scalar() or 0
            return playlist
        case "favorites":
            playlist = SystemPlaylists["favorites"]
            playlist.duration = db.execute(
                select(func.coalesce(func.sum(Songs.duration), 0)).select_from(
                    Songs).where(Songs.favorite == True)
            ).scalar() or 0
            playlist.items = db.execute(
                select(func.count()).select_from(
                    Songs).where(Songs.favorite == True)
            ).scalar() or 0
            return playlist
        case _:
            raise HTTPException(404)


@router.get("/{id}", response_model=PlaylistResponse)
def get_playlist(id: int = Path(...), db: Session = Depends(get_db)):
    playlist = db.get(Playlists, id)
    if not playlist:
        raise HTTPException(404)
    return PlaylistResponse.from_playlist(playlist)


@router.get("s/system", response_model=list[SystemPlaylistResponse])
def list_system_playlists(db: Session = Depends(get_db)):
    return [p for p in SystemPlaylists.values() if get_system_playlist(p.id, db).items > 0]


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


@router.get("/system/{sid}/songs", response_model=list[int], tags=[Tags.song])
def get_songs_from_system_playlist(sid: str = Path(...), db: Session = Depends(get_db)):
    playlist = SystemPlaylists.get(sid, None)
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
        case "all":
            songs = db.query(Songs).order_by(
                Songs.stream_count.desc()).all()
            return [song.id for song in songs]
        case _:
            raise HTTPException(404)


@router.get("/{id}/songs", response_model=list[int], tags=[Tags.song])
def get_songs_from_playlist(id: int = Path(...), db: Session = Depends(get_db)):
    playlist = db.get(Playlists, id)
    if not playlist:
        raise HTTPException(404)
    return [song.id for song in playlist.songs]


@router.get("/system/{sid}/genres", response_model=list[GenreResponse], tags=[Tags.genre])
def get_genres_from_sys_playlist(sid: str = Path(...), db: Session = Depends(get_db)):
    playlist = SystemPlaylists.get(sid, None)
    if not playlist:
        raise HTTPException(404)
    match playlist.id:
        case "favorites":
            songs = db.query(Songs).where(Songs.favorite == True).all()
            return set([GenreResponse.from_genre(song.genre) for song in songs if song.genre])
        case "recents":
            songs = db.query(Songs).where(Songs.last_streamed.is_not(
                None)).order_by(Songs.last_streamed.desc()).limit(50).all()
            return set([GenreResponse.from_genre(song.genre) for song in songs if song.genre])
        case "top":
            songs = db.query(Songs).where(Songs.stream_count > 0).order_by(
                Songs.stream_count.desc()).limit(100).all()
            return set([GenreResponse.from_genre(song.genre) for song in songs if song.genre])
        case "all":
            return set([GenreResponse.from_genre(genre) for genre in db.query(Genres).all()])
        case _:
            raise HTTPException(404)


@router.get("/{id}/genres", response_model=list[GenreResponse], tags=[Tags.genre])
def get_genres_from_playlist(id: int = Path(...), db: Session = Depends(get_db)):
    playlist = db.get(Playlists, id)
    if not playlist:
        raise HTTPException(404)
    return set([GenreResponse.from_genre(song.genre) for song in playlist.songs if song.genre])


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
