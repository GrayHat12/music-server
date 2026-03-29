# PlaylistApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createPlaylistApiV1PlaylistPost**](PlaylistApi.md#createplaylistapiv1playlistpost) | **POST** /api/v1/playlist | Create Playlist |
| [**deletePlaylistApiV1PlaylistIdDelete**](PlaylistApi.md#deleteplaylistapiv1playlistiddelete) | **DELETE** /api/v1/playlist/{id} | Delete Playlist |
| [**getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet**](PlaylistApi.md#getalbumsfromplaylistapiv1playlistidalbumsget) | **GET** /api/v1/playlist/{id}/albums | Get Albums From Playlist |
| [**getArtistsFromPlaylistApiV1PlaylistIdArtistsGet**](PlaylistApi.md#getartistsfromplaylistapiv1playlistidartistsget) | **GET** /api/v1/playlist/{id}/artists | Get Artists From Playlist |
| [**getGenresFromPlaylistApiV1PlaylistIdGenresGet**](PlaylistApi.md#getgenresfromplaylistapiv1playlistidgenresget) | **GET** /api/v1/playlist/{id}/genres | Get Genres From Playlist |
| [**getPlaylistApiV1PlaylistIdGet**](PlaylistApi.md#getplaylistapiv1playlistidget) | **GET** /api/v1/playlist/{id} | Get Playlist |
| [**getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet**](PlaylistApi.md#getplaylistssongispartofapiv1songidplaylistsget) | **GET** /api/v1/song/{id}/playlists | Get Playlists Song Is Part Of |
| [**getSongsFromPlaylistApiV1PlaylistIdSongsGet**](PlaylistApi.md#getsongsfromplaylistapiv1playlistidsongsget) | **GET** /api/v1/playlist/{id}/songs | Get Songs From Playlist |
| [**listAllPlaylistsApiV1PlaylistsGet**](PlaylistApi.md#listallplaylistsapiv1playlistsget) | **GET** /api/v1/playlists | List All Playlists |
| [**updatePlaylistApiV1PlaylistIdPatch**](PlaylistApi.md#updateplaylistapiv1playlistidpatch) | **PATCH** /api/v1/playlist/{id} | Update Playlist |



## createPlaylistApiV1PlaylistPost

> PlaylistResponse createPlaylistApiV1PlaylistPost(playlistCreateRequest)

Create Playlist

### Example

```ts
import {
  Configuration,
  PlaylistApi,
} from 'audio-server';
import type { CreatePlaylistApiV1PlaylistPostRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new PlaylistApi();

  const body = {
    // PlaylistCreateRequest
    playlistCreateRequest: ...,
  } satisfies CreatePlaylistApiV1PlaylistPostRequest;

  try {
    const data = await api.createPlaylistApiV1PlaylistPost(body);
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
| **playlistCreateRequest** | [PlaylistCreateRequest](PlaylistCreateRequest.md) |  | |

### Return type

[**PlaylistResponse**](PlaylistResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **409** | Conflict! Artist already exists. |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deletePlaylistApiV1PlaylistIdDelete

> DeletedResponse deletePlaylistApiV1PlaylistIdDelete(id)

Delete Playlist

### Example

```ts
import {
  Configuration,
  PlaylistApi,
} from 'audio-server';
import type { DeletePlaylistApiV1PlaylistIdDeleteRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new PlaylistApi();

  const body = {
    // number
    id: 56,
  } satisfies DeletePlaylistApiV1PlaylistIdDeleteRequest;

  try {
    const data = await api.deletePlaylistApiV1PlaylistIdDelete(body);
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


## getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet

> Array&lt;number&gt; getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet(id)

Get Albums From Playlist

### Example

```ts
import {
  Configuration,
  PlaylistApi,
} from 'audio-server';
import type { GetAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new PlaylistApi();

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


## getArtistsFromPlaylistApiV1PlaylistIdArtistsGet

> Array&lt;number&gt; getArtistsFromPlaylistApiV1PlaylistIdArtistsGet(id)

Get Artists From Playlist

### Example

```ts
import {
  Configuration,
  PlaylistApi,
} from 'audio-server';
import type { GetArtistsFromPlaylistApiV1PlaylistIdArtistsGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new PlaylistApi();

  const body = {
    // number
    id: 56,
  } satisfies GetArtistsFromPlaylistApiV1PlaylistIdArtistsGetRequest;

  try {
    const data = await api.getArtistsFromPlaylistApiV1PlaylistIdArtistsGet(body);
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


## getGenresFromPlaylistApiV1PlaylistIdGenresGet

> Array&lt;string&gt; getGenresFromPlaylistApiV1PlaylistIdGenresGet(id)

Get Genres From Playlist

### Example

```ts
import {
  Configuration,
  PlaylistApi,
} from 'audio-server';
import type { GetGenresFromPlaylistApiV1PlaylistIdGenresGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new PlaylistApi();

  const body = {
    // number
    id: 56,
  } satisfies GetGenresFromPlaylistApiV1PlaylistIdGenresGetRequest;

  try {
    const data = await api.getGenresFromPlaylistApiV1PlaylistIdGenresGet(body);
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


## getPlaylistApiV1PlaylistIdGet

> PlaylistResponse getPlaylistApiV1PlaylistIdGet(id)

Get Playlist

### Example

```ts
import {
  Configuration,
  PlaylistApi,
} from 'audio-server';
import type { GetPlaylistApiV1PlaylistIdGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new PlaylistApi();

  const body = {
    // number
    id: 56,
  } satisfies GetPlaylistApiV1PlaylistIdGetRequest;

  try {
    const data = await api.getPlaylistApiV1PlaylistIdGet(body);
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

[**PlaylistResponse**](PlaylistResponse.md)

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


## getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet

> Array&lt;number&gt; getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet(id)

Get Playlists Song Is Part Of

### Example

```ts
import {
  Configuration,
  PlaylistApi,
} from 'audio-server';
import type { GetPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new PlaylistApi();

  const body = {
    // number
    id: 56,
  } satisfies GetPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetRequest;

  try {
    const data = await api.getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet(body);
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


## getSongsFromPlaylistApiV1PlaylistIdSongsGet

> Array&lt;number&gt; getSongsFromPlaylistApiV1PlaylistIdSongsGet(id)

Get Songs From Playlist

### Example

```ts
import {
  Configuration,
  PlaylistApi,
} from 'audio-server';
import type { GetSongsFromPlaylistApiV1PlaylistIdSongsGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new PlaylistApi();

  const body = {
    // number
    id: 56,
  } satisfies GetSongsFromPlaylistApiV1PlaylistIdSongsGetRequest;

  try {
    const data = await api.getSongsFromPlaylistApiV1PlaylistIdSongsGet(body);
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


## listAllPlaylistsApiV1PlaylistsGet

> Array&lt;PlaylistResponse&gt; listAllPlaylistsApiV1PlaylistsGet()

List All Playlists

### Example

```ts
import {
  Configuration,
  PlaylistApi,
} from 'audio-server';
import type { ListAllPlaylistsApiV1PlaylistsGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new PlaylistApi();

  try {
    const data = await api.listAllPlaylistsApiV1PlaylistsGet();
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

[**Array&lt;PlaylistResponse&gt;**](PlaylistResponse.md)

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


## updatePlaylistApiV1PlaylistIdPatch

> PlaylistResponse updatePlaylistApiV1PlaylistIdPatch(id, playlistUpdateRequest)

Update Playlist

### Example

```ts
import {
  Configuration,
  PlaylistApi,
} from 'audio-server';
import type { UpdatePlaylistApiV1PlaylistIdPatchRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new PlaylistApi();

  const body = {
    // number
    id: 56,
    // PlaylistUpdateRequest
    playlistUpdateRequest: ...,
  } satisfies UpdatePlaylistApiV1PlaylistIdPatchRequest;

  try {
    const data = await api.updatePlaylistApiV1PlaylistIdPatch(body);
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
| **playlistUpdateRequest** | [PlaylistUpdateRequest](PlaylistUpdateRequest.md) |  | |

### Return type

[**PlaylistResponse**](PlaylistResponse.md)

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

