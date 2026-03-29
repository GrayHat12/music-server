from pydantic import BaseModel, Field
from datetime import datetime
from typing import Any


class DeletedResponse(BaseModel):
    deleted: bool = Field(default_factory=lambda: True)


class ArtistResponse(BaseModel):
    id: int = Field(...)
    name: str = Field(...)
    image: int | None = Field(default_factory=lambda: None)
    last_updated: datetime = Field(..., alias="lastUpdated")
    stream_count: int = Field(..., alias="streamCount")
    last_streamed: datetime | None = Field(
        default_factory=lambda: None, alias="lastStreamed")


class AlbumResponse(BaseModel):
    id: int = Field(...)
    name: str = Field(...)
    image: int | None = Field(default_factory=lambda: None)
    last_updated: datetime = Field(..., alias="lastUpdated")
    artist: int = Field(...)
    stream_count: int = Field(..., alias="streamCount")
    last_streamed: datetime | None = Field(
        default_factory=lambda: None, alias="lastStreamed")


class SongResponse(BaseModel):
    id: int = Field(...)
    title: str = Field(...)
    release: int | None = Field(default_factory=lambda: None)
    trackno: int | None = Field(default_factory=lambda: None)
    metatags: dict[str, Any] = Field(...)
    last_updated: datetime = Field(..., alias="lastUpdated")
    genre: str | None = Field(default_factory=lambda: None)
    artist: int | None = Field(default_factory=lambda: None)
    album: int | None = Field(default_factory=lambda: None)
    cover: int | None = Field(default_factory=lambda: None)
    stream_count: int = Field(..., alias="streamCount")
    last_streamed: datetime | None = Field(
        default_factory=lambda: None, alias="lastStreamed")


class PlaylistResponse(BaseModel):
    id: int = Field(...)
    name: str = Field(...)
    image: int | None = Field(default_factory=lambda: None)
    last_updated: datetime = Field(..., alias="lastUpdated")
    stream_count: int = Field(..., alias="streamCount")
    last_streamed: datetime | None = Field(
        default_factory=lambda: None, alias="lastStreamed")
    # songs: list[int] = Field(default_factory=lambda: [])


class GenreResponse(BaseModel):
    id: int = Field(...)
    name: str = Field(...)
    last_updated: datetime = Field(..., alias="lastUpdated")
    stream_count: int = Field(..., alias="streamCount")
    last_streamed: datetime | None = Field(
        default_factory=lambda: None, alias="lastStreamed")
