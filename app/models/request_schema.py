from pydantic import BaseModel, Field
from enum import IntFlag, auto


class ArtistCreateRequest(BaseModel):
    name: str = Field(...)
    image: int | None = Field(default_factory=lambda: None)


class ArtistUpdateRequest(BaseModel):
    name: str | None = Field(default_factory=lambda: None)
    image: int | None = Field(default_factory=lambda: None)


class AlbumCreateRequest(BaseModel):
    name: str = Field(...)
    image: int | None = Field(default_factory=lambda: None)
    artist: int = Field(...)


class AlbumUpdateRequest(BaseModel):
    name: str | None = Field(default_factory=lambda: None)
    image: int | None = Field(default_factory=lambda: None)


class PlaylistCreateRequest(BaseModel):
    name: str = Field(...)
    image: int | None = Field(default_factory=lambda: None)
    songs: list[int] = Field(default_factory=lambda: [])


class PlaylistUpdateRequest(BaseModel):
    name: str = Field(...)
    image: int | None = Field(default_factory=lambda: None)


class GenreCreateRequest(BaseModel):
    name: str = Field(...)


class GenreUpdateRequest(BaseModel):
    name: str = Field(...)


class SongUpdateRequest(BaseModel):
    genre: str | None = Field(default_factory=lambda: None)
    artist: int | None = Field(default_factory=lambda: None)
    album: int | None = Field(default_factory=lambda: None)
    cover: int | None = Field(default_factory=lambda: None)
    title: str | None = Field(default_factory=lambda: None, min_length=1)
    release: int | None = Field(default_factory=lambda: None)
    trackno: int | None = Field(default_factory=lambda: None, ge=1)
    metatags: str | None = Field(default_factory=lambda: None)


class SearchMode(IntFlag):
    artist = auto()
    album = auto()
    genre = auto()
    playlist = auto()
    song = auto()
    system_playlist = auto()

    general = artist | album | genre | playlist | song | system_playlist
