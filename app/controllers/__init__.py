from fastapi import APIRouter
from app.config import Tags

from . import artist, album, genre, song, playlist, image, database

router = APIRouter(prefix="/v1", tags=[Tags.v1])

router.include_router(artist.router)
router.include_router(album.router)
router.include_router(genre.router)
router.include_router(song.router)
router.include_router(playlist.router)
router.include_router(image.router)
router.include_router(database.router)
