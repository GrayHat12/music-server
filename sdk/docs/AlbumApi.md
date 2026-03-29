# AlbumApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createAlbumApiV1AlbumPost**](AlbumApi.md#createalbumapiv1albumpost) | **POST** /api/v1/album | Create Album |
| [**deleteAlbumApiV1AlbumIdDelete**](AlbumApi.md#deletealbumapiv1albumiddelete) | **DELETE** /api/v1/album/{id} | Delete Album |
| [**getAlbumApiV1AlbumIdGet**](AlbumApi.md#getalbumapiv1albumidget) | **GET** /api/v1/album/{id} | Get Album |
| [**getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet**](AlbumApi.md#getalbumsfromplaylistapiv1playlistidalbumsget) | **GET** /api/v1/playlist/{id}/albums | Get Albums From Playlist |
| [**getFeaturesFromAlbumApiV1AlbumIdFeaturesGet**](AlbumApi.md#getfeaturesfromalbumapiv1albumidfeaturesget) | **GET** /api/v1/album/{id}/features | Get Features From Album |
| [**getGenresFromAlbumApiV1AlbumIdGenresGet**](AlbumApi.md#getgenresfromalbumapiv1albumidgenresget) | **GET** /api/v1/album/{id}/genres | Get Genres From Album |
| [**getSongsFromAlbumApiV1AlbumIdSongsGet**](AlbumApi.md#getsongsfromalbumapiv1albumidsongsget) | **GET** /api/v1/album/{id}/songs | Get Songs From Album |
| [**listAllAlbumsApiV1AlbumsGet**](AlbumApi.md#listallalbumsapiv1albumsget) | **GET** /api/v1/albums | List All Albums |
| [**updateAlbumApiV1AlbumIdPatch**](AlbumApi.md#updatealbumapiv1albumidpatch) | **PATCH** /api/v1/album/{id} | Update Album |



## createAlbumApiV1AlbumPost

> AlbumResponse createAlbumApiV1AlbumPost(albumCreateRequest)

Create Album

### Example

```ts
import {
  Configuration,
  AlbumApi,
} from 'audio-server';
import type { CreateAlbumApiV1AlbumPostRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new AlbumApi();

  const body = {
    // AlbumCreateRequest
    albumCreateRequest: ...,
  } satisfies CreateAlbumApiV1AlbumPostRequest;

  try {
    const data = await api.createAlbumApiV1AlbumPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **albumCreateRequest** | [AlbumCreateRequest](AlbumCreateRequest.md) |  | |

### Return type

[**AlbumResponse**](AlbumResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **409** | Conflict! Album already exists. |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteAlbumApiV1AlbumIdDelete

> DeletedResponse deleteAlbumApiV1AlbumIdDelete(id)

Delete Album

### Example

```ts
import {
  Configuration,
  AlbumApi,
} from 'audio-server';
import type { DeleteAlbumApiV1AlbumIdDeleteRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new AlbumApi();

  const body = {
    // number
    id: 56,
  } satisfies DeleteAlbumApiV1AlbumIdDeleteRequest;

  try {
    const data = await api.deleteAlbumApiV1AlbumIdDelete(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` |  | [Defaults to `undefined`] |

### Return type

[**DeletedResponse**](DeletedResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAlbumApiV1AlbumIdGet

> AlbumResponse getAlbumApiV1AlbumIdGet(id)

Get Album

### Example

```ts
import {
  Configuration,
  AlbumApi,
} from 'audio-server';
import type { GetAlbumApiV1AlbumIdGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new AlbumApi();

  const body = {
    // number
    id: 56,
  } satisfies GetAlbumApiV1AlbumIdGetRequest;

  try {
    const data = await api.getAlbumApiV1AlbumIdGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` |  | [Defaults to `undefined`] |

### Return type

[**AlbumResponse**](AlbumResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet

> Array&lt;number&gt; getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet(id)

Get Albums From Playlist

### Example

```ts
import {
  Configuration,
  AlbumApi,
} from 'audio-server';
import type { GetAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new AlbumApi();

  const body = {
    // number
    id: 56,
  } satisfies GetAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetRequest;

  try {
    const data = await api.getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` |  | [Defaults to `undefined`] |

### Return type

**Array<number>**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFeaturesFromAlbumApiV1AlbumIdFeaturesGet

> Array&lt;number&gt; getFeaturesFromAlbumApiV1AlbumIdFeaturesGet(id)

Get Features From Album

### Example

```ts
import {
  Configuration,
  AlbumApi,
} from 'audio-server';
import type { GetFeaturesFromAlbumApiV1AlbumIdFeaturesGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new AlbumApi();

  const body = {
    // number
    id: 56,
  } satisfies GetFeaturesFromAlbumApiV1AlbumIdFeaturesGetRequest;

  try {
    const data = await api.getFeaturesFromAlbumApiV1AlbumIdFeaturesGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` |  | [Defaults to `undefined`] |

### Return type

**Array<number>**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGenresFromAlbumApiV1AlbumIdGenresGet

> Array&lt;string&gt; getGenresFromAlbumApiV1AlbumIdGenresGet(id)

Get Genres From Album

### Example

```ts
import {
  Configuration,
  AlbumApi,
} from 'audio-server';
import type { GetGenresFromAlbumApiV1AlbumIdGenresGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new AlbumApi();

  const body = {
    // number
    id: 56,
  } satisfies GetGenresFromAlbumApiV1AlbumIdGenresGetRequest;

  try {
    const data = await api.getGenresFromAlbumApiV1AlbumIdGenresGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` |  | [Defaults to `undefined`] |

### Return type

**Array<string>**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSongsFromAlbumApiV1AlbumIdSongsGet

> Array&lt;number&gt; getSongsFromAlbumApiV1AlbumIdSongsGet(id)

Get Songs From Album

### Example

```ts
import {
  Configuration,
  AlbumApi,
} from 'audio-server';
import type { GetSongsFromAlbumApiV1AlbumIdSongsGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new AlbumApi();

  const body = {
    // number
    id: 56,
  } satisfies GetSongsFromAlbumApiV1AlbumIdSongsGetRequest;

  try {
    const data = await api.getSongsFromAlbumApiV1AlbumIdSongsGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` |  | [Defaults to `undefined`] |

### Return type

**Array<number>**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listAllAlbumsApiV1AlbumsGet

> Array&lt;AlbumResponse&gt; listAllAlbumsApiV1AlbumsGet()

List All Albums

### Example

```ts
import {
  Configuration,
  AlbumApi,
} from 'audio-server';
import type { ListAllAlbumsApiV1AlbumsGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new AlbumApi();

  try {
    const data = await api.listAllAlbumsApiV1AlbumsGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;AlbumResponse&gt;**](AlbumResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateAlbumApiV1AlbumIdPatch

> AlbumResponse updateAlbumApiV1AlbumIdPatch(id, albumUpdateRequest)

Update Album

### Example

```ts
import {
  Configuration,
  AlbumApi,
} from 'audio-server';
import type { UpdateAlbumApiV1AlbumIdPatchRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new AlbumApi();

  const body = {
    // number
    id: 56,
    // AlbumUpdateRequest
    albumUpdateRequest: ...,
  } satisfies UpdateAlbumApiV1AlbumIdPatchRequest;

  try {
    const data = await api.updateAlbumApiV1AlbumIdPatch(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` |  | [Defaults to `undefined`] |
| **albumUpdateRequest** | [AlbumUpdateRequest](AlbumUpdateRequest.md) |  | |

### Return type

[**AlbumResponse**](AlbumResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

