# .PlaylistApi

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


# **createPlaylistApiV1PlaylistPost**
> PlaylistResponse createPlaylistApiV1PlaylistPost(playlistCreateRequest)


### Example


```typescript
import { createConfiguration, PlaylistApi } from '';
import type { PlaylistApiCreatePlaylistApiV1PlaylistPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PlaylistApi(configuration);

const request: PlaylistApiCreatePlaylistApiV1PlaylistPostRequest = {
  
  playlistCreateRequest: {
    name: "name_example",
    image: 1,
    songs: [
      1,
    ],
  },
};

const data = await apiInstance.createPlaylistApiV1PlaylistPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playlistCreateRequest** | **PlaylistCreateRequest**|  |


### Return type

**PlaylistResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**409** | Conflict! Artist already exists. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deletePlaylistApiV1PlaylistIdDelete**
> DeletedResponse deletePlaylistApiV1PlaylistIdDelete()


### Example


```typescript
import { createConfiguration, PlaylistApi } from '';
import type { PlaylistApiDeletePlaylistApiV1PlaylistIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PlaylistApi(configuration);

const request: PlaylistApiDeletePlaylistApiV1PlaylistIdDeleteRequest = {
  
  id: 1,
};

const data = await apiInstance.deletePlaylistApiV1PlaylistIdDelete(request);
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

# **getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet**
> Array<number> getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet()


### Example


```typescript
import { createConfiguration, PlaylistApi } from '';
import type { PlaylistApiGetAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PlaylistApi(configuration);

const request: PlaylistApiGetAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetRequest = {
  
  id: 1,
};

const data = await apiInstance.getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet(request);
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

# **getArtistsFromPlaylistApiV1PlaylistIdArtistsGet**
> Array<number> getArtistsFromPlaylistApiV1PlaylistIdArtistsGet()


### Example


```typescript
import { createConfiguration, PlaylistApi } from '';
import type { PlaylistApiGetArtistsFromPlaylistApiV1PlaylistIdArtistsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PlaylistApi(configuration);

const request: PlaylistApiGetArtistsFromPlaylistApiV1PlaylistIdArtistsGetRequest = {
  
  id: 1,
};

const data = await apiInstance.getArtistsFromPlaylistApiV1PlaylistIdArtistsGet(request);
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

# **getGenresFromPlaylistApiV1PlaylistIdGenresGet**
> Array<string> getGenresFromPlaylistApiV1PlaylistIdGenresGet()


### Example


```typescript
import { createConfiguration, PlaylistApi } from '';
import type { PlaylistApiGetGenresFromPlaylistApiV1PlaylistIdGenresGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PlaylistApi(configuration);

const request: PlaylistApiGetGenresFromPlaylistApiV1PlaylistIdGenresGetRequest = {
  
  id: 1,
};

const data = await apiInstance.getGenresFromPlaylistApiV1PlaylistIdGenresGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**Array<string>**

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

# **getPlaylistApiV1PlaylistIdGet**
> PlaylistResponse getPlaylistApiV1PlaylistIdGet()


### Example


```typescript
import { createConfiguration, PlaylistApi } from '';
import type { PlaylistApiGetPlaylistApiV1PlaylistIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PlaylistApi(configuration);

const request: PlaylistApiGetPlaylistApiV1PlaylistIdGetRequest = {
  
  id: 1,
};

const data = await apiInstance.getPlaylistApiV1PlaylistIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**PlaylistResponse**

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
import { createConfiguration, PlaylistApi } from '';
import type { PlaylistApiGetPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PlaylistApi(configuration);

const request: PlaylistApiGetPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetRequest = {
  
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

# **getSongsFromPlaylistApiV1PlaylistIdSongsGet**
> Array<number> getSongsFromPlaylistApiV1PlaylistIdSongsGet()


### Example


```typescript
import { createConfiguration, PlaylistApi } from '';
import type { PlaylistApiGetSongsFromPlaylistApiV1PlaylistIdSongsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PlaylistApi(configuration);

const request: PlaylistApiGetSongsFromPlaylistApiV1PlaylistIdSongsGetRequest = {
  
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

# **listAllPlaylistsApiV1PlaylistsGet**
> Array<PlaylistResponse> listAllPlaylistsApiV1PlaylistsGet()


### Example


```typescript
import { createConfiguration, PlaylistApi } from '';

const configuration = createConfiguration();
const apiInstance = new PlaylistApi(configuration);

const request = {};

const data = await apiInstance.listAllPlaylistsApiV1PlaylistsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<PlaylistResponse>**

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

# **updatePlaylistApiV1PlaylistIdPatch**
> PlaylistResponse updatePlaylistApiV1PlaylistIdPatch(playlistUpdateRequest)


### Example


```typescript
import { createConfiguration, PlaylistApi } from '';
import type { PlaylistApiUpdatePlaylistApiV1PlaylistIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PlaylistApi(configuration);

const request: PlaylistApiUpdatePlaylistApiV1PlaylistIdPatchRequest = {
  
  id: 1,
  
  playlistUpdateRequest: {
    name: "name_example",
    image: 1,
  },
};

const data = await apiInstance.updatePlaylistApiV1PlaylistIdPatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playlistUpdateRequest** | **PlaylistUpdateRequest**|  |
 **id** | [**number**] |  | defaults to undefined


### Return type

**PlaylistResponse**

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


