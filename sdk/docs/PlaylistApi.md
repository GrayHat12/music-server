# AudioServer.PlaylistApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPlaylistApiV1PlaylistPost**](PlaylistApi.md#createPlaylistApiV1PlaylistPost) | **POST** /api/v1/playlist | Create Playlist
[**deletePlaylistApiV1PlaylistIdDelete**](PlaylistApi.md#deletePlaylistApiV1PlaylistIdDelete) | **DELETE** /api/v1/playlist/{id} | Delete Playlist
[**getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet**](PlaylistApi.md#getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet) | **GET** /api/v1/playlist/{id}/albums | Get Albums From Playlist
[**getArtistsFromPlaylistApiV1PlaylistIdArtistsGet**](PlaylistApi.md#getArtistsFromPlaylistApiV1PlaylistIdArtistsGet) | **GET** /api/v1/playlist/{id}/artists | Get Artists From Playlist
[**getGenresFromPlaylistApiV1PlaylistIdGenresGet**](PlaylistApi.md#getGenresFromPlaylistApiV1PlaylistIdGenresGet) | **GET** /api/v1/playlist/{id}/genres | Get Genres From Playlist
[**getPlaylistApiV1PlaylistIdGet**](PlaylistApi.md#getPlaylistApiV1PlaylistIdGet) | **GET** /api/v1/playlist/{id} | Get Playlist
[**getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet**](PlaylistApi.md#getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet) | **GET** /api/v1/song/{id}/playlists | Get Playlists Song Is Part Of
[**getSongsFromPlaylistApiV1PlaylistIdSongsGet**](PlaylistApi.md#getSongsFromPlaylistApiV1PlaylistIdSongsGet) | **GET** /api/v1/playlist/{id}/songs | Get Songs From Playlist
[**listAllPlaylistsApiV1PlaylistsGet**](PlaylistApi.md#listAllPlaylistsApiV1PlaylistsGet) | **GET** /api/v1/playlists | List All Playlists
[**updatePlaylistApiV1PlaylistIdPatch**](PlaylistApi.md#updatePlaylistApiV1PlaylistIdPatch) | **PATCH** /api/v1/playlist/{id} | Update Playlist



## createPlaylistApiV1PlaylistPost

> PlaylistResponse createPlaylistApiV1PlaylistPost(playlistCreateRequest)

Create Playlist

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.PlaylistApi();
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


## deletePlaylistApiV1PlaylistIdDelete

> DeletedResponse deletePlaylistApiV1PlaylistIdDelete(id)

Delete Playlist

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.PlaylistApi();
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


## getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet

> [Number] getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet(id)

Get Albums From Playlist

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.PlaylistApi();
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


## getArtistsFromPlaylistApiV1PlaylistIdArtistsGet

> [Number] getArtistsFromPlaylistApiV1PlaylistIdArtistsGet(id)

Get Artists From Playlist

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.PlaylistApi();
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


## getGenresFromPlaylistApiV1PlaylistIdGenresGet

> [String] getGenresFromPlaylistApiV1PlaylistIdGenresGet(id)

Get Genres From Playlist

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.PlaylistApi();
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


## getPlaylistApiV1PlaylistIdGet

> PlaylistResponse getPlaylistApiV1PlaylistIdGet(id)

Get Playlist

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.PlaylistApi();
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

let apiInstance = new AudioServer.PlaylistApi();
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


## getSongsFromPlaylistApiV1PlaylistIdSongsGet

> [Number] getSongsFromPlaylistApiV1PlaylistIdSongsGet(id)

Get Songs From Playlist

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.PlaylistApi();
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


## listAllPlaylistsApiV1PlaylistsGet

> PlaylistResponse listAllPlaylistsApiV1PlaylistsGet()

List All Playlists

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.PlaylistApi();
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


## updatePlaylistApiV1PlaylistIdPatch

> PlaylistResponse updatePlaylistApiV1PlaylistIdPatch(id, playlistUpdateRequest)

Update Playlist

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.PlaylistApi();
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

