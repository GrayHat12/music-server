from app.models.models import Genres, Songs
from app.models.response_schema import DeletedResponse, GenreResponse
from app.models.request_schema import GenreCreateRequest, GenreUpdateRequest
from fastapi import HTTPException, APIRouter, Query, Depends, Path
from app.middleware import get_db
from sqlalchemy.orm import Session
from sqlalchemy import update
from fastapi.encoders import jsonable_encoder
from app.database.database import get_or_create
from app.config import Tags
from datetime import datetime

very_old_date = datetime.fromtimestamp(0)

router = APIRouter(prefix="/genre", tags=[Tags.genre])
# db = SessionLocal()


@router.get("s", response_model=list[GenreResponse])
def list_all_genres(db: Session = Depends(get_db)):
    genres = db.query(Genres).all()
    return [GenreResponse.from_genre(genre) for genre in sorted(genres, key=lambda x: (x.last_streamed or very_old_date) if not x.favorite else datetime.now(), reverse=True)]


@router.get("/{id}", response_model=GenreResponse)
def get_genre(id: int = Path(...), db: Session = Depends(get_db)):
    genre = db.get(Genres, id)
    if genre is None:
        raise HTTPException(404)
    return GenreResponse.from_genre(genre)


@router.post("", response_model=GenreResponse, responses={409: {"model": str, "description": "Conflict! Genre already exists."}})
def create_genre(create: GenreCreateRequest, db: Session = Depends(get_db)):
    genre_exists = db.query(Genres).filter(Genres.name == create.name).first()
    if genre_exists:
        raise HTTPException(409, jsonable_encoder(genre_exists.name))
    genre_obj = get_or_create(db, Genres, name=create.name)
    db.add(genre_obj)
    db.flush()
    db.commit()
    return GenreResponse.from_genre(genre_obj)


@router.patch("/{id}", response_model=GenreResponse, responses={409: {"model": str, "description": "Conflict! Genre with same name already exists."}})
def update_genre(update: GenreUpdateRequest, id: int = Path(...), merge: bool = Query(False), db: Session = Depends(get_db)):
    genre = db.get(Genres, id)
    if not genre:
        raise HTTPException(404)
    conflict = db.query(Genres).filter(Genres.name == update.name).first()
    if conflict is not None and not merge:
        raise HTTPException(409, jsonable_encoder(conflict.name))
    elif conflict is not None and merge:
        return merge_genre(id, conflict.id, db)
    genre.name = update.name
    db.add(genre)
    db.flush()
    db.commit()
    return GenreResponse.from_genre(genre)


@router.delete("/{id}", response_model=DeletedResponse)
def delete_genre(id: int = Path(...), db: Session = Depends(get_db)):
    genre = db.get(Genres, id)
    if not genre:
        raise HTTPException(404)
    db.delete(genre)
    db.commit()
    return DeletedResponse()


@router.put("/{id}/favorite", response_model=GenreResponse)
def set_favorite(id: int = Path(...), favorite: bool = Query(...), db: Session = Depends(get_db)):
    genre = db.get(Genres, id)
    if not genre:
        raise HTTPException(404)
    genre.favorite = favorite
    db.add(genre)
    db.commit()
    return GenreResponse.from_genre(genre)


@router.get("/{id}/songs", response_model=list[int], tags=[Tags.song])
def get_songs_from_genre(id: int = Path(...), db: Session = Depends(get_db)):
    genre = db.get(Genres, id)
    if not genre:
        raise HTTPException(404)
    return [song.id for song in genre.songs]


@router.get("/{dest}/merge/{src}", response_model=GenreResponse)
def merge_genre(dest: int = Path(...), src: int = Path(...), db: Session = Depends(get_db)):
    src_genre = db.get(Genres, src)
    dest_genre = db.get(Genres, dest)
    if not src_genre or not dest_genre:
        raise HTTPException(404)
    db.execute(
        update(Songs).where(Songs.genre_id == src).values(genre_id=dest)
    )
    dest_genre.stream_count += src_genre.stream_count
    if src_genre.last_streamed:
        if not dest_genre.last_streamed or src_genre.last_streamed > dest_genre.last_streamed:
            dest_genre.last_streamed = src_genre.last_streamed
    new_name = src_genre.name
    db.delete(src_genre)
    db.flush()
    dest_genre.name = new_name
    db.flush()
    db.commit()
    db.refresh(dest_genre)
    return GenreResponse.from_genre(dest_genre)
