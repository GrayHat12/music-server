from pydantic import BaseModel, Field
from datetime import datetime
from app.models.models import Albums, Artists, Songs, Playlists, Genres


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
    favorite: bool = Field(...)

    @classmethod
    def from_artist(cls, artist: Artists):
        return cls(
            id=artist.id,
            name=artist.name,
            image=artist.image_id,
            lastUpdated=artist.last_updated,
            streamCount=artist.stream_count,
            lastStreamed=artist.last_streamed,
            favorite=artist.favorite
        )


class AlbumResponse(BaseModel):
    id: int = Field(...)
    name: str = Field(...)
    image: int | None = Field(default_factory=lambda: None)
    last_updated: datetime = Field(..., alias="lastUpdated")
    artist: int = Field(...)
    stream_count: int = Field(..., alias="streamCount")
    last_streamed: datetime | None = Field(
        default_factory=lambda: None, alias="lastStreamed")
    favorite: bool = Field(...)

    @classmethod
    def from_album(cls, album: Albums):
        return cls(
            id=album.id,
            name=album.name,
            image=album.image_id,
            lastUpdated=album.last_updated,
            streamCount=album.stream_count,
            lastStreamed=album.last_streamed,
            favorite=album.favorite,
            artist=album.artist_id
        )


class SongResponse(BaseModel):
    id: int = Field(...)
    title: str = Field(...)
    release: int | None = Field(default_factory=lambda: None)
    trackno: int | None = Field(default_factory=lambda: None)
    # metatags: dict[str, Any] = Field(...)
    last_updated: datetime = Field(..., alias="lastUpdated")
    genre: int | None = Field(default_factory=lambda: None)
    artist: int | None = Field(default_factory=lambda: None)
    album: int | None = Field(default_factory=lambda: None)
    cover: int | None = Field(default_factory=lambda: None)
    stream_count: int = Field(..., alias="streamCount")
    last_streamed: datetime | None = Field(
        default_factory=lambda: None, alias="lastStreamed")
    favorite: bool = Field(...)

    @classmethod
    def from_song(cls, song: Songs):
        return cls(
            id=song.id,
            title=song.title,
            release=song.release,
            trackno=song.trackno,
            # metatags=json.loads(song.metatags),
            lastUpdated=song.last_updated,
            lastStreamed=song.last_streamed,
            streamCount=song.stream_count,
            genre=song.genre.id if song.genre else None,
            artist=song.artist_id,
            album=song.album_id,
            cover=song.cover_id or (song.album.image_id if song.album else (
                song.artist.image_id if song.artist else None)) or (song.artist.image_id if song.artist else None),
            favorite=song.favorite
        )


class PlaylistResponse(BaseModel):
    id: int = Field(...)
    name: str = Field(...)
    is_system: bool = Field(default_factory=lambda: False, alias="isSystem")
    image: int | None = Field(default_factory=lambda: None)
    last_updated: datetime = Field(..., alias="lastUpdated")
    stream_count: int = Field(..., alias="streamCount")
    last_streamed: datetime | None = Field(
        default_factory=lambda: None, alias="lastStreamed")
    favorite: bool = Field(...)

    @classmethod
    def from_playlist(cls, playlist: Playlists):
        return cls(
            id=playlist.id,
            name=playlist.name,
            image=playlist.image_id,
            lastUpdated=playlist.last_updated,
            lastStreamed=playlist.last_streamed,
            streamCount=playlist.stream_count,
            favorite=playlist.favorite
            # songs=[song.id for song in playlist.songs]
        )


class SystemPlaylistResponse(BaseModel):
    id: str = Field(...)
    is_system: bool = Field(default_factory=lambda: True, alias="isSystem")
    name: str = Field(...)
    image: str = Field(...)


class GenreResponse(BaseModel):
    id: int = Field(...)
    name: str = Field(...)
    last_updated: datetime = Field(..., alias="lastUpdated")
    stream_count: int = Field(..., alias="streamCount")
    last_streamed: datetime | None = Field(
        default_factory=lambda: None, alias="lastStreamed")
    favorite: bool = Field(...)

    @classmethod
    def from_genre(cls, genre: Genres):
        return cls(
            id=genre.id,
            name=genre.name,
            lastUpdated=genre.last_updated,
            streamCount=genre.stream_count,
            lastStreamed=genre.last_streamed,
            favorite=genre.favorite
        )


class SearchResponse(BaseModel):
    artist: list[ArtistResponse] = Field(default_factory=lambda: [])
    album: list[AlbumResponse] = Field(default_factory=lambda: [])
    genre: list[GenreResponse] = Field(default_factory=lambda: [])
    playlist: list[PlaylistResponse] = Field(default_factory=lambda: [])
    song: list[SongResponse] = Field(default_factory=lambda: [])
    system_playlist: list[SystemPlaylistResponse] = Field(
        default_factory=lambda: [], alias="systemPlaylist")
