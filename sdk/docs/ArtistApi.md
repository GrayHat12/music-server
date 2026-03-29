# AudioServer.ArtistApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createArtistApiV1ArtistPost**](ArtistApi.md#createArtistApiV1ArtistPost) | **POST** /api/v1/artist | Create Artist
[**deleteArtistApiV1ArtistIdDelete**](ArtistApi.md#deleteArtistApiV1ArtistIdDelete) | **DELETE** /api/v1/artist/{id} | Delete Artist
[**getArtistApiV1ArtistIdGet**](ArtistApi.md#getArtistApiV1ArtistIdGet) | **GET** /api/v1/artist/{id} | Get Artist
[**getArtistsFromPlaylistApiV1PlaylistIdArtistsGet**](ArtistApi.md#getArtistsFromPlaylistApiV1PlaylistIdArtistsGet) | **GET** /api/v1/playlist/{id}/artists | Get Artists From Playlist
[**getCollaborationsFromArtistApiV1ArtistIdCollaborationsGet**](ArtistApi.md#getCollaborationsFromArtistApiV1ArtistIdCollaborationsGet) | **GET** /api/v1/artist/{id}/collaborations | Get Collaborations From Artist
[**getFeaturesFromAlbumApiV1AlbumIdFeaturesGet**](ArtistApi.md#getFeaturesFromAlbumApiV1AlbumIdFeaturesGet) | **GET** /api/v1/album/{id}/features | Get Features From Album
[**getFeaturesFromArtistApiV1ArtistIdFeaturesGet**](ArtistApi.md#getFeaturesFromArtistApiV1ArtistIdFeaturesGet) | **GET** /api/v1/artist/{id}/features | Get Features From Artist
[**getFeaturesFromSongApiV1SongIdFeaturesGet**](ArtistApi.md#getFeaturesFromSongApiV1SongIdFeaturesGet) | **GET** /api/v1/song/{id}/features | Get Features From Song
[**getGenresFromArtistApiV1ArtistIdGenresGet**](ArtistApi.md#getGenresFromArtistApiV1ArtistIdGenresGet) | **GET** /api/v1/artist/{id}/genres | Get Genres From Artist
[**getSongsFromArtistApiV1ArtistIdSongsGet**](ArtistApi.md#getSongsFromArtistApiV1ArtistIdSongsGet) | **GET** /api/v1/artist/{id}/songs | Get Songs From Artist
[**listAllArtistApiV1ArtistsGet**](ArtistApi.md#listAllArtistApiV1ArtistsGet) | **GET** /api/v1/artists | List All Artist
[**updateArtistApiV1ArtistIdPatch**](ArtistApi.md#updateArtistApiV1ArtistIdPatch) | **PATCH** /api/v1/artist/{id} | Update Artist



## createArtistApiV1ArtistPost

> ArtistResponse createArtistApiV1ArtistPost(artistCreateRequest)

Create Artist

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.ArtistApi();
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


## deleteArtistApiV1ArtistIdDelete

> DeletedResponse deleteArtistApiV1ArtistIdDelete(id)

Delete Artist

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.ArtistApi();
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


## getArtistApiV1ArtistIdGet

> ArtistResponse getArtistApiV1ArtistIdGet(id)

Get Artist

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.ArtistApi();
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

let apiInstance = new AudioServer.ArtistApi();
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

let apiInstance = new AudioServer.ArtistApi();
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

let apiInstance = new AudioServer.ArtistApi();
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

let apiInstance = new AudioServer.ArtistApi();
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

let apiInstance = new AudioServer.ArtistApi();
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


## getGenresFromArtistApiV1ArtistIdGenresGet

> [String] getGenresFromArtistApiV1ArtistIdGenresGet(id)

Get Genres From Artist

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.ArtistApi();
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


## getSongsFromArtistApiV1ArtistIdSongsGet

> [Number] getSongsFromArtistApiV1ArtistIdSongsGet(id)

Get Songs From Artist

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.ArtistApi();
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


## listAllArtistApiV1ArtistsGet

> [ArtistResponse] listAllArtistApiV1ArtistsGet()

List All Artist

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.ArtistApi();
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


## updateArtistApiV1ArtistIdPatch

> ArtistResponse updateArtistApiV1ArtistIdPatch(id, artistUpdateRequest)

Update Artist

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.ArtistApi();
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

