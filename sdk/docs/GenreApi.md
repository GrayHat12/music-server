# .GenreApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createGenreApiV1GenrePost**](GenreApi.md#createGenreApiV1GenrePost) | **POST** /api/v1/genre | Create Genre
[**deleteGenreApiV1GenreIdDelete**](GenreApi.md#deleteGenreApiV1GenreIdDelete) | **DELETE** /api/v1/genre/{id} | Delete Genre
[**getGenreApiV1GenreIdGet**](GenreApi.md#getGenreApiV1GenreIdGet) | **GET** /api/v1/genre/{id} | Get Genre
[**getGenresFromAlbumApiV1AlbumIdGenresGet**](GenreApi.md#getGenresFromAlbumApiV1AlbumIdGenresGet) | **GET** /api/v1/album/{id}/genres | Get Genres From Album
[**getGenresFromArtistApiV1ArtistIdGenresGet**](GenreApi.md#getGenresFromArtistApiV1ArtistIdGenresGet) | **GET** /api/v1/artist/{id}/genres | Get Genres From Artist
[**getGenresFromPlaylistApiV1PlaylistIdGenresGet**](GenreApi.md#getGenresFromPlaylistApiV1PlaylistIdGenresGet) | **GET** /api/v1/playlist/{id}/genres | Get Genres From Playlist
[**getSongsFromGenreApiV1GenreIdSongsGet**](GenreApi.md#getSongsFromGenreApiV1GenreIdSongsGet) | **GET** /api/v1/genre/{id}/songs | Get Songs From Genre
[**listAllGenresApiV1GenresGet**](GenreApi.md#listAllGenresApiV1GenresGet) | **GET** /api/v1/genres | List All Genres
[**updateGenreApiV1GenreIdPatch**](GenreApi.md#updateGenreApiV1GenreIdPatch) | **PATCH** /api/v1/genre/{id} | Update Genre


# **createGenreApiV1GenrePost**
> GenreResponse createGenreApiV1GenrePost(genreCreateRequest)


### Example


```typescript
import { createConfiguration, GenreApi } from '';
import type { GenreApiCreateGenreApiV1GenrePostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new GenreApi(configuration);

const request: GenreApiCreateGenreApiV1GenrePostRequest = {
  
  genreCreateRequest: {
    name: "name_example",
  },
};

const data = await apiInstance.createGenreApiV1GenrePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **genreCreateRequest** | **GenreCreateRequest**|  |


### Return type

**GenreResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**409** | Conflict! Genre already exists. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteGenreApiV1GenreIdDelete**
> DeletedResponse deleteGenreApiV1GenreIdDelete()


### Example


```typescript
import { createConfiguration, GenreApi } from '';
import type { GenreApiDeleteGenreApiV1GenreIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new GenreApi(configuration);

const request: GenreApiDeleteGenreApiV1GenreIdDeleteRequest = {
  
  id: 1,
};

const data = await apiInstance.deleteGenreApiV1GenreIdDelete(request);
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

# **getGenreApiV1GenreIdGet**
> GenreResponse getGenreApiV1GenreIdGet()


### Example


```typescript
import { createConfiguration, GenreApi } from '';
import type { GenreApiGetGenreApiV1GenreIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new GenreApi(configuration);

const request: GenreApiGetGenreApiV1GenreIdGetRequest = {
  
  id: 1,
};

const data = await apiInstance.getGenreApiV1GenreIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**GenreResponse**

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

# **getGenresFromAlbumApiV1AlbumIdGenresGet**
> Array<string> getGenresFromAlbumApiV1AlbumIdGenresGet()


### Example


```typescript
import { createConfiguration, GenreApi } from '';
import type { GenreApiGetGenresFromAlbumApiV1AlbumIdGenresGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new GenreApi(configuration);

const request: GenreApiGetGenresFromAlbumApiV1AlbumIdGenresGetRequest = {
  
  id: 1,
};

const data = await apiInstance.getGenresFromAlbumApiV1AlbumIdGenresGet(request);
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

# **getGenresFromArtistApiV1ArtistIdGenresGet**
> Array<string> getGenresFromArtistApiV1ArtistIdGenresGet()


### Example


```typescript
import { createConfiguration, GenreApi } from '';
import type { GenreApiGetGenresFromArtistApiV1ArtistIdGenresGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new GenreApi(configuration);

const request: GenreApiGetGenresFromArtistApiV1ArtistIdGenresGetRequest = {
  
  id: 1,
};

const data = await apiInstance.getGenresFromArtistApiV1ArtistIdGenresGet(request);
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

# **getGenresFromPlaylistApiV1PlaylistIdGenresGet**
> Array<string> getGenresFromPlaylistApiV1PlaylistIdGenresGet()


### Example


```typescript
import { createConfiguration, GenreApi } from '';
import type { GenreApiGetGenresFromPlaylistApiV1PlaylistIdGenresGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new GenreApi(configuration);

const request: GenreApiGetGenresFromPlaylistApiV1PlaylistIdGenresGetRequest = {
  
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

# **getSongsFromGenreApiV1GenreIdSongsGet**
> Array<number> getSongsFromGenreApiV1GenreIdSongsGet()


### Example


```typescript
import { createConfiguration, GenreApi } from '';
import type { GenreApiGetSongsFromGenreApiV1GenreIdSongsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new GenreApi(configuration);

const request: GenreApiGetSongsFromGenreApiV1GenreIdSongsGetRequest = {
  
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

# **listAllGenresApiV1GenresGet**
> Array<GenreResponse> listAllGenresApiV1GenresGet()


### Example


```typescript
import { createConfiguration, GenreApi } from '';

const configuration = createConfiguration();
const apiInstance = new GenreApi(configuration);

const request = {};

const data = await apiInstance.listAllGenresApiV1GenresGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<GenreResponse>**

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

# **updateGenreApiV1GenreIdPatch**
> GenreResponse updateGenreApiV1GenreIdPatch(genreUpdateRequest)


### Example


```typescript
import { createConfiguration, GenreApi } from '';
import type { GenreApiUpdateGenreApiV1GenreIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new GenreApi(configuration);

const request: GenreApiUpdateGenreApiV1GenreIdPatchRequest = {
  
  id: 1,
  
  genreUpdateRequest: {
    name: "name_example",
  },
};

const data = await apiInstance.updateGenreApiV1GenreIdPatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **genreUpdateRequest** | **GenreUpdateRequest**|  |
 **id** | [**number**] |  | defaults to undefined


### Return type

**GenreResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**409** | Conflict! Genre with same name already exists. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


