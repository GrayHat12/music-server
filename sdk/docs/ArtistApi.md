# .ArtistApi

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


# **createArtistApiV1ArtistPost**
> ArtistResponse createArtistApiV1ArtistPost(artistCreateRequest)


### Example


```typescript
import { createConfiguration, ArtistApi } from '';
import type { ArtistApiCreateArtistApiV1ArtistPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArtistApi(configuration);

const request: ArtistApiCreateArtistApiV1ArtistPostRequest = {
  
  artistCreateRequest: {
    name: "name_example",
    image: 1,
  },
};

const data = await apiInstance.createArtistApiV1ArtistPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **artistCreateRequest** | **ArtistCreateRequest**|  |


### Return type

**ArtistResponse**

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

# **deleteArtistApiV1ArtistIdDelete**
> DeletedResponse deleteArtistApiV1ArtistIdDelete()


### Example


```typescript
import { createConfiguration, ArtistApi } from '';
import type { ArtistApiDeleteArtistApiV1ArtistIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArtistApi(configuration);

const request: ArtistApiDeleteArtistApiV1ArtistIdDeleteRequest = {
  
  id: 1,
};

const data = await apiInstance.deleteArtistApiV1ArtistIdDelete(request);
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

# **getArtistApiV1ArtistIdGet**
> ArtistResponse getArtistApiV1ArtistIdGet()


### Example


```typescript
import { createConfiguration, ArtistApi } from '';
import type { ArtistApiGetArtistApiV1ArtistIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArtistApi(configuration);

const request: ArtistApiGetArtistApiV1ArtistIdGetRequest = {
  
  id: 1,
};

const data = await apiInstance.getArtistApiV1ArtistIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**ArtistResponse**

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
import { createConfiguration, ArtistApi } from '';
import type { ArtistApiGetArtistsFromPlaylistApiV1PlaylistIdArtistsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArtistApi(configuration);

const request: ArtistApiGetArtistsFromPlaylistApiV1PlaylistIdArtistsGetRequest = {
  
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

# **getCollaborationsFromArtistApiV1ArtistIdCollaborationsGet**
> Array<number> getCollaborationsFromArtistApiV1ArtistIdCollaborationsGet()


### Example


```typescript
import { createConfiguration, ArtistApi } from '';
import type { ArtistApiGetCollaborationsFromArtistApiV1ArtistIdCollaborationsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArtistApi(configuration);

const request: ArtistApiGetCollaborationsFromArtistApiV1ArtistIdCollaborationsGetRequest = {
  
  id: 1,
};

const data = await apiInstance.getCollaborationsFromArtistApiV1ArtistIdCollaborationsGet(request);
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
import { createConfiguration, ArtistApi } from '';
import type { ArtistApiGetFeaturesFromAlbumApiV1AlbumIdFeaturesGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArtistApi(configuration);

const request: ArtistApiGetFeaturesFromAlbumApiV1AlbumIdFeaturesGetRequest = {
  
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

# **getFeaturesFromArtistApiV1ArtistIdFeaturesGet**
> Array<number> getFeaturesFromArtistApiV1ArtistIdFeaturesGet()


### Example


```typescript
import { createConfiguration, ArtistApi } from '';
import type { ArtistApiGetFeaturesFromArtistApiV1ArtistIdFeaturesGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArtistApi(configuration);

const request: ArtistApiGetFeaturesFromArtistApiV1ArtistIdFeaturesGetRequest = {
  
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
import { createConfiguration, ArtistApi } from '';
import type { ArtistApiGetFeaturesFromSongApiV1SongIdFeaturesGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArtistApi(configuration);

const request: ArtistApiGetFeaturesFromSongApiV1SongIdFeaturesGetRequest = {
  
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

# **getGenresFromArtistApiV1ArtistIdGenresGet**
> Array<string> getGenresFromArtistApiV1ArtistIdGenresGet()


### Example


```typescript
import { createConfiguration, ArtistApi } from '';
import type { ArtistApiGetGenresFromArtistApiV1ArtistIdGenresGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArtistApi(configuration);

const request: ArtistApiGetGenresFromArtistApiV1ArtistIdGenresGetRequest = {
  
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

# **getSongsFromArtistApiV1ArtistIdSongsGet**
> Array<number> getSongsFromArtistApiV1ArtistIdSongsGet()


### Example


```typescript
import { createConfiguration, ArtistApi } from '';
import type { ArtistApiGetSongsFromArtistApiV1ArtistIdSongsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArtistApi(configuration);

const request: ArtistApiGetSongsFromArtistApiV1ArtistIdSongsGetRequest = {
  
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

# **listAllArtistApiV1ArtistsGet**
> Array<ArtistResponse> listAllArtistApiV1ArtistsGet()


### Example


```typescript
import { createConfiguration, ArtistApi } from '';

const configuration = createConfiguration();
const apiInstance = new ArtistApi(configuration);

const request = {};

const data = await apiInstance.listAllArtistApiV1ArtistsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<ArtistResponse>**

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

# **updateArtistApiV1ArtistIdPatch**
> ArtistResponse updateArtistApiV1ArtistIdPatch(artistUpdateRequest)


### Example


```typescript
import { createConfiguration, ArtistApi } from '';
import type { ArtistApiUpdateArtistApiV1ArtistIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArtistApi(configuration);

const request: ArtistApiUpdateArtistApiV1ArtistIdPatchRequest = {
  
  id: 1,
  
  artistUpdateRequest: {
    name: "name_example",
    image: 1,
  },
};

const data = await apiInstance.updateArtistApiV1ArtistIdPatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **artistUpdateRequest** | **ArtistUpdateRequest**|  |
 **id** | [**number**] |  | defaults to undefined


### Return type

**ArtistResponse**

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


