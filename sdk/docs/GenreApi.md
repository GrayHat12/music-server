# GenreApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createGenreApiV1GenrePost**](GenreApi.md#creategenreapiv1genrepost) | **POST** /api/v1/genre | Create Genre |
| [**deleteGenreApiV1GenreIdDelete**](GenreApi.md#deletegenreapiv1genreiddelete) | **DELETE** /api/v1/genre/{id} | Delete Genre |
| [**getGenreApiV1GenreIdGet**](GenreApi.md#getgenreapiv1genreidget) | **GET** /api/v1/genre/{id} | Get Genre |
| [**getGenresFromAlbumApiV1AlbumIdGenresGet**](GenreApi.md#getgenresfromalbumapiv1albumidgenresget) | **GET** /api/v1/album/{id}/genres | Get Genres From Album |
| [**getGenresFromArtistApiV1ArtistIdGenresGet**](GenreApi.md#getgenresfromartistapiv1artistidgenresget) | **GET** /api/v1/artist/{id}/genres | Get Genres From Artist |
| [**getGenresFromPlaylistApiV1PlaylistIdGenresGet**](GenreApi.md#getgenresfromplaylistapiv1playlistidgenresget) | **GET** /api/v1/playlist/{id}/genres | Get Genres From Playlist |
| [**getSongsFromGenreApiV1GenreIdSongsGet**](GenreApi.md#getsongsfromgenreapiv1genreidsongsget) | **GET** /api/v1/genre/{id}/songs | Get Songs From Genre |
| [**listAllGenresApiV1GenresGet**](GenreApi.md#listallgenresapiv1genresget) | **GET** /api/v1/genres | List All Genres |
| [**updateGenreApiV1GenreIdPatch**](GenreApi.md#updategenreapiv1genreidpatch) | **PATCH** /api/v1/genre/{id} | Update Genre |



## createGenreApiV1GenrePost

> GenreResponse createGenreApiV1GenrePost(genreCreateRequest)

Create Genre

### Example

```ts
import {
  Configuration,
  GenreApi,
} from 'audio-server';
import type { CreateGenreApiV1GenrePostRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new GenreApi();

  const body = {
    // GenreCreateRequest
    genreCreateRequest: ...,
  } satisfies CreateGenreApiV1GenrePostRequest;

  try {
    const data = await api.createGenreApiV1GenrePost(body);
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
| **genreCreateRequest** | [GenreCreateRequest](GenreCreateRequest.md) |  | |

### Return type

[**GenreResponse**](GenreResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **409** | Conflict! Genre already exists. |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteGenreApiV1GenreIdDelete

> DeletedResponse deleteGenreApiV1GenreIdDelete(id)

Delete Genre

### Example

```ts
import {
  Configuration,
  GenreApi,
} from 'audio-server';
import type { DeleteGenreApiV1GenreIdDeleteRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new GenreApi();

  const body = {
    // number
    id: 56,
  } satisfies DeleteGenreApiV1GenreIdDeleteRequest;

  try {
    const data = await api.deleteGenreApiV1GenreIdDelete(body);
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


## getGenreApiV1GenreIdGet

> GenreResponse getGenreApiV1GenreIdGet(id)

Get Genre

### Example

```ts
import {
  Configuration,
  GenreApi,
} from 'audio-server';
import type { GetGenreApiV1GenreIdGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new GenreApi();

  const body = {
    // number
    id: 56,
  } satisfies GetGenreApiV1GenreIdGetRequest;

  try {
    const data = await api.getGenreApiV1GenreIdGet(body);
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

[**GenreResponse**](GenreResponse.md)

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
  GenreApi,
} from 'audio-server';
import type { GetGenresFromAlbumApiV1AlbumIdGenresGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new GenreApi();

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


## getGenresFromArtistApiV1ArtistIdGenresGet

> Array&lt;string&gt; getGenresFromArtistApiV1ArtistIdGenresGet(id)

Get Genres From Artist

### Example

```ts
import {
  Configuration,
  GenreApi,
} from 'audio-server';
import type { GetGenresFromArtistApiV1ArtistIdGenresGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new GenreApi();

  const body = {
    // number
    id: 56,
  } satisfies GetGenresFromArtistApiV1ArtistIdGenresGetRequest;

  try {
    const data = await api.getGenresFromArtistApiV1ArtistIdGenresGet(body);
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


## getGenresFromPlaylistApiV1PlaylistIdGenresGet

> Array&lt;string&gt; getGenresFromPlaylistApiV1PlaylistIdGenresGet(id)

Get Genres From Playlist

### Example

```ts
import {
  Configuration,
  GenreApi,
} from 'audio-server';
import type { GetGenresFromPlaylistApiV1PlaylistIdGenresGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new GenreApi();

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


## getSongsFromGenreApiV1GenreIdSongsGet

> Array&lt;number&gt; getSongsFromGenreApiV1GenreIdSongsGet(id)

Get Songs From Genre

### Example

```ts
import {
  Configuration,
  GenreApi,
} from 'audio-server';
import type { GetSongsFromGenreApiV1GenreIdSongsGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new GenreApi();

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


## listAllGenresApiV1GenresGet

> Array&lt;GenreResponse&gt; listAllGenresApiV1GenresGet()

List All Genres

### Example

```ts
import {
  Configuration,
  GenreApi,
} from 'audio-server';
import type { ListAllGenresApiV1GenresGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new GenreApi();

  try {
    const data = await api.listAllGenresApiV1GenresGet();
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

[**Array&lt;GenreResponse&gt;**](GenreResponse.md)

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


## updateGenreApiV1GenreIdPatch

> GenreResponse updateGenreApiV1GenreIdPatch(id, genreUpdateRequest)

Update Genre

### Example

```ts
import {
  Configuration,
  GenreApi,
} from 'audio-server';
import type { UpdateGenreApiV1GenreIdPatchRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new GenreApi();

  const body = {
    // number
    id: 56,
    // GenreUpdateRequest
    genreUpdateRequest: ...,
  } satisfies UpdateGenreApiV1GenreIdPatchRequest;

  try {
    const data = await api.updateGenreApiV1GenreIdPatch(body);
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
| **genreUpdateRequest** | [GenreUpdateRequest](GenreUpdateRequest.md) |  | |

### Return type

[**GenreResponse**](GenreResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **409** | Conflict! Genre with same name already exists. |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

