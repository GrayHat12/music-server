# .AlbumApi

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


# **createAlbumApiV1AlbumPost**
> AlbumResponse createAlbumApiV1AlbumPost(albumCreateRequest)


### Example


```typescript
import { createConfiguration, AlbumApi } from '';
import type { AlbumApiCreateAlbumApiV1AlbumPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AlbumApi(configuration);

const request: AlbumApiCreateAlbumApiV1AlbumPostRequest = {
  
  albumCreateRequest: {
    name: "name_example",
    image: 1,
    artist: 1,
  },
};

const data = await apiInstance.createAlbumApiV1AlbumPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **albumCreateRequest** | **AlbumCreateRequest**|  |


### Return type

**AlbumResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**409** | Conflict! Album already exists. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteAlbumApiV1AlbumIdDelete**
> DeletedResponse deleteAlbumApiV1AlbumIdDelete()


### Example


```typescript
import { createConfiguration, AlbumApi } from '';
import type { AlbumApiDeleteAlbumApiV1AlbumIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AlbumApi(configuration);

const request: AlbumApiDeleteAlbumApiV1AlbumIdDeleteRequest = {
  
  id: 1,
};

const data = await apiInstance.deleteAlbumApiV1AlbumIdDelete(request);
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

# **getAlbumApiV1AlbumIdGet**
> AlbumResponse getAlbumApiV1AlbumIdGet()


### Example


```typescript
import { createConfiguration, AlbumApi } from '';
import type { AlbumApiGetAlbumApiV1AlbumIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AlbumApi(configuration);

const request: AlbumApiGetAlbumApiV1AlbumIdGetRequest = {
  
  id: 1,
};

const data = await apiInstance.getAlbumApiV1AlbumIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**AlbumResponse**

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
import { createConfiguration, AlbumApi } from '';
import type { AlbumApiGetAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AlbumApi(configuration);

const request: AlbumApiGetAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetRequest = {
  
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

# **getFeaturesFromAlbumApiV1AlbumIdFeaturesGet**
> Array<number> getFeaturesFromAlbumApiV1AlbumIdFeaturesGet()


### Example


```typescript
import { createConfiguration, AlbumApi } from '';
import type { AlbumApiGetFeaturesFromAlbumApiV1AlbumIdFeaturesGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AlbumApi(configuration);

const request: AlbumApiGetFeaturesFromAlbumApiV1AlbumIdFeaturesGetRequest = {
  
  id: 1,
};

const data = await apiInstance.getFeaturesFromAlbumApiV1AlbumIdFeaturesGet(request);
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

# **getGenresFromAlbumApiV1AlbumIdGenresGet**
> Array<string> getGenresFromAlbumApiV1AlbumIdGenresGet()


### Example


```typescript
import { createConfiguration, AlbumApi } from '';
import type { AlbumApiGetGenresFromAlbumApiV1AlbumIdGenresGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AlbumApi(configuration);

const request: AlbumApiGetGenresFromAlbumApiV1AlbumIdGenresGetRequest = {
  
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

# **getSongsFromAlbumApiV1AlbumIdSongsGet**
> Array<number> getSongsFromAlbumApiV1AlbumIdSongsGet()


### Example


```typescript
import { createConfiguration, AlbumApi } from '';
import type { AlbumApiGetSongsFromAlbumApiV1AlbumIdSongsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AlbumApi(configuration);

const request: AlbumApiGetSongsFromAlbumApiV1AlbumIdSongsGetRequest = {
  
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

# **listAllAlbumsApiV1AlbumsGet**
> Array<AlbumResponse> listAllAlbumsApiV1AlbumsGet()


### Example


```typescript
import { createConfiguration, AlbumApi } from '';

const configuration = createConfiguration();
const apiInstance = new AlbumApi(configuration);

const request = {};

const data = await apiInstance.listAllAlbumsApiV1AlbumsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<AlbumResponse>**

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

# **updateAlbumApiV1AlbumIdPatch**
> AlbumResponse updateAlbumApiV1AlbumIdPatch(albumUpdateRequest)


### Example


```typescript
import { createConfiguration, AlbumApi } from '';
import type { AlbumApiUpdateAlbumApiV1AlbumIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AlbumApi(configuration);

const request: AlbumApiUpdateAlbumApiV1AlbumIdPatchRequest = {
  
  id: 1,
  
  albumUpdateRequest: {
    name: "name_example",
    image: 1,
  },
};

const data = await apiInstance.updateAlbumApiV1AlbumIdPatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **albumUpdateRequest** | **AlbumUpdateRequest**|  |
 **id** | [**number**] |  | defaults to undefined


### Return type

**AlbumResponse**

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


