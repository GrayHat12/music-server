# .GenreApi

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


# **createGenreApiV1GenrePost**
> string createGenreApiV1GenrePost(genreCreateRequest)


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

**string**

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

# **deleteGenreApiV1GenreDelete**
> DeletedResponse deleteGenreApiV1GenreDelete()


### Example


```typescript
import { createConfiguration, GenreApi } from '';
import type { GenreApiDeleteGenreApiV1GenreDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new GenreApi(configuration);

const request: GenreApiDeleteGenreApiV1GenreDeleteRequest = {
  
  name: "name_example",
};

const data = await apiInstance.deleteGenreApiV1GenreDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] |  | defaults to undefined


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

# **getSongsFromGenreApiV1GenreSongsGet**
> Array<number> getSongsFromGenreApiV1GenreSongsGet()


### Example


```typescript
import { createConfiguration, GenreApi } from '';
import type { GenreApiGetSongsFromGenreApiV1GenreSongsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new GenreApi(configuration);

const request: GenreApiGetSongsFromGenreApiV1GenreSongsGetRequest = {
  
  name: "name_example",
};

const data = await apiInstance.getSongsFromGenreApiV1GenreSongsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] |  | defaults to undefined


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
> Array<string> listAllGenresApiV1GenresGet()


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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateGenreApiV1GenrePatch**
> string updateGenreApiV1GenrePatch(genreUpdateRequest)


### Example


```typescript
import { createConfiguration, GenreApi } from '';
import type { GenreApiUpdateGenreApiV1GenrePatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new GenreApi(configuration);

const request: GenreApiUpdateGenreApiV1GenrePatchRequest = {
  
  genreUpdateRequest: {
    oldname: "oldname_example",
    newname: "newname_example",
  },
};

const data = await apiInstance.updateGenreApiV1GenrePatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **genreUpdateRequest** | **GenreUpdateRequest**|  |


### Return type

**string**

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


