from app.models.models import Genres
from app.models.response_schema import DeletedResponse
from app.models.request_schema import GenreCreateRequest, GenreUpdateRequest
from fastapi import HTTPException, APIRouter, Query, Depends
from app.middleware import get_db
from sqlalchemy.orm import Session
from fastapi.encoders import jsonable_encoder
from app.database.database import get_or_create
from app.config import Tags

router = APIRouter(prefix="/genre", tags=[Tags.genre])
# db = SessionLocal()


@router.get("s", response_model=list[str])
def list_all_genres(db: Session = Depends(get_db)):
    genres = db.query(Genres).all()
    return [genre.name for genre in genres]


@router.post("", response_model=str, responses={409: {"model": str, "description": "Conflict! Genre already exists."}})
def create_genre(create: GenreCreateRequest, db: Session = Depends(get_db)):
    genre_exists = db.query(Genres).filter(Genres.name == create.name).first()
    if genre_exists:
        raise HTTPException(409, jsonable_encoder(genre_exists.name))
    genre_obj = get_or_create(db, Genres, name=create.name)
    db.add(genre_obj)
    db.flush()
    db.commit()
    return genre_obj.name


@router.patch("", response_model=str, responses={409: {"model": str, "description": "Conflict! Genre with same name already exists."}})
def update_genre(update: GenreUpdateRequest, db: Session = Depends(get_db)):
    genre = db.query(Genres).filter(Genres.name == update.oldname).first()
    if not genre:
        raise HTTPException(404)
    conflict = db.query(Genres).filter(Genres.name == update.newname).first()
    if conflict is not None:
        raise HTTPException(409, jsonable_encoder(conflict.name))
    genre.name = update.newname
    db.add(genre)
    db.flush()
    db.commit()
    return genre.name


@router.delete("", response_model=DeletedResponse)
def delete_genre(name: str = Query(...), db: Session = Depends(get_db)):
    genre = db.query(Genres).filter(Genres.name == name).first()
    if not genre:
        raise HTTPException(404)
    db.delete(genre)
    db.commit()
    return DeletedResponse()


@router.get("/songs", response_model=list[int], tags=[Tags.song])
def get_songs_from_genre(name: str = Query(...), db: Session = Depends(get_db)):
    genre = db.query(Genres).filter(Genres.name == name).first()
    if not genre:
        raise HTTPException(404)
    return [song.id for song in genre.songs]
