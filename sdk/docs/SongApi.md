# .SongApi

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
[**getSongsFromGenreApiV1GenreIdSongsGet**](SongApi.md#getSongsFromGenreApiV1GenreIdSongsGet) | **GET** /api/v1/genre/{id}/songs | Get Songs From Genre
[**getSongsFromPlaylistApiV1PlaylistIdSongsGet**](SongApi.md#getSongsFromPlaylistApiV1PlaylistIdSongsGet) | **GET** /api/v1/playlist/{id}/songs | Get Songs From Playlist
[**listAllSongApiV1SongsGet**](SongApi.md#listAllSongApiV1SongsGet) | **GET** /api/v1/songs | List All Song
[**streamSongApiV1SongIdStreamGet**](SongApi.md#streamSongApiV1SongIdStreamGet) | **GET** /api/v1/song/{id}/stream | Stream Song
[**updateSongApiV1SongIdPatch**](SongApi.md#updateSongApiV1SongIdPatch) | **PATCH** /api/v1/song/{id} | Update Song
[**uploadSongApiV1SongPost**](SongApi.md#uploadSongApiV1SongPost) | **POST** /api/v1/song | Upload Song


# **deleteSongApiV1SongIdDelete**
> DeletedResponse deleteSongApiV1SongIdDelete()


### Example


```typescript
import { createConfiguration, SongApi } from '';
import type { SongApiDeleteSongApiV1SongIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SongApi(configuration);

const request: SongApiDeleteSongApiV1SongIdDeleteRequest = {
  
  id: 1,
};

const data = await apiInstance.deleteSongApiV1SongIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**DeletedResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getFeaturesFromArtistApiV1ArtistIdFeaturesGet**
> Array<number> getFeaturesFromArtistApiV1ArtistIdFeaturesGet()


### Example


```typescript
import { createConfiguration, SongApi } from '';
import type { SongApiGetFeaturesFromArtistApiV1ArtistIdFeaturesGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SongApi(configuration);

const request: SongApiGetFeaturesFromArtistApiV1ArtistIdFeaturesGetRequest = {
  
  id: 1,
};

const data = await apiInstance.getFeaturesFromArtistApiV1ArtistIdFeaturesGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**Array<number>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getFeaturesFromSongApiV1SongIdFeaturesGet**
> Array<number> getFeaturesFromSongApiV1SongIdFeaturesGet()


### Example


```typescript
import { createConfiguration, SongApi } from '';
import type { SongApiGetFeaturesFromSongApiV1SongIdFeaturesGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SongApi(configuration);

const request: SongApiGetFeaturesFromSongApiV1SongIdFeaturesGetRequest = {
  
  id: 1,
};

const data = await apiInstance.getFeaturesFromSongApiV1SongIdFeaturesGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**Array<number>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet**
> Array<number> getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet()


### Example


```typescript
import { createConfiguration, SongApi } from '';
import type { SongApiGetPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SongApi(configuration);

const request: SongApiGetPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetRequest = {
  
  id: 1,
};

const data = await apiInstance.getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**Array<number>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSongApiV1SongIdGet**
> SongResponse getSongApiV1SongIdGet()


### Example


```typescript
import { createConfiguration, SongApi } from '';
import type { SongApiGetSongApiV1SongIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SongApi(configuration);

const request: SongApiGetSongApiV1SongIdGetRequest = {
  
  id: 1,
};

const data = await apiInstance.getSongApiV1SongIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**SongResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSongsFromAlbumApiV1AlbumIdSongsGet**
> Array<number> getSongsFromAlbumApiV1AlbumIdSongsGet()


### Example


```typescript
import { createConfiguration, SongApi } from '';
import type { SongApiGetSongsFromAlbumApiV1AlbumIdSongsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SongApi(configuration);

const request: SongApiGetSongsFromAlbumApiV1AlbumIdSongsGetRequest = {
  
  id: 1,
};

const data = await apiInstance.getSongsFromAlbumApiV1AlbumIdSongsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**Array<number>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSongsFromArtistApiV1ArtistIdSongsGet**
> Array<number> getSongsFromArtistApiV1ArtistIdSongsGet()


### Example


```typescript
import { createConfiguration, SongApi } from '';
import type { SongApiGetSongsFromArtistApiV1ArtistIdSongsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SongApi(configuration);

const request: SongApiGetSongsFromArtistApiV1ArtistIdSongsGetRequest = {
  
  id: 1,
};

const data = await apiInstance.getSongsFromArtistApiV1ArtistIdSongsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**Array<number>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSongsFromGenreApiV1GenreIdSongsGet**
> Array<number> getSongsFromGenreApiV1GenreIdSongsGet()


### Example


```typescript
import { createConfiguration, SongApi } from '';
import type { SongApiGetSongsFromGenreApiV1GenreIdSongsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SongApi(configuration);

const request: SongApiGetSongsFromGenreApiV1GenreIdSongsGetRequest = {
  
  id: 1,
};

const data = await apiInstance.getSongsFromGenreApiV1GenreIdSongsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**Array<number>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSongsFromPlaylistApiV1PlaylistIdSongsGet**
> Array<number> getSongsFromPlaylistApiV1PlaylistIdSongsGet()


### Example


```typescript
import { createConfiguration, SongApi } from '';
import type { SongApiGetSongsFromPlaylistApiV1PlaylistIdSongsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SongApi(configuration);

const request: SongApiGetSongsFromPlaylistApiV1PlaylistIdSongsGetRequest = {
  
  id: 1,
};

const data = await apiInstance.getSongsFromPlaylistApiV1PlaylistIdSongsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**Array<number>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listAllSongApiV1SongsGet**
> Array<SongResponse> listAllSongApiV1SongsGet()


### Example


```typescript
import { createConfiguration, SongApi } from '';

const configuration = createConfiguration();
const apiInstance = new SongApi(configuration);

const request = {};

const data = await apiInstance.listAllSongApiV1SongsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<SongResponse>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **streamSongApiV1SongIdStreamGet**
> void streamSongApiV1SongIdStreamGet()


### Example


```typescript
import { createConfiguration, SongApi } from '';
import type { SongApiStreamSongApiV1SongIdStreamGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SongApi(configuration);

const request: SongApiStreamSongApiV1SongIdStreamGetRequest = {
  
  id: 1,
};

const data = await apiInstance.streamSongApiV1SongIdStreamGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateSongApiV1SongIdPatch**
> SongResponse updateSongApiV1SongIdPatch(songUpdateRequest)


### Example


```typescript
import { createConfiguration, SongApi } from '';
import type { SongApiUpdateSongApiV1SongIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SongApi(configuration);

const request: SongApiUpdateSongApiV1SongIdPatchRequest = {
  
  id: 1,
  
  songUpdateRequest: {
    genre: "genre_example",
    artist: 1,
    album: 1,
    cover: 1,
    title: "title_example",
    release: 1,
    trackno: 1.0,
    metatags: "metatags_example",
  },
};

const data = await apiInstance.updateSongApiV1SongIdPatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **songUpdateRequest** | **SongUpdateRequest**|  |
 **id** | [**number**] |  | defaults to undefined


### Return type

**SongResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **uploadSongApiV1SongPost**
> SongResponse uploadSongApiV1SongPost()


### Example


```typescript
import { createConfiguration, SongApi } from '';
import type { SongApiUploadSongApiV1SongPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SongApi(configuration);

const request: SongApiUploadSongApiV1SongPostRequest = {
  
  file: "file_example",
};

const data = await apiInstance.uploadSongApiV1SongPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | [**string**] |  | defaults to undefined


### Return type

**SongResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**409** | Conflict! Song already exists. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


