# SongApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteSongApiV1SongIdDelete**](SongApi.md#deletesongapiv1songiddelete) | **DELETE** /api/v1/song/{id} | Delete Song |
| [**getFeaturesFromArtistApiV1ArtistIdFeaturesGet**](SongApi.md#getfeaturesfromartistapiv1artistidfeaturesget) | **GET** /api/v1/artist/{id}/features | Get Features From Artist |
| [**getFeaturesFromSongApiV1SongIdFeaturesGet**](SongApi.md#getfeaturesfromsongapiv1songidfeaturesget) | **GET** /api/v1/song/{id}/features | Get Features From Song |
| [**getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet**](SongApi.md#getplaylistssongispartofapiv1songidplaylistsget) | **GET** /api/v1/song/{id}/playlists | Get Playlists Song Is Part Of |
| [**getSongApiV1SongIdGet**](SongApi.md#getsongapiv1songidget) | **GET** /api/v1/song/{id} | Get Song |
| [**getSongsFromAlbumApiV1AlbumIdSongsGet**](SongApi.md#getsongsfromalbumapiv1albumidsongsget) | **GET** /api/v1/album/{id}/songs | Get Songs From Album |
| [**getSongsFromArtistApiV1ArtistIdSongsGet**](SongApi.md#getsongsfromartistapiv1artistidsongsget) | **GET** /api/v1/artist/{id}/songs | Get Songs From Artist |
| [**getSongsFromGenreApiV1GenreIdSongsGet**](SongApi.md#getsongsfromgenreapiv1genreidsongsget) | **GET** /api/v1/genre/{id}/songs | Get Songs From Genre |
| [**getSongsFromPlaylistApiV1PlaylistIdSongsGet**](SongApi.md#getsongsfromplaylistapiv1playlistidsongsget) | **GET** /api/v1/playlist/{id}/songs | Get Songs From Playlist |
| [**listAllSongApiV1SongsGet**](SongApi.md#listallsongapiv1songsget) | **GET** /api/v1/songs | List All Song |
| [**streamSongApiV1SongIdStreamGet**](SongApi.md#streamsongapiv1songidstreamget) | **GET** /api/v1/song/{id}/stream | Stream Song |
| [**updateSongApiV1SongIdPatch**](SongApi.md#updatesongapiv1songidpatch) | **PATCH** /api/v1/song/{id} | Update Song |
| [**uploadSongApiV1SongPost**](SongApi.md#uploadsongapiv1songpost) | **POST** /api/v1/song | Upload Song |



## deleteSongApiV1SongIdDelete

> DeletedResponse deleteSongApiV1SongIdDelete(id)

Delete Song

### Example

```ts
import {
  Configuration,
  SongApi,
} from 'audio-server';
import type { DeleteSongApiV1SongIdDeleteRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new SongApi();

  const body = {
    // number
    id: 56,
  } satisfies DeleteSongApiV1SongIdDeleteRequest;

  try {
    const data = await api.deleteSongApiV1SongIdDelete(body);
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


## getFeaturesFromArtistApiV1ArtistIdFeaturesGet

> Array&lt;number&gt; getFeaturesFromArtistApiV1ArtistIdFeaturesGet(id)

Get Features From Artist

### Example

```ts
import {
  Configuration,
  SongApi,
} from 'audio-server';
import type { GetFeaturesFromArtistApiV1ArtistIdFeaturesGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new SongApi();

  const body = {
    // number
    id: 56,
  } satisfies GetFeaturesFromArtistApiV1ArtistIdFeaturesGetRequest;

  try {
    const data = await api.getFeaturesFromArtistApiV1ArtistIdFeaturesGet(body);
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


## getFeaturesFromSongApiV1SongIdFeaturesGet

> Array&lt;number&gt; getFeaturesFromSongApiV1SongIdFeaturesGet(id)

Get Features From Song

### Example

```ts
import {
  Configuration,
  SongApi,
} from 'audio-server';
import type { GetFeaturesFromSongApiV1SongIdFeaturesGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new SongApi();

  const body = {
    // number
    id: 56,
  } satisfies GetFeaturesFromSongApiV1SongIdFeaturesGetRequest;

  try {
    const data = await api.getFeaturesFromSongApiV1SongIdFeaturesGet(body);
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


## getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet

> Array&lt;number&gt; getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet(id)

Get Playlists Song Is Part Of

### Example

```ts
import {
  Configuration,
  SongApi,
} from 'audio-server';
import type { GetPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new SongApi();

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


## getSongApiV1SongIdGet

> SongResponse getSongApiV1SongIdGet(id)

Get Song

### Example

```ts
import {
  Configuration,
  SongApi,
} from 'audio-server';
import type { GetSongApiV1SongIdGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new SongApi();

  const body = {
    // number
    id: 56,
  } satisfies GetSongApiV1SongIdGetRequest;

  try {
    const data = await api.getSongApiV1SongIdGet(body);
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

[**SongResponse**](SongResponse.md)

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
  SongApi,
} from 'audio-server';
import type { GetSongsFromAlbumApiV1AlbumIdSongsGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new SongApi();

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


## getSongsFromArtistApiV1ArtistIdSongsGet

> Array&lt;number&gt; getSongsFromArtistApiV1ArtistIdSongsGet(id)

Get Songs From Artist

### Example

```ts
import {
  Configuration,
  SongApi,
} from 'audio-server';
import type { GetSongsFromArtistApiV1ArtistIdSongsGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new SongApi();

  const body = {
    // number
    id: 56,
  } satisfies GetSongsFromArtistApiV1ArtistIdSongsGetRequest;

  try {
    const data = await api.getSongsFromArtistApiV1ArtistIdSongsGet(body);
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


## getSongsFromGenreApiV1GenreIdSongsGet

> Array&lt;number&gt; getSongsFromGenreApiV1GenreIdSongsGet(id)

Get Songs From Genre

### Example

```ts
import {
  Configuration,
  SongApi,
} from 'audio-server';
import type { GetSongsFromGenreApiV1GenreIdSongsGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new SongApi();

  const body = {
    // number
    id: 56,
  } satisfies GetSongsFromGenreApiV1GenreIdSongsGetRequest;

  try {
    const data = await api.getSongsFromGenreApiV1GenreIdSongsGet(body);
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
  SongApi,
} from 'audio-server';
import type { GetSongsFromPlaylistApiV1PlaylistIdSongsGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new SongApi();

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


## listAllSongApiV1SongsGet

> Array&lt;SongResponse&gt; listAllSongApiV1SongsGet()

List All Song

### Example

```ts
import {
  Configuration,
  SongApi,
} from 'audio-server';
import type { ListAllSongApiV1SongsGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new SongApi();

  try {
    const data = await api.listAllSongApiV1SongsGet();
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

[**Array&lt;SongResponse&gt;**](SongResponse.md)

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


## streamSongApiV1SongIdStreamGet

> streamSongApiV1SongIdStreamGet(id)

Stream Song

### Example

```ts
import {
  Configuration,
  SongApi,
} from 'audio-server';
import type { StreamSongApiV1SongIdStreamGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new SongApi();

  const body = {
    // number
    id: 56,
  } satisfies StreamSongApiV1SongIdStreamGetRequest;

  try {
    const data = await api.streamSongApiV1SongIdStreamGet(body);
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

`void` (Empty response body)

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


## updateSongApiV1SongIdPatch

> SongResponse updateSongApiV1SongIdPatch(id, songUpdateRequest)

Update Song

### Example

```ts
import {
  Configuration,
  SongApi,
} from 'audio-server';
import type { UpdateSongApiV1SongIdPatchRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new SongApi();

  const body = {
    // number
    id: 56,
    // SongUpdateRequest
    songUpdateRequest: ...,
  } satisfies UpdateSongApiV1SongIdPatchRequest;

  try {
    const data = await api.updateSongApiV1SongIdPatch(body);
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
| **songUpdateRequest** | [SongUpdateRequest](SongUpdateRequest.md) |  | |

### Return type

[**SongResponse**](SongResponse.md)

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


## uploadSongApiV1SongPost

> SongResponse uploadSongApiV1SongPost(file)

Upload Song

### Example

```ts
import {
  Configuration,
  SongApi,
} from 'audio-server';
import type { UploadSongApiV1SongPostRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new SongApi();

  const body = {
    // string
    file: file_example,
  } satisfies UploadSongApiV1SongPostRequest;

  try {
    const data = await api.uploadSongApiV1SongPost(body);
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
| **file** | `string` |  | [Defaults to `undefined`] |

### Return type

[**SongResponse**](SongResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **409** | Conflict! Song already exists. |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

