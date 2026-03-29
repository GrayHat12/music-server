# AudioServer.GenreApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createGenreApiV1GenrePost**](GenreApi.md#createGenreApiV1GenrePost) | **POST** /api/v1/genre | Create Genre
[**deleteGenreApiV1GenreDelete**](GenreApi.md#deleteGenreApiV1GenreDelete) | **DELETE** /api/v1/genre | Delete Genre
[**getGenresFromAlbumApiV1AlbumIdGenresGet**](GenreApi.md#getGenresFromAlbumApiV1AlbumIdGenresGet) | **GET** /api/v1/album/{id}/genres | Get Genres From Album
[**getGenresFromArtistApiV1ArtistIdGenresGet**](GenreApi.md#getGenresFromArtistApiV1ArtistIdGenresGet) | **GET** /api/v1/artist/{id}/genres | Get Genres From Artist
[**getGenresFromPlaylistApiV1PlaylistIdGenresGet**](GenreApi.md#getGenresFromPlaylistApiV1PlaylistIdGenresGet) | **GET** /api/v1/playlist/{id}/genres | Get Genres From Playlist
[**getSongsFromGenreApiV1GenreSongsGet**](GenreApi.md#getSongsFromGenreApiV1GenreSongsGet) | **GET** /api/v1/genre/songs | Get Songs From Genre
[**listAllGenresApiV1GenresGet**](GenreApi.md#listAllGenresApiV1GenresGet) | **GET** /api/v1/genres | List All Genres
[**updateGenreApiV1GenrePatch**](GenreApi.md#updateGenreApiV1GenrePatch) | **PATCH** /api/v1/genre | Update Genre



## createGenreApiV1GenrePost

> String createGenreApiV1GenrePost(genreCreateRequest)

Create Genre

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.GenreApi();
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


## deleteGenreApiV1GenreDelete

> DeletedResponse deleteGenreApiV1GenreDelete(name)

Delete Genre

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.GenreApi();
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


## getGenresFromAlbumApiV1AlbumIdGenresGet

> [String] getGenresFromAlbumApiV1AlbumIdGenresGet(id)

Get Genres From Album

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.GenreApi();
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

let apiInstance = new AudioServer.GenreApi();
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

let apiInstance = new AudioServer.GenreApi();
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


## getSongsFromGenreApiV1GenreSongsGet

> [Number] getSongsFromGenreApiV1GenreSongsGet(name)

Get Songs From Genre

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.GenreApi();
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


## listAllGenresApiV1GenresGet

> [String] listAllGenresApiV1GenresGet()

List All Genres

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.GenreApi();
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


## updateGenreApiV1GenrePatch

> String updateGenreApiV1GenrePatch(genreUpdateRequest)

Update Genre

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.GenreApi();
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

