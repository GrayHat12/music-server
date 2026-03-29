from app.models.models import Images, Artists
from app.models.response_schema import ArtistResponse, DeletedResponse
from app.models.request_schema import ArtistCreateRequest, ArtistUpdateRequest
from fastapi import HTTPException, APIRouter, Path, Depends
from fastapi.encoders import jsonable_encoder
from app.database.database import get_or_create
from app.middleware import get_db
from sqlalchemy.orm import Session
from app.config import Tags

router = APIRouter(prefix="/artist", tags=[Tags.artist])
# db = SessionLocal()


@router.get("s", response_model=list[ArtistResponse])
def list_all_artist(db: Session = Depends(get_db)):
    artists = db.query(Artists).all()
    return [ArtistResponse(
        id=artist.id,
        name=artist.name,
        image=artist.image_id,
        lastUpdated=artist.last_updated,
        streamCount=artist.stream_count,
        lastStreamed=artist.last_streamed
    ) for artist in artists]


@router.get("/{id}", response_model=ArtistResponse)
def get_artist(id: int = Path(...), db: Session = Depends(get_db)):
    artist = db.get(Artists, id)
    if not artist:
        raise HTTPException(404)
    return ArtistResponse(
        id=artist.id,
        name=artist.name,
        image=artist.image_id,
        lastUpdated=artist.last_updated,
        streamCount=artist.stream_count,
        lastStreamed=artist.last_streamed
    )


@router.post("", response_model=ArtistResponse, responses={409: {"model": ArtistResponse, "description": "Conflict! Artist already exists."}})
def create_artist(artist: ArtistCreateRequest, db: Session = Depends(get_db)):
    artist_exists = db.query(Artists).filter(
        Artists.name == artist.name).first()
    if artist_exists is not None:
        raise HTTPException(409, jsonable_encoder(
            get_artist(artist_exists.id)))

    artist_obj = get_or_create(
        db, Artists, name=artist.name, image_id=artist.image)
    db.add(artist_obj)
    db.flush()
    db.commit()
    return get_artist(artist_obj.id)


@router.patch("/{id}", response_model=ArtistResponse)
def update_artist(update: ArtistUpdateRequest, id: int = Path(...), db: Session = Depends(get_db)):
    artist = db.get(Artists, id)
    if not artist:
        raise HTTPException(404)
    if isinstance(update.name, str) and len(update.name) > 0:
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
    return get_artist(artist.id)


@router.delete("/{id}", response_model=DeletedResponse)
def delete_artist(id: int = Path(...), db: Session = Depends(get_db)):
    artist = db.get(Artists, id)
    if not artist:
        raise HTTPException(404)
    db.delete(artist)
    db.commit()
    return DeletedResponse()


@router.get("/{id}/songs", response_model=list[int], tags=[Tags.song])
def get_songs_from_artist(id: int = Path(...), db: Session = Depends(get_db)):
    artist = db.get(Artists, id)
    if not artist:
        raise HTTPException(404)
    return [song.id for song in artist.songs]


@router.get("/{id}/genres", response_model=list[str], tags=[Tags.genre])
def get_genres_from_artist(id: int = Path(...), db: Session = Depends(get_db)):
    artist = db.get(Artists, id)
    if not artist:
        raise HTTPException(404)
    return set([song.genre.name for song in artist.songs if song.genre])


@router.get("/{id}/features", response_model=list[int], tags=[Tags.song])
def get_features_from_artist(id: int = Path(...), db: Session = Depends(get_db)):
    artist = db.get(Artists, id)
    if not artist:
        raise HTTPException(404)
    return set([feature.song.id for songs in artist.songs for feature in songs.features if feature.artist])


@router.get("/{id}/collaborations", response_model=list[int])
def get_collaborations_from_artist(id: int = Path(...), db: Session = Depends(get_db)):
    artist = db.get(Artists, id)
    if not artist:
        raise HTTPException(404)
    return set([feature.artist.id for songs in artist.songs for feature in songs.features if feature.artist and feature.artist_id != id])
