# ArtistApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createArtistApiV1ArtistPost**](ArtistApi.md#createartistapiv1artistpost) | **POST** /api/v1/artist | Create Artist |
| [**deleteArtistApiV1ArtistIdDelete**](ArtistApi.md#deleteartistapiv1artistiddelete) | **DELETE** /api/v1/artist/{id} | Delete Artist |
| [**getArtistApiV1ArtistIdGet**](ArtistApi.md#getartistapiv1artistidget) | **GET** /api/v1/artist/{id} | Get Artist |
| [**getArtistsFromPlaylistApiV1PlaylistIdArtistsGet**](ArtistApi.md#getartistsfromplaylistapiv1playlistidartistsget) | **GET** /api/v1/playlist/{id}/artists | Get Artists From Playlist |
| [**getCollaborationsFromArtistApiV1ArtistIdCollaborationsGet**](ArtistApi.md#getcollaborationsfromartistapiv1artistidcollaborationsget) | **GET** /api/v1/artist/{id}/collaborations | Get Collaborations From Artist |
| [**getFeaturesFromAlbumApiV1AlbumIdFeaturesGet**](ArtistApi.md#getfeaturesfromalbumapiv1albumidfeaturesget) | **GET** /api/v1/album/{id}/features | Get Features From Album |
| [**getFeaturesFromArtistApiV1ArtistIdFeaturesGet**](ArtistApi.md#getfeaturesfromartistapiv1artistidfeaturesget) | **GET** /api/v1/artist/{id}/features | Get Features From Artist |
| [**getFeaturesFromSongApiV1SongIdFeaturesGet**](ArtistApi.md#getfeaturesfromsongapiv1songidfeaturesget) | **GET** /api/v1/song/{id}/features | Get Features From Song |
| [**getGenresFromArtistApiV1ArtistIdGenresGet**](ArtistApi.md#getgenresfromartistapiv1artistidgenresget) | **GET** /api/v1/artist/{id}/genres | Get Genres From Artist |
| [**getSongsFromArtistApiV1ArtistIdSongsGet**](ArtistApi.md#getsongsfromartistapiv1artistidsongsget) | **GET** /api/v1/artist/{id}/songs | Get Songs From Artist |
| [**listAllArtistApiV1ArtistsGet**](ArtistApi.md#listallartistapiv1artistsget) | **GET** /api/v1/artists | List All Artist |
| [**updateArtistApiV1ArtistIdPatch**](ArtistApi.md#updateartistapiv1artistidpatch) | **PATCH** /api/v1/artist/{id} | Update Artist |



## createArtistApiV1ArtistPost

> ArtistResponse createArtistApiV1ArtistPost(artistCreateRequest)

Create Artist

### Example

```ts
import {
  Configuration,
  ArtistApi,
} from 'audio-server';
import type { CreateArtistApiV1ArtistPostRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new ArtistApi();

  const body = {
    // ArtistCreateRequest
    artistCreateRequest: ...,
  } satisfies CreateArtistApiV1ArtistPostRequest;

  try {
    const data = await api.createArtistApiV1ArtistPost(body);
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
| **artistCreateRequest** | [ArtistCreateRequest](ArtistCreateRequest.md) |  | |

### Return type

[**ArtistResponse**](ArtistResponse.md)

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


## deleteArtistApiV1ArtistIdDelete

> DeletedResponse deleteArtistApiV1ArtistIdDelete(id)

Delete Artist

### Example

```ts
import {
  Configuration,
  ArtistApi,
} from 'audio-server';
import type { DeleteArtistApiV1ArtistIdDeleteRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new ArtistApi();

  const body = {
    // number
    id: 56,
  } satisfies DeleteArtistApiV1ArtistIdDeleteRequest;

  try {
    const data = await api.deleteArtistApiV1ArtistIdDelete(body);
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


## getArtistApiV1ArtistIdGet

> ArtistResponse getArtistApiV1ArtistIdGet(id)

Get Artist

### Example

```ts
import {
  Configuration,
  ArtistApi,
} from 'audio-server';
import type { GetArtistApiV1ArtistIdGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new ArtistApi();

  const body = {
    // number
    id: 56,
  } satisfies GetArtistApiV1ArtistIdGetRequest;

  try {
    const data = await api.getArtistApiV1ArtistIdGet(body);
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

[**ArtistResponse**](ArtistResponse.md)

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
  ArtistApi,
} from 'audio-server';
import type { GetArtistsFromPlaylistApiV1PlaylistIdArtistsGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new ArtistApi();

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


## getCollaborationsFromArtistApiV1ArtistIdCollaborationsGet

> Array&lt;number&gt; getCollaborationsFromArtistApiV1ArtistIdCollaborationsGet(id)

Get Collaborations From Artist

### Example

```ts
import {
  Configuration,
  ArtistApi,
} from 'audio-server';
import type { GetCollaborationsFromArtistApiV1ArtistIdCollaborationsGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new ArtistApi();

  const body = {
    // number
    id: 56,
  } satisfies GetCollaborationsFromArtistApiV1ArtistIdCollaborationsGetRequest;

  try {
    const data = await api.getCollaborationsFromArtistApiV1ArtistIdCollaborationsGet(body);
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
  ArtistApi,
} from 'audio-server';
import type { GetFeaturesFromAlbumApiV1AlbumIdFeaturesGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new ArtistApi();

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


## getFeaturesFromArtistApiV1ArtistIdFeaturesGet

> Array&lt;number&gt; getFeaturesFromArtistApiV1ArtistIdFeaturesGet(id)

Get Features From Artist

### Example

```ts
import {
  Configuration,
  ArtistApi,
} from 'audio-server';
import type { GetFeaturesFromArtistApiV1ArtistIdFeaturesGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new ArtistApi();

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
  ArtistApi,
} from 'audio-server';
import type { GetFeaturesFromSongApiV1SongIdFeaturesGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new ArtistApi();

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


## getGenresFromArtistApiV1ArtistIdGenresGet

> Array&lt;string&gt; getGenresFromArtistApiV1ArtistIdGenresGet(id)

Get Genres From Artist

### Example

```ts
import {
  Configuration,
  ArtistApi,
} from 'audio-server';
import type { GetGenresFromArtistApiV1ArtistIdGenresGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new ArtistApi();

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


## getSongsFromArtistApiV1ArtistIdSongsGet

> Array&lt;number&gt; getSongsFromArtistApiV1ArtistIdSongsGet(id)

Get Songs From Artist

### Example

```ts
import {
  Configuration,
  ArtistApi,
} from 'audio-server';
import type { GetSongsFromArtistApiV1ArtistIdSongsGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new ArtistApi();

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


## listAllArtistApiV1ArtistsGet

> Array&lt;ArtistResponse&gt; listAllArtistApiV1ArtistsGet()

List All Artist

### Example

```ts
import {
  Configuration,
  ArtistApi,
} from 'audio-server';
import type { ListAllArtistApiV1ArtistsGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new ArtistApi();

  try {
    const data = await api.listAllArtistApiV1ArtistsGet();
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

[**Array&lt;ArtistResponse&gt;**](ArtistResponse.md)

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


## updateArtistApiV1ArtistIdPatch

> ArtistResponse updateArtistApiV1ArtistIdPatch(id, artistUpdateRequest)

Update Artist

### Example

```ts
import {
  Configuration,
  ArtistApi,
} from 'audio-server';
import type { UpdateArtistApiV1ArtistIdPatchRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new ArtistApi();

  const body = {
    // number
    id: 56,
    // ArtistUpdateRequest
    artistUpdateRequest: ...,
  } satisfies UpdateArtistApiV1ArtistIdPatchRequest;

  try {
    const data = await api.updateArtistApiV1ArtistIdPatch(body);
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
| **artistUpdateRequest** | [ArtistUpdateRequest](ArtistUpdateRequest.md) |  | |

### Return type

[**ArtistResponse**](ArtistResponse.md)

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

