# audio-server@1.0.1

A TypeScript SDK client for the localhost API.

## Usage

First, install the SDK from npm.

```bash
npm install audio-server --save
```

Next, try it out.


```ts
import {
  Configuration,
  AlbumApi,
} from 'audio-server';
import type { CreateAlbumApiV1AlbumPostRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new AlbumApi();

  const body = {
    // AlbumCreateRequest
    albumCreateRequest: ...,
  } satisfies CreateAlbumApiV1AlbumPostRequest;

  try {
    const data = await api.createAlbumApiV1AlbumPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```


## Documentation

### API Endpoints

All URIs are relative to *http://localhost*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*AlbumApi* | [**createAlbumApiV1AlbumPost**](docs/AlbumApi.md#createalbumapiv1albumpost) | **POST** /api/v1/album | Create Album
*AlbumApi* | [**deleteAlbumApiV1AlbumIdDelete**](docs/AlbumApi.md#deletealbumapiv1albumiddelete) | **DELETE** /api/v1/album/{id} | Delete Album
*AlbumApi* | [**getAlbumApiV1AlbumIdGet**](docs/AlbumApi.md#getalbumapiv1albumidget) | **GET** /api/v1/album/{id} | Get Album
*AlbumApi* | [**getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet**](docs/AlbumApi.md#getalbumsfromplaylistapiv1playlistidalbumsget) | **GET** /api/v1/playlist/{id}/albums | Get Albums From Playlist
*AlbumApi* | [**getFeaturesFromAlbumApiV1AlbumIdFeaturesGet**](docs/AlbumApi.md#getfeaturesfromalbumapiv1albumidfeaturesget) | **GET** /api/v1/album/{id}/features | Get Features From Album
*AlbumApi* | [**getGenresFromAlbumApiV1AlbumIdGenresGet**](docs/AlbumApi.md#getgenresfromalbumapiv1albumidgenresget) | **GET** /api/v1/album/{id}/genres | Get Genres From Album
*AlbumApi* | [**getSongsFromAlbumApiV1AlbumIdSongsGet**](docs/AlbumApi.md#getsongsfromalbumapiv1albumidsongsget) | **GET** /api/v1/album/{id}/songs | Get Songs From Album
*AlbumApi* | [**listAllAlbumsApiV1AlbumsGet**](docs/AlbumApi.md#listallalbumsapiv1albumsget) | **GET** /api/v1/albums | List All Albums
*AlbumApi* | [**updateAlbumApiV1AlbumIdPatch**](docs/AlbumApi.md#updatealbumapiv1albumidpatch) | **PATCH** /api/v1/album/{id} | Update Album
*ArtistApi* | [**createArtistApiV1ArtistPost**](docs/ArtistApi.md#createartistapiv1artistpost) | **POST** /api/v1/artist | Create Artist
*ArtistApi* | [**deleteArtistApiV1ArtistIdDelete**](docs/ArtistApi.md#deleteartistapiv1artistiddelete) | **DELETE** /api/v1/artist/{id} | Delete Artist
*ArtistApi* | [**getArtistApiV1ArtistIdGet**](docs/ArtistApi.md#getartistapiv1artistidget) | **GET** /api/v1/artist/{id} | Get Artist
*ArtistApi* | [**getArtistsFromPlaylistApiV1PlaylistIdArtistsGet**](docs/ArtistApi.md#getartistsfromplaylistapiv1playlistidartistsget) | **GET** /api/v1/playlist/{id}/artists | Get Artists From Playlist
*ArtistApi* | [**getCollaborationsFromArtistApiV1ArtistIdCollaborationsGet**](docs/ArtistApi.md#getcollaborationsfromartistapiv1artistidcollaborationsget) | **GET** /api/v1/artist/{id}/collaborations | Get Collaborations From Artist
*ArtistApi* | [**getFeaturesFromAlbumApiV1AlbumIdFeaturesGet**](docs/ArtistApi.md#getfeaturesfromalbumapiv1albumidfeaturesget) | **GET** /api/v1/album/{id}/features | Get Features From Album
*ArtistApi* | [**getFeaturesFromArtistApiV1ArtistIdFeaturesGet**](docs/ArtistApi.md#getfeaturesfromartistapiv1artistidfeaturesget) | **GET** /api/v1/artist/{id}/features | Get Features From Artist
*ArtistApi* | [**getFeaturesFromSongApiV1SongIdFeaturesGet**](docs/ArtistApi.md#getfeaturesfromsongapiv1songidfeaturesget) | **GET** /api/v1/song/{id}/features | Get Features From Song
*ArtistApi* | [**getGenresFromArtistApiV1ArtistIdGenresGet**](docs/ArtistApi.md#getgenresfromartistapiv1artistidgenresget) | **GET** /api/v1/artist/{id}/genres | Get Genres From Artist
*ArtistApi* | [**getSongsFromArtistApiV1ArtistIdSongsGet**](docs/ArtistApi.md#getsongsfromartistapiv1artistidsongsget) | **GET** /api/v1/artist/{id}/songs | Get Songs From Artist
*ArtistApi* | [**listAllArtistApiV1ArtistsGet**](docs/ArtistApi.md#listallartistapiv1artistsget) | **GET** /api/v1/artists | List All Artist
*ArtistApi* | [**updateArtistApiV1ArtistIdPatch**](docs/ArtistApi.md#updateartistapiv1artistidpatch) | **PATCH** /api/v1/artist/{id} | Update Artist
*DatabaseApi* | [**setDatabaseApiV1DbPatch**](docs/DatabaseApi.md#setdatabaseapiv1dbpatch) | **PATCH** /api/v1/db | Set Database
*GenreApi* | [**createGenreApiV1GenrePost**](docs/GenreApi.md#creategenreapiv1genrepost) | **POST** /api/v1/genre | Create Genre
*GenreApi* | [**deleteGenreApiV1GenreIdDelete**](docs/GenreApi.md#deletegenreapiv1genreiddelete) | **DELETE** /api/v1/genre/{id} | Delete Genre
*GenreApi* | [**getGenreApiV1GenreIdGet**](docs/GenreApi.md#getgenreapiv1genreidget) | **GET** /api/v1/genre/{id} | Get Genre
*GenreApi* | [**getGenresFromAlbumApiV1AlbumIdGenresGet**](docs/GenreApi.md#getgenresfromalbumapiv1albumidgenresget) | **GET** /api/v1/album/{id}/genres | Get Genres From Album
*GenreApi* | [**getGenresFromArtistApiV1ArtistIdGenresGet**](docs/GenreApi.md#getgenresfromartistapiv1artistidgenresget) | **GET** /api/v1/artist/{id}/genres | Get Genres From Artist
*GenreApi* | [**getGenresFromPlaylistApiV1PlaylistIdGenresGet**](docs/GenreApi.md#getgenresfromplaylistapiv1playlistidgenresget) | **GET** /api/v1/playlist/{id}/genres | Get Genres From Playlist
*GenreApi* | [**getSongsFromGenreApiV1GenreIdSongsGet**](docs/GenreApi.md#getsongsfromgenreapiv1genreidsongsget) | **GET** /api/v1/genre/{id}/songs | Get Songs From Genre
*GenreApi* | [**listAllGenresApiV1GenresGet**](docs/GenreApi.md#listallgenresapiv1genresget) | **GET** /api/v1/genres | List All Genres
*GenreApi* | [**updateGenreApiV1GenreIdPatch**](docs/GenreApi.md#updategenreapiv1genreidpatch) | **PATCH** /api/v1/genre/{id} | Update Genre
*ImageApi* | [**addImageApiV1ImagePost**](docs/ImageApi.md#addimageapiv1imagepost) | **POST** /api/v1/image | Add Image
*ImageApi* | [**deleteImageApiV1ImageIdDelete**](docs/ImageApi.md#deleteimageapiv1imageiddelete) | **DELETE** /api/v1/image/{id} | Delete Image
*ImageApi* | [**getImageApiV1ImageIdGet**](docs/ImageApi.md#getimageapiv1imageidget) | **GET** /api/v1/image/{id} | Get Image
*PlaylistApi* | [**createPlaylistApiV1PlaylistPost**](docs/PlaylistApi.md#createplaylistapiv1playlistpost) | **POST** /api/v1/playlist | Create Playlist
*PlaylistApi* | [**deletePlaylistApiV1PlaylistIdDelete**](docs/PlaylistApi.md#deleteplaylistapiv1playlistiddelete) | **DELETE** /api/v1/playlist/{id} | Delete Playlist
*PlaylistApi* | [**getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet**](docs/PlaylistApi.md#getalbumsfromplaylistapiv1playlistidalbumsget) | **GET** /api/v1/playlist/{id}/albums | Get Albums From Playlist
*PlaylistApi* | [**getArtistsFromPlaylistApiV1PlaylistIdArtistsGet**](docs/PlaylistApi.md#getartistsfromplaylistapiv1playlistidartistsget) | **GET** /api/v1/playlist/{id}/artists | Get Artists From Playlist
*PlaylistApi* | [**getGenresFromPlaylistApiV1PlaylistIdGenresGet**](docs/PlaylistApi.md#getgenresfromplaylistapiv1playlistidgenresget) | **GET** /api/v1/playlist/{id}/genres | Get Genres From Playlist
*PlaylistApi* | [**getPlaylistApiV1PlaylistIdGet**](docs/PlaylistApi.md#getplaylistapiv1playlistidget) | **GET** /api/v1/playlist/{id} | Get Playlist
*PlaylistApi* | [**getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet**](docs/PlaylistApi.md#getplaylistssongispartofapiv1songidplaylistsget) | **GET** /api/v1/song/{id}/playlists | Get Playlists Song Is Part Of
*PlaylistApi* | [**getSongsFromPlaylistApiV1PlaylistIdSongsGet**](docs/PlaylistApi.md#getsongsfromplaylistapiv1playlistidsongsget) | **GET** /api/v1/playlist/{id}/songs | Get Songs From Playlist
*PlaylistApi* | [**listAllPlaylistsApiV1PlaylistsGet**](docs/PlaylistApi.md#listallplaylistsapiv1playlistsget) | **GET** /api/v1/playlists | List All Playlists
*PlaylistApi* | [**updatePlaylistApiV1PlaylistIdPatch**](docs/PlaylistApi.md#updateplaylistapiv1playlistidpatch) | **PATCH** /api/v1/playlist/{id} | Update Playlist
*SongApi* | [**deleteSongApiV1SongIdDelete**](docs/SongApi.md#deletesongapiv1songiddelete) | **DELETE** /api/v1/song/{id} | Delete Song
*SongApi* | [**getFeaturesFromArtistApiV1ArtistIdFeaturesGet**](docs/SongApi.md#getfeaturesfromartistapiv1artistidfeaturesget) | **GET** /api/v1/artist/{id}/features | Get Features From Artist
*SongApi* | [**getFeaturesFromSongApiV1SongIdFeaturesGet**](docs/SongApi.md#getfeaturesfromsongapiv1songidfeaturesget) | **GET** /api/v1/song/{id}/features | Get Features From Song
*SongApi* | [**getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet**](docs/SongApi.md#getplaylistssongispartofapiv1songidplaylistsget) | **GET** /api/v1/song/{id}/playlists | Get Playlists Song Is Part Of
*SongApi* | [**getSongApiV1SongIdGet**](docs/SongApi.md#getsongapiv1songidget) | **GET** /api/v1/song/{id} | Get Song
*SongApi* | [**getSongsFromAlbumApiV1AlbumIdSongsGet**](docs/SongApi.md#getsongsfromalbumapiv1albumidsongsget) | **GET** /api/v1/album/{id}/songs | Get Songs From Album
*SongApi* | [**getSongsFromArtistApiV1ArtistIdSongsGet**](docs/SongApi.md#getsongsfromartistapiv1artistidsongsget) | **GET** /api/v1/artist/{id}/songs | Get Songs From Artist
*SongApi* | [**getSongsFromGenreApiV1GenreIdSongsGet**](docs/SongApi.md#getsongsfromgenreapiv1genreidsongsget) | **GET** /api/v1/genre/{id}/songs | Get Songs From Genre
*SongApi* | [**getSongsFromPlaylistApiV1PlaylistIdSongsGet**](docs/SongApi.md#getsongsfromplaylistapiv1playlistidsongsget) | **GET** /api/v1/playlist/{id}/songs | Get Songs From Playlist
*SongApi* | [**listAllSongApiV1SongsGet**](docs/SongApi.md#listallsongapiv1songsget) | **GET** /api/v1/songs | List All Song
*SongApi* | [**streamSongApiV1SongIdStreamGet**](docs/SongApi.md#streamsongapiv1songidstreamget) | **GET** /api/v1/song/{id}/stream | Stream Song
*SongApi* | [**updateSongApiV1SongIdPatch**](docs/SongApi.md#updatesongapiv1songidpatch) | **PATCH** /api/v1/song/{id} | Update Song
*SongApi* | [**uploadSongApiV1SongPost**](docs/SongApi.md#uploadsongapiv1songpost) | **POST** /api/v1/song | Upload Song
*V1Api* | [**addImageApiV1ImagePost**](docs/V1Api.md#addimageapiv1imagepost) | **POST** /api/v1/image | Add Image
*V1Api* | [**createAlbumApiV1AlbumPost**](docs/V1Api.md#createalbumapiv1albumpost) | **POST** /api/v1/album | Create Album
*V1Api* | [**createArtistApiV1ArtistPost**](docs/V1Api.md#createartistapiv1artistpost) | **POST** /api/v1/artist | Create Artist
*V1Api* | [**createGenreApiV1GenrePost**](docs/V1Api.md#creategenreapiv1genrepost) | **POST** /api/v1/genre | Create Genre
*V1Api* | [**createPlaylistApiV1PlaylistPost**](docs/V1Api.md#createplaylistapiv1playlistpost) | **POST** /api/v1/playlist | Create Playlist
*V1Api* | [**deleteAlbumApiV1AlbumIdDelete**](docs/V1Api.md#deletealbumapiv1albumiddelete) | **DELETE** /api/v1/album/{id} | Delete Album
*V1Api* | [**deleteArtistApiV1ArtistIdDelete**](docs/V1Api.md#deleteartistapiv1artistiddelete) | **DELETE** /api/v1/artist/{id} | Delete Artist
*V1Api* | [**deleteGenreApiV1GenreIdDelete**](docs/V1Api.md#deletegenreapiv1genreiddelete) | **DELETE** /api/v1/genre/{id} | Delete Genre
*V1Api* | [**deleteImageApiV1ImageIdDelete**](docs/V1Api.md#deleteimageapiv1imageiddelete) | **DELETE** /api/v1/image/{id} | Delete Image
*V1Api* | [**deletePlaylistApiV1PlaylistIdDelete**](docs/V1Api.md#deleteplaylistapiv1playlistiddelete) | **DELETE** /api/v1/playlist/{id} | Delete Playlist
*V1Api* | [**deleteSongApiV1SongIdDelete**](docs/V1Api.md#deletesongapiv1songiddelete) | **DELETE** /api/v1/song/{id} | Delete Song
*V1Api* | [**getAlbumApiV1AlbumIdGet**](docs/V1Api.md#getalbumapiv1albumidget) | **GET** /api/v1/album/{id} | Get Album
*V1Api* | [**getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet**](docs/V1Api.md#getalbumsfromplaylistapiv1playlistidalbumsget) | **GET** /api/v1/playlist/{id}/albums | Get Albums From Playlist
*V1Api* | [**getArtistApiV1ArtistIdGet**](docs/V1Api.md#getartistapiv1artistidget) | **GET** /api/v1/artist/{id} | Get Artist
*V1Api* | [**getArtistsFromPlaylistApiV1PlaylistIdArtistsGet**](docs/V1Api.md#getartistsfromplaylistapiv1playlistidartistsget) | **GET** /api/v1/playlist/{id}/artists | Get Artists From Playlist
*V1Api* | [**getCollaborationsFromArtistApiV1ArtistIdCollaborationsGet**](docs/V1Api.md#getcollaborationsfromartistapiv1artistidcollaborationsget) | **GET** /api/v1/artist/{id}/collaborations | Get Collaborations From Artist
*V1Api* | [**getFeaturesFromAlbumApiV1AlbumIdFeaturesGet**](docs/V1Api.md#getfeaturesfromalbumapiv1albumidfeaturesget) | **GET** /api/v1/album/{id}/features | Get Features From Album
*V1Api* | [**getFeaturesFromArtistApiV1ArtistIdFeaturesGet**](docs/V1Api.md#getfeaturesfromartistapiv1artistidfeaturesget) | **GET** /api/v1/artist/{id}/features | Get Features From Artist
*V1Api* | [**getFeaturesFromSongApiV1SongIdFeaturesGet**](docs/V1Api.md#getfeaturesfromsongapiv1songidfeaturesget) | **GET** /api/v1/song/{id}/features | Get Features From Song
*V1Api* | [**getGenreApiV1GenreIdGet**](docs/V1Api.md#getgenreapiv1genreidget) | **GET** /api/v1/genre/{id} | Get Genre
*V1Api* | [**getGenresFromAlbumApiV1AlbumIdGenresGet**](docs/V1Api.md#getgenresfromalbumapiv1albumidgenresget) | **GET** /api/v1/album/{id}/genres | Get Genres From Album
*V1Api* | [**getGenresFromArtistApiV1ArtistIdGenresGet**](docs/V1Api.md#getgenresfromartistapiv1artistidgenresget) | **GET** /api/v1/artist/{id}/genres | Get Genres From Artist
*V1Api* | [**getGenresFromPlaylistApiV1PlaylistIdGenresGet**](docs/V1Api.md#getgenresfromplaylistapiv1playlistidgenresget) | **GET** /api/v1/playlist/{id}/genres | Get Genres From Playlist
*V1Api* | [**getImageApiV1ImageIdGet**](docs/V1Api.md#getimageapiv1imageidget) | **GET** /api/v1/image/{id} | Get Image
*V1Api* | [**getPlaylistApiV1PlaylistIdGet**](docs/V1Api.md#getplaylistapiv1playlistidget) | **GET** /api/v1/playlist/{id} | Get Playlist
*V1Api* | [**getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet**](docs/V1Api.md#getplaylistssongispartofapiv1songidplaylistsget) | **GET** /api/v1/song/{id}/playlists | Get Playlists Song Is Part Of
*V1Api* | [**getSongApiV1SongIdGet**](docs/V1Api.md#getsongapiv1songidget) | **GET** /api/v1/song/{id} | Get Song
*V1Api* | [**getSongsFromAlbumApiV1AlbumIdSongsGet**](docs/V1Api.md#getsongsfromalbumapiv1albumidsongsget) | **GET** /api/v1/album/{id}/songs | Get Songs From Album
*V1Api* | [**getSongsFromArtistApiV1ArtistIdSongsGet**](docs/V1Api.md#getsongsfromartistapiv1artistidsongsget) | **GET** /api/v1/artist/{id}/songs | Get Songs From Artist
*V1Api* | [**getSongsFromGenreApiV1GenreIdSongsGet**](docs/V1Api.md#getsongsfromgenreapiv1genreidsongsget) | **GET** /api/v1/genre/{id}/songs | Get Songs From Genre
*V1Api* | [**getSongsFromPlaylistApiV1PlaylistIdSongsGet**](docs/V1Api.md#getsongsfromplaylistapiv1playlistidsongsget) | **GET** /api/v1/playlist/{id}/songs | Get Songs From Playlist
*V1Api* | [**listAllAlbumsApiV1AlbumsGet**](docs/V1Api.md#listallalbumsapiv1albumsget) | **GET** /api/v1/albums | List All Albums
*V1Api* | [**listAllArtistApiV1ArtistsGet**](docs/V1Api.md#listallartistapiv1artistsget) | **GET** /api/v1/artists | List All Artist
*V1Api* | [**listAllGenresApiV1GenresGet**](docs/V1Api.md#listallgenresapiv1genresget) | **GET** /api/v1/genres | List All Genres
*V1Api* | [**listAllPlaylistsApiV1PlaylistsGet**](docs/V1Api.md#listallplaylistsapiv1playlistsget) | **GET** /api/v1/playlists | List All Playlists
*V1Api* | [**listAllSongApiV1SongsGet**](docs/V1Api.md#listallsongapiv1songsget) | **GET** /api/v1/songs | List All Song
*V1Api* | [**setDatabaseApiV1DbPatch**](docs/V1Api.md#setdatabaseapiv1dbpatch) | **PATCH** /api/v1/db | Set Database
*V1Api* | [**streamSongApiV1SongIdStreamGet**](docs/V1Api.md#streamsongapiv1songidstreamget) | **GET** /api/v1/song/{id}/stream | Stream Song
*V1Api* | [**updateAlbumApiV1AlbumIdPatch**](docs/V1Api.md#updatealbumapiv1albumidpatch) | **PATCH** /api/v1/album/{id} | Update Album
*V1Api* | [**updateArtistApiV1ArtistIdPatch**](docs/V1Api.md#updateartistapiv1artistidpatch) | **PATCH** /api/v1/artist/{id} | Update Artist
*V1Api* | [**updateGenreApiV1GenreIdPatch**](docs/V1Api.md#updategenreapiv1genreidpatch) | **PATCH** /api/v1/genre/{id} | Update Genre
*V1Api* | [**updatePlaylistApiV1PlaylistIdPatch**](docs/V1Api.md#updateplaylistapiv1playlistidpatch) | **PATCH** /api/v1/playlist/{id} | Update Playlist
*V1Api* | [**updateSongApiV1SongIdPatch**](docs/V1Api.md#updatesongapiv1songidpatch) | **PATCH** /api/v1/song/{id} | Update Song
*V1Api* | [**uploadSongApiV1SongPost**](docs/V1Api.md#uploadsongapiv1songpost) | **POST** /api/v1/song | Upload Song


### Models

- [AlbumCreateRequest](docs/AlbumCreateRequest.md)
- [AlbumResponse](docs/AlbumResponse.md)
- [AlbumUpdateRequest](docs/AlbumUpdateRequest.md)
- [ArtistCreateRequest](docs/ArtistCreateRequest.md)
- [ArtistResponse](docs/ArtistResponse.md)
- [ArtistUpdateRequest](docs/ArtistUpdateRequest.md)
- [DeletedResponse](docs/DeletedResponse.md)
- [GenreCreateRequest](docs/GenreCreateRequest.md)
- [GenreResponse](docs/GenreResponse.md)
- [GenreUpdateRequest](docs/GenreUpdateRequest.md)
- [HTTPValidationError](docs/HTTPValidationError.md)
- [LocationInner](docs/LocationInner.md)
- [PlaylistCreateRequest](docs/PlaylistCreateRequest.md)
- [PlaylistResponse](docs/PlaylistResponse.md)
- [PlaylistUpdateRequest](docs/PlaylistUpdateRequest.md)
- [SongResponse](docs/SongResponse.md)
- [SongUpdateRequest](docs/SongUpdateRequest.md)
- [ValidationError](docs/ValidationError.md)

### Authorization

Endpoints do not require authorization.


## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `0.1.0`
- Package version: `1.0.1`
- Generator version: `7.21.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[]()
