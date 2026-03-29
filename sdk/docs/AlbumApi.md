# AudioServer.AlbumApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAlbumApiV1AlbumPost**](AlbumApi.md#createAlbumApiV1AlbumPost) | **POST** /api/v1/album | Create Album
[**deleteAlbumApiV1AlbumIdDelete**](AlbumApi.md#deleteAlbumApiV1AlbumIdDelete) | **DELETE** /api/v1/album/{id} | Delete Album
[**getAlbumApiV1AlbumIdGet**](AlbumApi.md#getAlbumApiV1AlbumIdGet) | **GET** /api/v1/album/{id} | Get Album
[**getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet**](AlbumApi.md#getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet) | **GET** /api/v1/playlist/{id}/albums | Get Albums From Playlist
[**getFeaturesFromAlbumApiV1AlbumIdFeaturesGet**](AlbumApi.md#getFeaturesFromAlbumApiV1AlbumIdFeaturesGet) | **GET** /api/v1/album/{id}/features | Get Features From Album
[**getGenresFromAlbumApiV1AlbumIdGenresGet**](AlbumApi.md#getGenresFromAlbumApiV1AlbumIdGenresGet) | **GET** /api/v1/album/{id}/genres | Get Genres From Album
[**getSongsFromAlbumApiV1AlbumIdSongsGet**](AlbumApi.md#getSongsFromAlbumApiV1AlbumIdSongsGet) | **GET** /api/v1/album/{id}/songs | Get Songs From Album
[**listAllAlbumsApiV1AlbumsGet**](AlbumApi.md#listAllAlbumsApiV1AlbumsGet) | **GET** /api/v1/albums | List All Albums
[**updateAlbumApiV1AlbumIdPatch**](AlbumApi.md#updateAlbumApiV1AlbumIdPatch) | **PATCH** /api/v1/album/{id} | Update Album



## createAlbumApiV1AlbumPost

> AlbumResponse createAlbumApiV1AlbumPost(albumCreateRequest)

Create Album

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.AlbumApi();
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


## deleteAlbumApiV1AlbumIdDelete

> DeletedResponse deleteAlbumApiV1AlbumIdDelete(id)

Delete Album

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.AlbumApi();
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


## getAlbumApiV1AlbumIdGet

> AlbumResponse getAlbumApiV1AlbumIdGet(id)

Get Album

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.AlbumApi();
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

let apiInstance = new AudioServer.AlbumApi();
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


## getFeaturesFromAlbumApiV1AlbumIdFeaturesGet

> [Number] getFeaturesFromAlbumApiV1AlbumIdFeaturesGet(id)

Get Features From Album

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.AlbumApi();
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


## getGenresFromAlbumApiV1AlbumIdGenresGet

> [String] getGenresFromAlbumApiV1AlbumIdGenresGet(id)

Get Genres From Album

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.AlbumApi();
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


## getSongsFromAlbumApiV1AlbumIdSongsGet

> [Number] getSongsFromAlbumApiV1AlbumIdSongsGet(id)

Get Songs From Album

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.AlbumApi();
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


## listAllAlbumsApiV1AlbumsGet

> [AlbumResponse] listAllAlbumsApiV1AlbumsGet()

List All Albums

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.AlbumApi();
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


## updateAlbumApiV1AlbumIdPatch

> AlbumResponse updateAlbumApiV1AlbumIdPatch(id, albumUpdateRequest)

Update Album

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.AlbumApi();
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

