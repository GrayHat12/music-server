from app.models.models import Genres
from app.models.response_schema import DeletedResponse, GenreResponse
from app.models.request_schema import GenreCreateRequest, GenreUpdateRequest
from fastapi import HTTPException, APIRouter, Query, Depends, Path
from app.middleware import get_db
from sqlalchemy.orm import Session
from fastapi.encoders import jsonable_encoder
from app.database.database import get_or_create
from app.config import Tags

router = APIRouter(prefix="/genre", tags=[Tags.genre])
# db = SessionLocal()


@router.get("s", response_model=list[GenreResponse])
def list_all_genres(db: Session = Depends(get_db)):
    genres = db.query(Genres).all()
    return [GenreResponse(
        id=genre.id,
        name=genre.name,
        lastUpdated=genre.last_updated,
        streamCount=genre.stream_count,
        lastStreamed=genre.last_streamed
    ) for genre in genres]


@router.get("/{id}", response_model=GenreResponse)
def get_genre(id: int = Path(...), db: Session = Depends(get_db)):
    genre = db.get(Genres, id)
    if genre is None:
        raise HTTPException(404)
    return GenreResponse(
        id=genre.id,
        name=genre.name,
        lastUpdated=genre.last_updated,
        streamCount=genre.stream_count,
        lastStreamed=genre.last_streamed
    )


@router.post("", response_model=GenreResponse, responses={409: {"model": str, "description": "Conflict! Genre already exists."}})
def create_genre(create: GenreCreateRequest, db: Session = Depends(get_db)):
    genre_exists = db.query(Genres).filter(Genres.name == create.name).first()
    if genre_exists:
        raise HTTPException(409, jsonable_encoder(genre_exists.name))
    genre_obj = get_or_create(db, Genres, name=create.name)
    db.add(genre_obj)
    db.flush()
    db.commit()
    return get_genre(genre_obj.id)


@router.patch("/{id}", response_model=GenreResponse, responses={409: {"model": str, "description": "Conflict! Genre with same name already exists."}})
def update_genre(update: GenreUpdateRequest, id: int = Path(...), db: Session = Depends(get_db)):
    genre = db.get(Genres, id)
    if not genre:
        raise HTTPException(404)
    conflict = db.query(Genres).filter(Genres.name == update.name).first()
    if conflict is not None:
        raise HTTPException(409, jsonable_encoder(conflict.name))
    genre.name = update.name
    db.add(genre)
    db.flush()
    db.commit()
    return get_genre(genre.id)


@router.delete("/{id}", response_model=DeletedResponse)
def delete_genre(id: int = Path(...), db: Session = Depends(get_db)):
    genre = db.get(Genres, id)
    if not genre:
        raise HTTPException(404)
    db.delete(genre)
    db.commit()
    return DeletedResponse()


@router.get("/{id}/songs", response_model=list[int], tags=[Tags.song])
def get_songs_from_genre(id: int = Path(...), db: Session = Depends(get_db)):
    genre = db.get(Genres, id)
    if not genre:
        raise HTTPException(404)
    return [song.id for song in genre.songs]
