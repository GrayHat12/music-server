from app.models.models import Images, Artists, Features, Songs, Albums
from app.models.response_schema import ArtistResponse, AlbumResponse, DeletedResponse, GenreResponse, SystemPlaylistResponse
from app.models.request_schema import ArtistCreateRequest, ArtistUpdateRequest
from fastapi import HTTPException, APIRouter, Path, Depends, Query
from fastapi.encoders import jsonable_encoder
from app.database.database import get_or_create
from app.middleware import get_db
from sqlalchemy.orm import Session
from sqlalchemy import update
from app.config import Tags
from datetime import datetime

router = APIRouter(prefix="/artist", tags=[Tags.artist])
# db = SessionLocal()


@router.get("s", response_model=list[ArtistResponse])
def list_all_artist(db: Session = Depends(get_db)):
    artists = db.query(Artists).all()
    very_old_date = datetime.fromtimestamp(0)
    return [ArtistResponse.from_artist(artist) for artist in sorted(artists, key=lambda x: (x.last_streamed or very_old_date) if not x.favorite else datetime.now(), reverse=True) if len(artist.songs) > 0]


@router.get("/{id}", response_model=ArtistResponse)
def get_artist(id: int = Path(...), db: Session = Depends(get_db)):
    artist = db.get(Artists, id)
    if not artist:
        raise HTTPException(404)
    return ArtistResponse.from_artist(artist)


@router.post("", response_model=ArtistResponse, responses={409: {"model": ArtistResponse, "description": "Conflict! Artist already exists."}})
def create_artist(artist: ArtistCreateRequest, db: Session = Depends(get_db)):
    artist_exists = db.query(Artists).filter(
        Artists.name == artist.name).first()
    if artist_exists is not None:
        raise HTTPException(409, jsonable_encoder(
            ArtistResponse.from_artist(artist_exists)))

    artist_obj = get_or_create(
        db, Artists, name=artist.name, image_id=artist.image)
    db.add(artist_obj)
    db.flush()
    db.commit()
    return ArtistResponse.from_artist(artist_obj)


@router.patch("/{id}", response_model=ArtistResponse)
def update_artist(update: ArtistUpdateRequest, id: int = Path(...), merge: bool = Query(False), db: Session = Depends(get_db)):
    artist = db.get(Artists, id)
    if not artist:
        raise HTTPException(404)
    if isinstance(update.name, str) and len(update.name) > 0:
        existing_artist = db.query(Artists).filter(
            Artists.name == update.name).first()
        if existing_artist and not merge:
            raise HTTPException(
                422, {"msg": "Artist with same name already exists"})
        elif existing_artist and merge:
            return merge_artists(id, existing_artist.id, db)
        artist.name = update.name
    if "image" in update.model_fields_set:
        if isinstance(update.image, int):
            # check if image exists
            image = db.get(Images, update.image)
            if image is None:
                raise HTTPException(422, {"msg": "invalid image id"})
        artist.image_id = update.image
    db.add(artist)
    db.flush()
    db.commit()
    return ArtistResponse.from_artist(artist)


@router.delete("/{id}", response_model=DeletedResponse)
def delete_artist(id: int = Path(...), db: Session = Depends(get_db)):
    artist = db.get(Artists, id)
    if not artist:
        raise HTTPException(404)
    db.delete(artist)
    db.commit()
    return DeletedResponse()


@router.put("/{id}/favorite", response_model=ArtistResponse)
def set_favorite(id: int = Path(...), favorite: bool = Query(...), db: Session = Depends(get_db)):
    artist = db.get(Artists, id)
    if not artist:
        raise HTTPException(404)
    artist.favorite = favorite
    db.add(artist)
    db.commit()
    return ArtistResponse.from_artist(artist)


@router.get("/{id}/songs", response_model=list[int], tags=[Tags.song])
def get_songs_from_artist(id: int = Path(...), top: int = Query(0, ge=0), db: Session = Depends(get_db)):
    artist = db.get(Artists, id)
    if not artist:
        raise HTTPException(404)
    songs = [song.id for song in sorted(
        artist.songs, key=lambda x: x.stream_count, reverse=True)]
    if top > 0:
        return songs[:top]
    return songs


@router.get("/{id}/genres", response_model=list[GenreResponse], tags=[Tags.genre])
def get_genres_from_artist(id: int = Path(...), db: Session = Depends(get_db)):
    artist = db.get(Artists, id)
    if not artist:
        raise HTTPException(404)
    return set([GenreResponse.from_genre(song.genre) for song in artist.songs if song.genre])


@router.get("/{id}/albums", response_model=list[AlbumResponse], tags=[Tags.genre])
def get_albums_from_artist(id: int = Path(...), db: Session = Depends(get_db)):
    artist = db.get(Artists, id)
    if not artist:
        raise HTTPException(404)
    return [AlbumResponse.from_album(album) for album in artist.albums]


@router.get("/{id}/features", response_model=list[int], tags=[Tags.song])
def get_songs_artist_is_featured_on(id: int = Path(...), db: Session = Depends(get_db)):
    artist = db.get(Artists, id)
    if not artist:
        raise HTTPException(404)
    songs = db.query(Features).where(Features.artist_id == artist.id).all()
    return set([song.id for song in songs])


@router.get("/{dest}/merge/{src}", response_model=ArtistResponse)
def merge_artists(dest: int = Path(...), src: int = Path(...), db: Session = Depends(get_db)):
    src_artist = db.get(Artists, src)
    dest_artist = db.get(Artists, dest)
    if not src_artist or not dest_artist:
        raise HTTPException(404)
    db.execute(
        update(Songs).where(Songs.artist_id == src).values(artist_id=dest)
    )
    db.execute(
        update(Albums).where(Albums.artist_id == src).values(artist_id=dest)
    )
    dest_artist.stream_count += src_artist.stream_count
    if src_artist.last_streamed:
        if not dest_artist.last_streamed or src_artist.last_streamed > dest_artist.last_streamed:
            dest_artist.last_streamed = src_artist.last_streamed
    new_name = src_artist.name
    dest_artist.image_id = src_artist.image_id
    db.delete(src_artist)
    db.flush()
    dest_artist.name = new_name
    db.flush()
    db.commit()
    db.refresh(dest_artist)
    return ArtistResponse.from_artist(dest_artist)


@router.get("/{id}/collaborations", response_model=list[int])
def get_collaborations_from_artist(id: int = Path(...), db: Session = Depends(get_db)):
    artist = db.get(Artists, id)
    if not artist:
        raise HTTPException(404)
    return set([feature.artist.id for songs in artist.songs for feature in songs.features if feature.artist and feature.artist_id != id])


@router.get("/{id}/playlists", response_model=list[SystemPlaylistResponse], tags=[Tags.playlist])
def get_artist_specific_playlists(id: int = Path(...), db: Session = Depends(get_db)):
    artist = db.get(Artists, id)
    if not artist:
        raise HTTPException(404)
    playlists: list[SystemPlaylistResponse] = []
    liked_songs = [song for song in artist.songs if song.favorite]
    if len(liked_songs) > 0:
        playlists.append(SystemPlaylistResponse(
            id=f"artist-{id}-likedsongs",
            name="Liked Songs",
            image="/static/favorites.jpg",
            duration=sum([song.duration or 0 for song in liked_songs]),
            items=len(liked_songs)
        ))
    if len(artist.songs) > 0:
        playlists.append(SystemPlaylistResponse(
            id=f"artist-{id}-allsongs",
            name=f"This is {artist.name}",
            image=artist.image.id if artist.image else None,
            duration=sum([song.duration or 0 for song in artist.songs]),
            items=len(artist.songs)
        ))
    featured_songs = set(
        [feature.song for songs in artist.songs for feature in songs.features if feature.artist])
    if len(featured_songs) > 0:
        playlists.append(SystemPlaylistResponse(
            id=f"artist-{id}-features",
            name=f"Features",
            image=artist.image.id if artist.image else None,
            duration=sum([song.duration or 0 for song in featured_songs]),
            items=len(featured_songs)
        ))
    return playlists


@router.get("/playlist/{id}", response_model=SystemPlaylistResponse, tags=[Tags.playlist])
def get_artist_specific_playlist(id: str = Path(..., pattern=r'artist-\d+-\w+'), db: Session = Depends(get_db)):
    [_, artistid, playlistid] = id.split('-')
    artistid = int(artistid)
    artist = db.get(Artists, artistid)
    if not artist:
        raise HTTPException(404)

    match playlistid:
        case "allsongs":
            return SystemPlaylistResponse(
                id=f"artist-{id}-allsongs",
                name=f"This is {artist.name}",
                image=artist.image.id if artist.image else None,
                duration=sum([song.duration or 0 for song in artist.songs]),
                items=len(artist.songs)
            )
        case "likedsongs":
            return SystemPlaylistResponse(
                id=f"artist-{id}-likedsongs",
                name="Liked Songs",
                image="/static/favorites.jpg",
                duration=sum(
                    [song.duration or 0 for song in artist.songs if song.favorite]),
                items=len([song for song in artist.songs if song.favorite])
            )
        case "features":
            featured_songs = set(
                [feature.song for songs in artist.songs for feature in songs.features if feature.artist])
            return SystemPlaylistResponse(
                id=f"artist-{id}-features",
                name=f"Features",
                image=artist.image.id if artist.image else None,
                duration=sum([song.duration or 0 for song in featured_songs]),
                items=len(featured_songs)
            )
        case _: raise HTTPException(404)


@router.get("/playlist/{id}/songs", response_model=list[int], tags=[Tags.playlist, Tags.song])
def get_artist_playlist_songs(id: str = Path(..., pattern=r'artist-\d+-\w+'), db: Session = Depends(get_db)):
    [_, artistid, playlistid] = id.split('-')
    artistid = int(artistid)
    artist = db.get(Artists, artistid)
    if not artist:
        raise HTTPException(404)

    match playlistid:
        case "allsongs":
            return get_songs_from_artist(artistid, -1, db)
        case "likedsongs":
            return [song.id for song in sorted(artist.songs, key=lambda x: x.stream_count, reverse=True) if song.favorite]
        case "features":
            return get_songs_artist_is_featured_on(artistid, db)
        case _: raise HTTPException(404)


@router.get("/playlist/{id}/genre", response_model=list[GenreResponse], tags=[Tags.playlist, Tags.genre])
def get_artist_playlist_genres(id: str = Path(..., pattern=r'artist-\d+-\w+'), db: Session = Depends(get_db)):
    [_, artistid, playlistid] = id.split('-')
    artistid = int(artistid)
    artist = db.get(Artists, artistid)
    if not artist:
        raise HTTPException(404)

    liked_songs = [song for song in artist.songs if song.favorite]
    featured_songs = set(
        [feature.song for songs in artist.songs for feature in songs.features if feature.artist])

    match playlistid:
        case "allsongs":
            return set([GenreResponse.from_genre(song.genre) for song in artist.songs if song.genre])
        case "likedsongs":
            return set([GenreResponse.from_genre(song.genre) for song in liked_songs if song.genre])
        case "features":
            return set([GenreResponse.from_genre(song.genre) for song in featured_songs if song.genre])
        case _: raise HTTPException(404)
