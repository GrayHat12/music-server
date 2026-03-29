# AudioServer.V1Api

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addImageApiV1ImagePost**](V1Api.md#addImageApiV1ImagePost) | **POST** /api/v1/image | Add Image
[**createAlbumApiV1AlbumPost**](V1Api.md#createAlbumApiV1AlbumPost) | **POST** /api/v1/album | Create Album
[**createArtistApiV1ArtistPost**](V1Api.md#createArtistApiV1ArtistPost) | **POST** /api/v1/artist | Create Artist
[**createGenreApiV1GenrePost**](V1Api.md#createGenreApiV1GenrePost) | **POST** /api/v1/genre | Create Genre
[**createPlaylistApiV1PlaylistPost**](V1Api.md#createPlaylistApiV1PlaylistPost) | **POST** /api/v1/playlist | Create Playlist
[**deleteAlbumApiV1AlbumIdDelete**](V1Api.md#deleteAlbumApiV1AlbumIdDelete) | **DELETE** /api/v1/album/{id} | Delete Album
[**deleteArtistApiV1ArtistIdDelete**](V1Api.md#deleteArtistApiV1ArtistIdDelete) | **DELETE** /api/v1/artist/{id} | Delete Artist
[**deleteGenreApiV1GenreDelete**](V1Api.md#deleteGenreApiV1GenreDelete) | **DELETE** /api/v1/genre | Delete Genre
[**deleteImageApiV1ImageIdDelete**](V1Api.md#deleteImageApiV1ImageIdDelete) | **DELETE** /api/v1/image/{id} | Delete Image
[**deletePlaylistApiV1PlaylistIdDelete**](V1Api.md#deletePlaylistApiV1PlaylistIdDelete) | **DELETE** /api/v1/playlist/{id} | Delete Playlist
[**deleteSongApiV1SongIdDelete**](V1Api.md#deleteSongApiV1SongIdDelete) | **DELETE** /api/v1/song/{id} | Delete Song
[**getAlbumApiV1AlbumIdGet**](V1Api.md#getAlbumApiV1AlbumIdGet) | **GET** /api/v1/album/{id} | Get Album
[**getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet**](V1Api.md#getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet) | **GET** /api/v1/playlist/{id}/albums | Get Albums From Playlist
[**getArtistApiV1ArtistIdGet**](V1Api.md#getArtistApiV1ArtistIdGet) | **GET** /api/v1/artist/{id} | Get Artist
[**getArtistsFromPlaylistApiV1PlaylistIdArtistsGet**](V1Api.md#getArtistsFromPlaylistApiV1PlaylistIdArtistsGet) | **GET** /api/v1/playlist/{id}/artists | Get Artists From Playlist
[**getCollaborationsFromArtistApiV1ArtistIdCollaborationsGet**](V1Api.md#getCollaborationsFromArtistApiV1ArtistIdCollaborationsGet) | **GET** /api/v1/artist/{id}/collaborations | Get Collaborations From Artist
[**getFeaturesFromAlbumApiV1AlbumIdFeaturesGet**](V1Api.md#getFeaturesFromAlbumApiV1AlbumIdFeaturesGet) | **GET** /api/v1/album/{id}/features | Get Features From Album
[**getFeaturesFromArtistApiV1ArtistIdFeaturesGet**](V1Api.md#getFeaturesFromArtistApiV1ArtistIdFeaturesGet) | **GET** /api/v1/artist/{id}/features | Get Features From Artist
[**getFeaturesFromSongApiV1SongIdFeaturesGet**](V1Api.md#getFeaturesFromSongApiV1SongIdFeaturesGet) | **GET** /api/v1/song/{id}/features | Get Features From Song
[**getGenresFromAlbumApiV1AlbumIdGenresGet**](V1Api.md#getGenresFromAlbumApiV1AlbumIdGenresGet) | **GET** /api/v1/album/{id}/genres | Get Genres From Album
[**getGenresFromArtistApiV1ArtistIdGenresGet**](V1Api.md#getGenresFromArtistApiV1ArtistIdGenresGet) | **GET** /api/v1/artist/{id}/genres | Get Genres From Artist
[**getGenresFromPlaylistApiV1PlaylistIdGenresGet**](V1Api.md#getGenresFromPlaylistApiV1PlaylistIdGenresGet) | **GET** /api/v1/playlist/{id}/genres | Get Genres From Playlist
[**getImageApiV1ImageIdGet**](V1Api.md#getImageApiV1ImageIdGet) | **GET** /api/v1/image/{id} | Get Image
[**getPlaylistApiV1PlaylistIdGet**](V1Api.md#getPlaylistApiV1PlaylistIdGet) | **GET** /api/v1/playlist/{id} | Get Playlist
[**getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet**](V1Api.md#getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet) | **GET** /api/v1/song/{id}/playlists | Get Playlists Song Is Part Of
[**getSongApiV1SongIdGet**](V1Api.md#getSongApiV1SongIdGet) | **GET** /api/v1/song/{id} | Get Song
[**getSongsFromAlbumApiV1AlbumIdSongsGet**](V1Api.md#getSongsFromAlbumApiV1AlbumIdSongsGet) | **GET** /api/v1/album/{id}/songs | Get Songs From Album
[**getSongsFromArtistApiV1ArtistIdSongsGet**](V1Api.md#getSongsFromArtistApiV1ArtistIdSongsGet) | **GET** /api/v1/artist/{id}/songs | Get Songs From Artist
[**getSongsFromGenreApiV1GenreSongsGet**](V1Api.md#getSongsFromGenreApiV1GenreSongsGet) | **GET** /api/v1/genre/songs | Get Songs From Genre
[**getSongsFromPlaylistApiV1PlaylistIdSongsGet**](V1Api.md#getSongsFromPlaylistApiV1PlaylistIdSongsGet) | **GET** /api/v1/playlist/{id}/songs | Get Songs From Playlist
[**listAllAlbumsApiV1AlbumsGet**](V1Api.md#listAllAlbumsApiV1AlbumsGet) | **GET** /api/v1/albums | List All Albums
[**listAllArtistApiV1ArtistsGet**](V1Api.md#listAllArtistApiV1ArtistsGet) | **GET** /api/v1/artists | List All Artist
[**listAllGenresApiV1GenresGet**](V1Api.md#listAllGenresApiV1GenresGet) | **GET** /api/v1/genres | List All Genres
[**listAllPlaylistsApiV1PlaylistsGet**](V1Api.md#listAllPlaylistsApiV1PlaylistsGet) | **GET** /api/v1/playlists | List All Playlists
[**listAllSongApiV1SongsGet**](V1Api.md#listAllSongApiV1SongsGet) | **GET** /api/v1/songs | List All Song
[**setDatabaseApiV1DbPatch**](V1Api.md#setDatabaseApiV1DbPatch) | **PATCH** /api/v1/db | Set Database
[**streamSongApiV1SongIdStreamGet**](V1Api.md#streamSongApiV1SongIdStreamGet) | **GET** /api/v1/song/{id}/stream | Stream Song
[**updateAlbumApiV1AlbumIdPatch**](V1Api.md#updateAlbumApiV1AlbumIdPatch) | **PATCH** /api/v1/album/{id} | Update Album
[**updateArtistApiV1ArtistIdPatch**](V1Api.md#updateArtistApiV1ArtistIdPatch) | **PATCH** /api/v1/artist/{id} | Update Artist
[**updateGenreApiV1GenrePatch**](V1Api.md#updateGenreApiV1GenrePatch) | **PATCH** /api/v1/genre | Update Genre
[**updatePlaylistApiV1PlaylistIdPatch**](V1Api.md#updatePlaylistApiV1PlaylistIdPatch) | **PATCH** /api/v1/playlist/{id} | Update Playlist
[**updateSongApiV1SongIdPatch**](V1Api.md#updateSongApiV1SongIdPatch) | **PATCH** /api/v1/song/{id} | Update Song
[**uploadSongApiV1SongPost**](V1Api.md#uploadSongApiV1SongPost) | **POST** /api/v1/song | Upload Song



## addImageApiV1ImagePost

> Number addImageApiV1ImagePost(file)

Add Image

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let file = "file_example"; // String | 
apiInstance.addImageApiV1ImagePost(file, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **String**|  | 

### Return type

**Number**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## createAlbumApiV1AlbumPost

> AlbumResponse createAlbumApiV1AlbumPost(albumCreateRequest)

Create Album

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let albumCreateRequest = new AudioServer.AlbumCreateRequest(); // AlbumCreateRequest | 
apiInstance.createAlbumApiV1AlbumPost(albumCreateRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **albumCreateRequest** | [**AlbumCreateRequest**](AlbumCreateRequest.md)|  | 

### Return type

[**AlbumResponse**](AlbumResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createArtistApiV1ArtistPost

> ArtistResponse createArtistApiV1ArtistPost(artistCreateRequest)

Create Artist

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let artistCreateRequest = new AudioServer.ArtistCreateRequest(); // ArtistCreateRequest | 
apiInstance.createArtistApiV1ArtistPost(artistCreateRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **artistCreateRequest** | [**ArtistCreateRequest**](ArtistCreateRequest.md)|  | 

### Return type

[**ArtistResponse**](ArtistResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createGenreApiV1GenrePost

> String createGenreApiV1GenrePost(genreCreateRequest)

Create Genre

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let genreCreateRequest = new AudioServer.GenreCreateRequest(); // GenreCreateRequest | 
apiInstance.createGenreApiV1GenrePost(genreCreateRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **genreCreateRequest** | [**GenreCreateRequest**](GenreCreateRequest.md)|  | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPlaylistApiV1PlaylistPost

> PlaylistResponse createPlaylistApiV1PlaylistPost(playlistCreateRequest)

Create Playlist

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let playlistCreateRequest = new AudioServer.PlaylistCreateRequest(); // PlaylistCreateRequest | 
apiInstance.createPlaylistApiV1PlaylistPost(playlistCreateRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playlistCreateRequest** | [**PlaylistCreateRequest**](PlaylistCreateRequest.md)|  | 

### Return type

[**PlaylistResponse**](PlaylistResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAlbumApiV1AlbumIdDelete

> DeletedResponse deleteAlbumApiV1AlbumIdDelete(id)

Delete Album

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let id = 56; // Number | 
apiInstance.deleteAlbumApiV1AlbumIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**DeletedResponse**](DeletedResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteArtistApiV1ArtistIdDelete

> DeletedResponse deleteArtistApiV1ArtistIdDelete(id)

Delete Artist

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let id = 56; // Number | 
apiInstance.deleteArtistApiV1ArtistIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**DeletedResponse**](DeletedResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteGenreApiV1GenreDelete

> DeletedResponse deleteGenreApiV1GenreDelete(name)

Delete Genre

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let name = "name_example"; // String | 
apiInstance.deleteGenreApiV1GenreDelete(name, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | 

### Return type

[**DeletedResponse**](DeletedResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteImageApiV1ImageIdDelete

> DeletedResponse deleteImageApiV1ImageIdDelete(id)

Delete Image

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let id = 56; // Number | 
apiInstance.deleteImageApiV1ImageIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**DeletedResponse**](DeletedResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deletePlaylistApiV1PlaylistIdDelete

> DeletedResponse deletePlaylistApiV1PlaylistIdDelete(id)

Delete Playlist

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let id = 56; // Number | 
apiInstance.deletePlaylistApiV1PlaylistIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**DeletedResponse**](DeletedResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteSongApiV1SongIdDelete

> DeletedResponse deleteSongApiV1SongIdDelete(id)

Delete Song

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let id = 56; // Number | 
apiInstance.deleteSongApiV1SongIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**DeletedResponse**](DeletedResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAlbumApiV1AlbumIdGet

> AlbumResponse getAlbumApiV1AlbumIdGet(id)

Get Album

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let id = 56; // Number | 
apiInstance.getAlbumApiV1AlbumIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**AlbumResponse**](AlbumResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet

> [Number] getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet(id)

Get Albums From Playlist

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let id = 56; // Number | 
apiInstance.getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

**[Number]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getArtistApiV1ArtistIdGet

> ArtistResponse getArtistApiV1ArtistIdGet(id)

Get Artist

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let id = 56; // Number | 
apiInstance.getArtistApiV1ArtistIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**ArtistResponse**](ArtistResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getArtistsFromPlaylistApiV1PlaylistIdArtistsGet

> [Number] getArtistsFromPlaylistApiV1PlaylistIdArtistsGet(id)

Get Artists From Playlist

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let id = 56; // Number | 
apiInstance.getArtistsFromPlaylistApiV1PlaylistIdArtistsGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

**[Number]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCollaborationsFromArtistApiV1ArtistIdCollaborationsGet

> [Number] getCollaborationsFromArtistApiV1ArtistIdCollaborationsGet(id)

Get Collaborations From Artist

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let id = 56; // Number | 
apiInstance.getCollaborationsFromArtistApiV1ArtistIdCollaborationsGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

**[Number]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFeaturesFromAlbumApiV1AlbumIdFeaturesGet

> [Number] getFeaturesFromAlbumApiV1AlbumIdFeaturesGet(id)

Get Features From Album

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let id = 56; // Number | 
apiInstance.getFeaturesFromAlbumApiV1AlbumIdFeaturesGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

**[Number]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFeaturesFromArtistApiV1ArtistIdFeaturesGet

> [Number] getFeaturesFromArtistApiV1ArtistIdFeaturesGet(id)

Get Features From Artist

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let id = 56; // Number | 
apiInstance.getFeaturesFromArtistApiV1ArtistIdFeaturesGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

**[Number]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFeaturesFromSongApiV1SongIdFeaturesGet

> [Number] getFeaturesFromSongApiV1SongIdFeaturesGet(id)

Get Features From Song

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let id = 56; // Number | 
apiInstance.getFeaturesFromSongApiV1SongIdFeaturesGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

**[Number]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGenresFromAlbumApiV1AlbumIdGenresGet

> [String] getGenresFromAlbumApiV1AlbumIdGenresGet(id)

Get Genres From Album

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let id = 56; // Number | 
apiInstance.getGenresFromAlbumApiV1AlbumIdGenresGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

**[String]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGenresFromArtistApiV1ArtistIdGenresGet

> [String] getGenresFromArtistApiV1ArtistIdGenresGet(id)

Get Genres From Artist

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let id = 56; // Number | 
apiInstance.getGenresFromArtistApiV1ArtistIdGenresGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

**[String]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGenresFromPlaylistApiV1PlaylistIdGenresGet

> [String] getGenresFromPlaylistApiV1PlaylistIdGenresGet(id)

Get Genres From Playlist

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let id = 56; // Number | 
apiInstance.getGenresFromPlaylistApiV1PlaylistIdGenresGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

**[String]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getImageApiV1ImageIdGet

> getImageApiV1ImageIdGet(id)

Get Image

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let id = 56; // Number | 
apiInstance.getImageApiV1ImageIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPlaylistApiV1PlaylistIdGet

> PlaylistResponse getPlaylistApiV1PlaylistIdGet(id)

Get Playlist

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let id = 56; // Number | 
apiInstance.getPlaylistApiV1PlaylistIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**PlaylistResponse**](PlaylistResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet

> [Number] getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet(id)

Get Playlists Song Is Part Of

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let id = 56; // Number | 
apiInstance.getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

**[Number]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSongApiV1SongIdGet

> SongResponse getSongApiV1SongIdGet(id)

Get Song

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let id = 56; // Number | 
apiInstance.getSongApiV1SongIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**SongResponse**](SongResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSongsFromAlbumApiV1AlbumIdSongsGet

> [Number] getSongsFromAlbumApiV1AlbumIdSongsGet(id)

Get Songs From Album

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let id = 56; // Number | 
apiInstance.getSongsFromAlbumApiV1AlbumIdSongsGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

**[Number]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSongsFromArtistApiV1ArtistIdSongsGet

> [Number] getSongsFromArtistApiV1ArtistIdSongsGet(id)

Get Songs From Artist

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let id = 56; // Number | 
apiInstance.getSongsFromArtistApiV1ArtistIdSongsGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

**[Number]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSongsFromGenreApiV1GenreSongsGet

> [Number] getSongsFromGenreApiV1GenreSongsGet(name)

Get Songs From Genre

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let name = "name_example"; // String | 
apiInstance.getSongsFromGenreApiV1GenreSongsGet(name, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | 

### Return type

**[Number]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSongsFromPlaylistApiV1PlaylistIdSongsGet

> [Number] getSongsFromPlaylistApiV1PlaylistIdSongsGet(id)

Get Songs From Playlist

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let id = 56; // Number | 
apiInstance.getSongsFromPlaylistApiV1PlaylistIdSongsGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

**[Number]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAllAlbumsApiV1AlbumsGet

> [AlbumResponse] listAllAlbumsApiV1AlbumsGet()

List All Albums

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
apiInstance.listAllAlbumsApiV1AlbumsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[AlbumResponse]**](AlbumResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAllArtistApiV1ArtistsGet

> [ArtistResponse] listAllArtistApiV1ArtistsGet()

List All Artist

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
apiInstance.listAllArtistApiV1ArtistsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[ArtistResponse]**](ArtistResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAllGenresApiV1GenresGet

> [String] listAllGenresApiV1GenresGet()

List All Genres

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
apiInstance.listAllGenresApiV1GenresGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**[String]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAllPlaylistsApiV1PlaylistsGet

> PlaylistResponse listAllPlaylistsApiV1PlaylistsGet()

List All Playlists

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
apiInstance.listAllPlaylistsApiV1PlaylistsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**PlaylistResponse**](PlaylistResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAllSongApiV1SongsGet

> [SongResponse] listAllSongApiV1SongsGet()

List All Song

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
apiInstance.listAllSongApiV1SongsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[SongResponse]**](SongResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setDatabaseApiV1DbPatch

> Boolean setDatabaseApiV1DbPatch(path)

Set Database

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let path = "path_example"; // String | 
apiInstance.setDatabaseApiV1DbPatch(path, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**|  | 

### Return type

**Boolean**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## streamSongApiV1SongIdStreamGet

> streamSongApiV1SongIdStreamGet(id)

Stream Song

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let id = 56; // Number | 
apiInstance.streamSongApiV1SongIdStreamGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAlbumApiV1AlbumIdPatch

> AlbumResponse updateAlbumApiV1AlbumIdPatch(id, albumUpdateRequest)

Update Album

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let id = 56; // Number | 
let albumUpdateRequest = new AudioServer.AlbumUpdateRequest(); // AlbumUpdateRequest | 
apiInstance.updateAlbumApiV1AlbumIdPatch(id, albumUpdateRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **albumUpdateRequest** | [**AlbumUpdateRequest**](AlbumUpdateRequest.md)|  | 

### Return type

[**AlbumResponse**](AlbumResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateArtistApiV1ArtistIdPatch

> ArtistResponse updateArtistApiV1ArtistIdPatch(id, artistUpdateRequest)

Update Artist

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let id = 56; // Number | 
let artistUpdateRequest = new AudioServer.ArtistUpdateRequest(); // ArtistUpdateRequest | 
apiInstance.updateArtistApiV1ArtistIdPatch(id, artistUpdateRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **artistUpdateRequest** | [**ArtistUpdateRequest**](ArtistUpdateRequest.md)|  | 

### Return type

[**ArtistResponse**](ArtistResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateGenreApiV1GenrePatch

> String updateGenreApiV1GenrePatch(genreUpdateRequest)

Update Genre

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let genreUpdateRequest = new AudioServer.GenreUpdateRequest(); // GenreUpdateRequest | 
apiInstance.updateGenreApiV1GenrePatch(genreUpdateRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **genreUpdateRequest** | [**GenreUpdateRequest**](GenreUpdateRequest.md)|  | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePlaylistApiV1PlaylistIdPatch

> PlaylistResponse updatePlaylistApiV1PlaylistIdPatch(id, playlistUpdateRequest)

Update Playlist

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let id = 56; // Number | 
let playlistUpdateRequest = new AudioServer.PlaylistUpdateRequest(); // PlaylistUpdateRequest | 
apiInstance.updatePlaylistApiV1PlaylistIdPatch(id, playlistUpdateRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **playlistUpdateRequest** | [**PlaylistUpdateRequest**](PlaylistUpdateRequest.md)|  | 

### Return type

[**PlaylistResponse**](PlaylistResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateSongApiV1SongIdPatch

> SongResponse updateSongApiV1SongIdPatch(id, songUpdateRequest)

Update Song

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let id = 56; // Number | 
let songUpdateRequest = new AudioServer.SongUpdateRequest(); // SongUpdateRequest | 
apiInstance.updateSongApiV1SongIdPatch(id, songUpdateRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **songUpdateRequest** | [**SongUpdateRequest**](SongUpdateRequest.md)|  | 

### Return type

[**SongResponse**](SongResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## uploadSongApiV1SongPost

> SongResponse uploadSongApiV1SongPost(file)

Upload Song

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.V1Api();
let file = "file_example"; // String | 
apiInstance.uploadSongApiV1SongPost(file, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **String**|  | 

### Return type

[**SongResponse**](SongResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

