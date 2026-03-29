# AudioServer.SongApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteSongApiV1SongIdDelete**](SongApi.md#deleteSongApiV1SongIdDelete) | **DELETE** /api/v1/song/{id} | Delete Song
[**getFeaturesFromArtistApiV1ArtistIdFeaturesGet**](SongApi.md#getFeaturesFromArtistApiV1ArtistIdFeaturesGet) | **GET** /api/v1/artist/{id}/features | Get Features From Artist
[**getFeaturesFromSongApiV1SongIdFeaturesGet**](SongApi.md#getFeaturesFromSongApiV1SongIdFeaturesGet) | **GET** /api/v1/song/{id}/features | Get Features From Song
[**getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet**](SongApi.md#getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet) | **GET** /api/v1/song/{id}/playlists | Get Playlists Song Is Part Of
[**getSongApiV1SongIdGet**](SongApi.md#getSongApiV1SongIdGet) | **GET** /api/v1/song/{id} | Get Song
[**getSongsFromAlbumApiV1AlbumIdSongsGet**](SongApi.md#getSongsFromAlbumApiV1AlbumIdSongsGet) | **GET** /api/v1/album/{id}/songs | Get Songs From Album
[**getSongsFromArtistApiV1ArtistIdSongsGet**](SongApi.md#getSongsFromArtistApiV1ArtistIdSongsGet) | **GET** /api/v1/artist/{id}/songs | Get Songs From Artist
[**getSongsFromGenreApiV1GenreSongsGet**](SongApi.md#getSongsFromGenreApiV1GenreSongsGet) | **GET** /api/v1/genre/songs | Get Songs From Genre
[**getSongsFromPlaylistApiV1PlaylistIdSongsGet**](SongApi.md#getSongsFromPlaylistApiV1PlaylistIdSongsGet) | **GET** /api/v1/playlist/{id}/songs | Get Songs From Playlist
[**listAllSongApiV1SongsGet**](SongApi.md#listAllSongApiV1SongsGet) | **GET** /api/v1/songs | List All Song
[**streamSongApiV1SongIdStreamGet**](SongApi.md#streamSongApiV1SongIdStreamGet) | **GET** /api/v1/song/{id}/stream | Stream Song
[**updateSongApiV1SongIdPatch**](SongApi.md#updateSongApiV1SongIdPatch) | **PATCH** /api/v1/song/{id} | Update Song
[**uploadSongApiV1SongPost**](SongApi.md#uploadSongApiV1SongPost) | **POST** /api/v1/song | Upload Song



## deleteSongApiV1SongIdDelete

> DeletedResponse deleteSongApiV1SongIdDelete(id)

Delete Song

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.SongApi();
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


## getFeaturesFromArtistApiV1ArtistIdFeaturesGet

> [Number] getFeaturesFromArtistApiV1ArtistIdFeaturesGet(id)

Get Features From Artist

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.SongApi();
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

let apiInstance = new AudioServer.SongApi();
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


## getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet

> [Number] getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet(id)

Get Playlists Song Is Part Of

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.SongApi();
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

let apiInstance = new AudioServer.SongApi();
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

let apiInstance = new AudioServer.SongApi();
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

let apiInstance = new AudioServer.SongApi();
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

let apiInstance = new AudioServer.SongApi();
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

let apiInstance = new AudioServer.SongApi();
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


## listAllSongApiV1SongsGet

> [SongResponse] listAllSongApiV1SongsGet()

List All Song

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.SongApi();
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


## streamSongApiV1SongIdStreamGet

> streamSongApiV1SongIdStreamGet(id)

Stream Song

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.SongApi();
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


## updateSongApiV1SongIdPatch

> SongResponse updateSongApiV1SongIdPatch(id, songUpdateRequest)

Update Song

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.SongApi();
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

let apiInstance = new AudioServer.SongApi();
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

