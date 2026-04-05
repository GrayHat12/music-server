from __future__ import annotations

from sqlalchemy import ForeignKey, UniqueConstraint, Text
from sqlalchemy.orm import relationship, Mapped, mapped_column, Session
from sqlalchemy.ext.associationproxy import association_proxy, AssociationProxy
from app.database.database import Base
from datetime import datetime, timezone


class Images(Base):
    """
    CREATE TABLE images (
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        buffer BLOB NOT NULL UNIQUE,
        last_updated INTEGER NOT NULL
    )
    """
    __tablename__ = "images"

    id: Mapped[int] = mapped_column(
        primary_key=True, nullable=False, autoincrement=True)
    buffer: Mapped[bytes] = mapped_column(
        nullable=False, unique=True, deferred=True)
    last_updated: Mapped[datetime] = mapped_column(
        nullable=False, default=lambda: datetime.now(timezone.utc))


class Artists(Base):
    """
    CREATE TABLE artists (
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        name VARCHAR NOT NULL UNIQUE,
        image INTEGER NULL,
        last_updated INTEGER NOT NULL,
        FOREIGN KEY (image) REFERENCES images(id) ON DELETE SET NULL
    )
    """
    __tablename__ = "artists"

    id: Mapped[int] = mapped_column(
        primary_key=True, nullable=False, autoincrement=True)
    name: Mapped[str] = mapped_column(nullable=False, unique=True)
    image_id: Mapped[int | None] = mapped_column(
        ForeignKey(Images.id, ondelete="SET NULL"), nullable=True)
    last_updated: Mapped[datetime] = mapped_column(
        nullable=False, default=lambda: datetime.now(timezone.utc))
    favorite: Mapped[bool] = mapped_column(
        nullable=False, default=lambda: False)

    last_streamed: Mapped[datetime | None] = mapped_column(nullable=True)
    stream_count: Mapped[int] = mapped_column(
        nullable=False, default=lambda: 0)

    image: Mapped[Images | None] = relationship()

    albums: Mapped[list[Albums]] = relationship(
        back_populates="artist", cascade="all, delete-orphan")
    songs: Mapped[list[Songs]] = relationship(back_populates="artist")
    features: Mapped[list[Features]] = relationship(
        back_populates="artist", cascade="all, delete-orphan")

    @staticmethod
    def search(session: Session, search_term: str, limit: int = 10):
        return session.query(Artists).where(
            Artists.name.icontains(search_term)
        ).limit(limit).all()


class Genres(Base):
    """
    CREATE TABLE genre (
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        last_updated INTEGER NOT NULL,
        name VARCHAR NOT NULL UNIQUE
    )
    """

    __tablename__ = "genres"

    id: Mapped[int] = mapped_column(
        primary_key=True, nullable=False, autoincrement=True)
    name: Mapped[str] = mapped_column(nullable=False, unique=True)
    last_updated: Mapped[datetime] = mapped_column(
        nullable=False, default=lambda: datetime.now(timezone.utc))
    last_streamed: Mapped[datetime | None] = mapped_column(nullable=True)
    stream_count: Mapped[int] = mapped_column(
        nullable=False, default=lambda: 0)
    favorite: Mapped[bool] = mapped_column(
        nullable=False, default=lambda: False)

    songs: Mapped[list[Songs]] = relationship(back_populates="genre")

    @staticmethod
    def search(session: Session, search_term: str, limit: int = 10):
        return session.query(Genres).where(
            Genres.name.icontains(search_term)
        ).limit(limit).all()


class Albums(Base):
    """
    CREATE TABLE albums (
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        name VARCHAR NOT NULL,
        image INTEGER NULL,
        artist INTEGER NOT NULL,
        last_updated INTEGER NOT NULL,
        FOREIGN KEY (image) REFERENCES images(id) ON DELETE SET NULL,
        FOREIGN KEY (artist) REFERENCES artists(id) ON DELETE CASCADE,
        CONSTRAINT UQ_artist_album UNIQUE (artist, name)
    )
    """

    __tablename__ = "albums"
    __table_args__ = (
        UniqueConstraint("artist_id", "name", name="UQ_artist_album"),
    )

    id: Mapped[int] = mapped_column(
        primary_key=True, nullable=False, autoincrement=True)
    name: Mapped[str] = mapped_column(nullable=False)
    image_id: Mapped[int | None] = mapped_column(
        ForeignKey(Images.id, ondelete="SET NULL"), nullable=True)
    artist_id: Mapped[int] = mapped_column(
        ForeignKey(Artists.id, ondelete="CASCADE"), nullable=False)
    last_updated: Mapped[datetime] = mapped_column(
        nullable=False, default=lambda: datetime.now(timezone.utc))
    last_streamed: Mapped[datetime | None] = mapped_column(nullable=True)
    stream_count: Mapped[int] = mapped_column(
        nullable=False, default=lambda: 0)
    favorite: Mapped[bool] = mapped_column(
        nullable=False, default=lambda: False)

    image: Mapped[Images | None] = relationship()

    artist: Mapped[Artists] = relationship(back_populates="albums")
    songs: Mapped[list[Songs]] = relationship(back_populates="album")

    @staticmethod
    def search(session: Session, search_term: str, limit: int = 10):
        return session.query(Albums).where(
            Albums.name.icontains(search_term)
        ).limit(limit).all()


class Songs(Base):
    __tablename__ = "songs"
    __table_args__ = (
        UniqueConstraint("trackno", "album_id", name="UQ_track_album"),
    )

    id: Mapped[int] = mapped_column(
        primary_key=True, nullable=False, autoincrement=True)
    genre_id: Mapped[int | None] = mapped_column(
        ForeignKey(Genres.id, ondelete="SET NULL"), nullable=True)
    artist_id: Mapped[int | None] = mapped_column(
        ForeignKey(Artists.id, ondelete="SET NULL"), nullable=True)
    album_id: Mapped[int | None] = mapped_column(
        ForeignKey(Albums.id, ondelete="SET NULL"), nullable=True)
    cover_id: Mapped[int | None] = mapped_column(
        ForeignKey(Images.id, ondelete="SET NULL"), nullable=True)
    favorite: Mapped[bool] = mapped_column(
        nullable=False, default=lambda: False)

    title: Mapped[str] = mapped_column(nullable=False)
    duration: Mapped[float | None] = mapped_column(nullable=True)
    release: Mapped[int | None] = mapped_column(nullable=True)
    trackno: Mapped[int | None] = mapped_column(nullable=True)
    metatags: Mapped[str] = mapped_column(Text, nullable=False, deferred=True)
    buffer: Mapped[bytes] = mapped_column(
        nullable=False, unique=True, deferred=True)
    last_updated: Mapped[datetime] = mapped_column(
        nullable=False, default=lambda: datetime.now(timezone.utc))
    last_streamed: Mapped[datetime | None] = mapped_column(nullable=True)
    stream_count: Mapped[int] = mapped_column(
        nullable=False, default=lambda: 0)

    genre: Mapped[Genres | None] = relationship(back_populates="songs")
    artist: Mapped[Artists | None] = relationship(back_populates="songs")
    album: Mapped[Albums | None] = relationship(back_populates="songs")
    cover: Mapped[Images | None] = relationship()

    features: Mapped[list[Features]] = relationship(
        back_populates="song", cascade="all, delete-orphan")
    playlist_refs: Mapped[list[PlaylistRef]] = relationship(
        back_populates="song", cascade="all, delete-orphan")

    playlists: AssociationProxy[list[Playlists]] = association_proxy(
        target_collection="playlist_refs",
        attr="playlist",
        creator=lambda pl: PlaylistRef(playlist=pl)
    )

    @staticmethod
    def search(session: Session, search_term: str, limit: int = 10):
        return session.query(Songs).where(
            Songs.name.icontains(search_term)
        ).limit(limit).all()

    @property
    def filename(self):
        filename_components: list[str] = []
        if isinstance(self.trackno, int):
            filename_components.append(f"{self.trackno:02d}")
        filename_components.append(self.title)
        return ' '.join(filename_components)


class Features(Base):
    """
    CREATE TABLE features (
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        artist INTEGER NOT NULL,
        song INTEGER NOT NULL,
        last_updated INTEGER NOT NULL,
        FOREIGN KEY(artist) REFERENCES artists(id) ON DELETE CASCADE,
        FOREIGN KEY(song) REFERENCES songs(id) ON DELETE CASCADE,
        CONSTRAINT UQ_artist_song UNIQUE (artist, song)
    )
    """
    __tablename__ = "features"
    __table_args__ = (
        UniqueConstraint("artist_id", "song_id", name="UQ_artist_song"),
    )

    id: Mapped[int] = mapped_column(
        primary_key=True, nullable=False, autoincrement=True)
    artist_id: Mapped[int] = mapped_column(
        ForeignKey(Artists.id, ondelete="CASCADE"), nullable=False)
    song_id: Mapped[int] = mapped_column(
        ForeignKey(Songs.id, ondelete="CASCADE"), nullable=False)
    last_updated: Mapped[datetime] = mapped_column(
        nullable=False, default=lambda: datetime.now(timezone.utc))

    artist: Mapped[Artists] = relationship(back_populates="features")
    song: Mapped[Songs] = relationship(back_populates="features")


class Playlists(Base):
    """
    CREATE TABLE playlists (
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        name VARCHAR NOT NULL UNIQUE,
        image INTEGER NULL,
        last_updated INTEGER NOT NULL,
        FOREIGN KEY (image) REFERENCES images(id) ON DELETE SET NULL
    )
    """
    __tablename__ = "playlists"

    id: Mapped[int] = mapped_column(
        primary_key=True, nullable=False, autoincrement=True)
    name: Mapped[str] = mapped_column(nullable=False, unique=True)
    image_id: Mapped[int | None] = mapped_column(
        ForeignKey(Images.id, ondelete="SET NULL"), nullable=True)
    last_updated: Mapped[datetime] = mapped_column(
        nullable=False, default=lambda: datetime.now(timezone.utc))
    last_streamed: Mapped[datetime | None] = mapped_column(nullable=True)
    stream_count: Mapped[int] = mapped_column(
        nullable=False, default=lambda: 0)
    favorite: Mapped[bool] = mapped_column(
        nullable=False, default=lambda: False)

    image: Mapped[Images | None] = relationship()
    playlist_refs: Mapped[list[PlaylistRef]] = relationship(
        back_populates="playlist", cascade="all, delete-orphan")

    songs: AssociationProxy[list[Songs]] = association_proxy(
        target_collection="playlist_refs",
        attr="song",
        creator=lambda s: PlaylistRef(song=s)
    )

    @staticmethod
    def search(session: Session, search_term: str, limit: int = 10):
        return session.query(Playlists).where(
            Playlists.name.icontains(search_term)
        ).limit(limit).all()


class PlaylistRef(Base):
    """
    CREATE TABLE playlistref (
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        song INTEGER NOT NULL,
        playlist INTEGER NOT NULL,
        last_updated INTEGER NOT NULL,
        FOREIGN KEY(playlist) REFERENCES playlists(id) ON DELETE CASCADE,
        FOREIGN KEY(song) REFERENCES songs(id) ON DELETE CASCADE,
        CONSTRAINT UQ_playlist_song UNIQUE (playlist, song)
    )
    """
    __tablename__ = "playlistref"
    __table_args__ = (
        UniqueConstraint("playlist_id", "song_id", name="UQ_playlist_song"),
    )

    id: Mapped[int] = mapped_column(
        primary_key=True, nullable=False, autoincrement=True)
    song_id: Mapped[int] = mapped_column(
        ForeignKey(Songs.id, ondelete="CASCADE"), nullable=False)
    playlist_id: Mapped[int] = mapped_column(
        ForeignKey(Playlists.id, ondelete="CASCADE"), nullable=False)
    last_updated: Mapped[datetime] = mapped_column(
        nullable=False, default=lambda: datetime.now(timezone.utc))

    song: Mapped[Songs] = relationship(back_populates="playlist_refs")
    playlist: Mapped[Playlists] = relationship(back_populates="playlist_refs")
