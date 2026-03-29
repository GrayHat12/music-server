from app.models.models import Albums, Artists, Genres, Playlists, Songs
from app.models.response_schema import SearchResponse, AlbumResponse, ArtistResponse, GenreResponse, PlaylistResponse, SongResponse
from app.models.request_schema import SearchMode
from fastapi import APIRouter, Depends, Query
from app.config import Tags
from app.middleware import get_db
from sqlalchemy.orm import Session
from app.controllers.playlist import SystemPlaylists

router = APIRouter(prefix="/search", tags=[Tags.search])


@router.get("", response_model=SearchResponse)
def general_search(db: Session = Depends(get_db), term: str = Query(...), mode: SearchMode = Query(...)):
    response = SearchResponse()
    if mode in SearchMode.album:
        response.album = [AlbumResponse.from_album(
            album) for album in Albums.search(db, term)]
    if mode in SearchMode.artist:
        response.artist = [ArtistResponse.from_artist(
            artist) for artist in Artists.search(db, term)]
    if mode in SearchMode.genre:
        response.genre = [GenreResponse.from_genre(
            genre) for genre in Genres.search(db, term)]
    if mode in SearchMode.playlist:
        response.playlist = [PlaylistResponse.from_playlist(
            playlist) for playlist in Playlists.search(db, term)]
        response.system_playlist = [playlist for playlist in SystemPlaylists.values(
        ) if term.casefold() in playlist.name.casefold()]
    if mode in SearchMode.song:
        response.song = [SongResponse.from_song(
            song) for song in Songs.search(db, term)]
    return response
