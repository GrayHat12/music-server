# V1Api

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addImageApiV1ImagePost**](V1Api.md#addimageapiv1imagepost) | **POST** /api/v1/image | Add Image |
| [**createAlbumApiV1AlbumPost**](V1Api.md#createalbumapiv1albumpost) | **POST** /api/v1/album | Create Album |
| [**createArtistApiV1ArtistPost**](V1Api.md#createartistapiv1artistpost) | **POST** /api/v1/artist | Create Artist |
| [**createGenreApiV1GenrePost**](V1Api.md#creategenreapiv1genrepost) | **POST** /api/v1/genre | Create Genre |
| [**createPlaylistApiV1PlaylistPost**](V1Api.md#createplaylistapiv1playlistpost) | **POST** /api/v1/playlist | Create Playlist |
| [**deleteAlbumApiV1AlbumIdDelete**](V1Api.md#deletealbumapiv1albumiddelete) | **DELETE** /api/v1/album/{id} | Delete Album |
| [**deleteArtistApiV1ArtistIdDelete**](V1Api.md#deleteartistapiv1artistiddelete) | **DELETE** /api/v1/artist/{id} | Delete Artist |
| [**deleteGenreApiV1GenreIdDelete**](V1Api.md#deletegenreapiv1genreiddelete) | **DELETE** /api/v1/genre/{id} | Delete Genre |
| [**deleteImageApiV1ImageIdDelete**](V1Api.md#deleteimageapiv1imageiddelete) | **DELETE** /api/v1/image/{id} | Delete Image |
| [**deletePlaylistApiV1PlaylistIdDelete**](V1Api.md#deleteplaylistapiv1playlistiddelete) | **DELETE** /api/v1/playlist/{id} | Delete Playlist |
| [**deleteSongApiV1SongIdDelete**](V1Api.md#deletesongapiv1songiddelete) | **DELETE** /api/v1/song/{id} | Delete Song |
| [**getAlbumApiV1AlbumIdGet**](V1Api.md#getalbumapiv1albumidget) | **GET** /api/v1/album/{id} | Get Album |
| [**getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet**](V1Api.md#getalbumsfromplaylistapiv1playlistidalbumsget) | **GET** /api/v1/playlist/{id}/albums | Get Albums From Playlist |
| [**getArtistApiV1ArtistIdGet**](V1Api.md#getartistapiv1artistidget) | **GET** /api/v1/artist/{id} | Get Artist |
| [**getArtistsFromPlaylistApiV1PlaylistIdArtistsGet**](V1Api.md#getartistsfromplaylistapiv1playlistidartistsget) | **GET** /api/v1/playlist/{id}/artists | Get Artists From Playlist |
| [**getCollaborationsFromArtistApiV1ArtistIdCollaborationsGet**](V1Api.md#getcollaborationsfromartistapiv1artistidcollaborationsget) | **GET** /api/v1/artist/{id}/collaborations | Get Collaborations From Artist |
| [**getFeaturesFromAlbumApiV1AlbumIdFeaturesGet**](V1Api.md#getfeaturesfromalbumapiv1albumidfeaturesget) | **GET** /api/v1/album/{id}/features | Get Features From Album |
| [**getFeaturesFromArtistApiV1ArtistIdFeaturesGet**](V1Api.md#getfeaturesfromartistapiv1artistidfeaturesget) | **GET** /api/v1/artist/{id}/features | Get Features From Artist |
| [**getFeaturesFromSongApiV1SongIdFeaturesGet**](V1Api.md#getfeaturesfromsongapiv1songidfeaturesget) | **GET** /api/v1/song/{id}/features | Get Features From Song |
| [**getGenreApiV1GenreIdGet**](V1Api.md#getgenreapiv1genreidget) | **GET** /api/v1/genre/{id} | Get Genre |
| [**getGenresFromAlbumApiV1AlbumIdGenresGet**](V1Api.md#getgenresfromalbumapiv1albumidgenresget) | **GET** /api/v1/album/{id}/genres | Get Genres From Album |
| [**getGenresFromArtistApiV1ArtistIdGenresGet**](V1Api.md#getgenresfromartistapiv1artistidgenresget) | **GET** /api/v1/artist/{id}/genres | Get Genres From Artist |
| [**getGenresFromPlaylistApiV1PlaylistIdGenresGet**](V1Api.md#getgenresfromplaylistapiv1playlistidgenresget) | **GET** /api/v1/playlist/{id}/genres | Get Genres From Playlist |
| [**getImageApiV1ImageIdGet**](V1Api.md#getimageapiv1imageidget) | **GET** /api/v1/image/{id} | Get Image |
| [**getPlaylistApiV1PlaylistIdGet**](V1Api.md#getplaylistapiv1playlistidget) | **GET** /api/v1/playlist/{id} | Get Playlist |
| [**getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet**](V1Api.md#getplaylistssongispartofapiv1songidplaylistsget) | **GET** /api/v1/song/{id}/playlists | Get Playlists Song Is Part Of |
| [**getSongApiV1SongIdGet**](V1Api.md#getsongapiv1songidget) | **GET** /api/v1/song/{id} | Get Song |
| [**getSongsFromAlbumApiV1AlbumIdSongsGet**](V1Api.md#getsongsfromalbumapiv1albumidsongsget) | **GET** /api/v1/album/{id}/songs | Get Songs From Album |
| [**getSongsFromArtistApiV1ArtistIdSongsGet**](V1Api.md#getsongsfromartistapiv1artistidsongsget) | **GET** /api/v1/artist/{id}/songs | Get Songs From Artist |
| [**getSongsFromGenreApiV1GenreIdSongsGet**](V1Api.md#getsongsfromgenreapiv1genreidsongsget) | **GET** /api/v1/genre/{id}/songs | Get Songs From Genre |
| [**getSongsFromPlaylistApiV1PlaylistIdSongsGet**](V1Api.md#getsongsfromplaylistapiv1playlistidsongsget) | **GET** /api/v1/playlist/{id}/songs | Get Songs From Playlist |
| [**listAllAlbumsApiV1AlbumsGet**](V1Api.md#listallalbumsapiv1albumsget) | **GET** /api/v1/albums | List All Albums |
| [**listAllArtistApiV1ArtistsGet**](V1Api.md#listallartistapiv1artistsget) | **GET** /api/v1/artists | List All Artist |
| [**listAllGenresApiV1GenresGet**](V1Api.md#listallgenresapiv1genresget) | **GET** /api/v1/genres | List All Genres |
| [**listAllPlaylistsApiV1PlaylistsGet**](V1Api.md#listallplaylistsapiv1playlistsget) | **GET** /api/v1/playlists | List All Playlists |
| [**listAllSongApiV1SongsGet**](V1Api.md#listallsongapiv1songsget) | **GET** /api/v1/songs | List All Song |
| [**setDatabaseApiV1DbPatch**](V1Api.md#setdatabaseapiv1dbpatch) | **PATCH** /api/v1/db | Set Database |
| [**streamSongApiV1SongIdStreamGet**](V1Api.md#streamsongapiv1songidstreamget) | **GET** /api/v1/song/{id}/stream | Stream Song |
| [**updateAlbumApiV1AlbumIdPatch**](V1Api.md#updatealbumapiv1albumidpatch) | **PATCH** /api/v1/album/{id} | Update Album |
| [**updateArtistApiV1ArtistIdPatch**](V1Api.md#updateartistapiv1artistidpatch) | **PATCH** /api/v1/artist/{id} | Update Artist |
| [**updateGenreApiV1GenreIdPatch**](V1Api.md#updategenreapiv1genreidpatch) | **PATCH** /api/v1/genre/{id} | Update Genre |
| [**updatePlaylistApiV1PlaylistIdPatch**](V1Api.md#updateplaylistapiv1playlistidpatch) | **PATCH** /api/v1/playlist/{id} | Update Playlist |
| [**updateSongApiV1SongIdPatch**](V1Api.md#updatesongapiv1songidpatch) | **PATCH** /api/v1/song/{id} | Update Song |
| [**uploadSongApiV1SongPost**](V1Api.md#uploadsongapiv1songpost) | **POST** /api/v1/song | Upload Song |



## addImageApiV1ImagePost

> number addImageApiV1ImagePost(file)

Add Image

### Example

```ts
import {
  Configuration,
  V1Api,
} from 'audio-server';
import type { AddImageApiV1ImagePostRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

  const body = {
    // string
    file: file_example,
  } satisfies AddImageApiV1ImagePostRequest;

  try {
    const data = await api.addImageApiV1ImagePost(body);
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

**number**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **409** | Conflict! Image already exists. |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createAlbumApiV1AlbumPost

> AlbumResponse createAlbumApiV1AlbumPost(albumCreateRequest)

Create Album

### Example

```ts
import {
  Configuration,
  V1Api,
} from 'audio-server';
import type { CreateAlbumApiV1AlbumPostRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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


## createArtistApiV1ArtistPost

> ArtistResponse createArtistApiV1ArtistPost(artistCreateRequest)

Create Artist

### Example

```ts
import {
  Configuration,
  V1Api,
} from 'audio-server';
import type { CreateArtistApiV1ArtistPostRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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


## createGenreApiV1GenrePost

> GenreResponse createGenreApiV1GenrePost(genreCreateRequest)

Create Genre

### Example

```ts
import {
  Configuration,
  V1Api,
} from 'audio-server';
import type { CreateGenreApiV1GenrePostRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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


## createPlaylistApiV1PlaylistPost

> PlaylistResponse createPlaylistApiV1PlaylistPost(playlistCreateRequest)

Create Playlist

### Example

```ts
import {
  Configuration,
  V1Api,
} from 'audio-server';
import type { CreatePlaylistApiV1PlaylistPostRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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


## deleteAlbumApiV1AlbumIdDelete

> DeletedResponse deleteAlbumApiV1AlbumIdDelete(id)

Delete Album

### Example

```ts
import {
  Configuration,
  V1Api,
} from 'audio-server';
import type { DeleteAlbumApiV1AlbumIdDeleteRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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


## deleteArtistApiV1ArtistIdDelete

> DeletedResponse deleteArtistApiV1ArtistIdDelete(id)

Delete Artist

### Example

```ts
import {
  Configuration,
  V1Api,
} from 'audio-server';
import type { DeleteArtistApiV1ArtistIdDeleteRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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


## deleteGenreApiV1GenreIdDelete

> DeletedResponse deleteGenreApiV1GenreIdDelete(id)

Delete Genre

### Example

```ts
import {
  Configuration,
  V1Api,
} from 'audio-server';
import type { DeleteGenreApiV1GenreIdDeleteRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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


## deleteImageApiV1ImageIdDelete

> DeletedResponse deleteImageApiV1ImageIdDelete(id)

Delete Image

### Example

```ts
import {
  Configuration,
  V1Api,
} from 'audio-server';
import type { DeleteImageApiV1ImageIdDeleteRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

  const body = {
    // number
    id: 56,
  } satisfies DeleteImageApiV1ImageIdDeleteRequest;

  try {
    const data = await api.deleteImageApiV1ImageIdDelete(body);
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


## deletePlaylistApiV1PlaylistIdDelete

> DeletedResponse deletePlaylistApiV1PlaylistIdDelete(id)

Delete Playlist

### Example

```ts
import {
  Configuration,
  V1Api,
} from 'audio-server';
import type { DeletePlaylistApiV1PlaylistIdDeleteRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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


## deleteSongApiV1SongIdDelete

> DeletedResponse deleteSongApiV1SongIdDelete(id)

Delete Song

### Example

```ts
import {
  Configuration,
  V1Api,
} from 'audio-server';
import type { DeleteSongApiV1SongIdDeleteRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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


## getAlbumApiV1AlbumIdGet

> AlbumResponse getAlbumApiV1AlbumIdGet(id)

Get Album

### Example

```ts
import {
  Configuration,
  V1Api,
} from 'audio-server';
import type { GetAlbumApiV1AlbumIdGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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
  V1Api,
} from 'audio-server';
import type { GetAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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


## getArtistApiV1ArtistIdGet

> ArtistResponse getArtistApiV1ArtistIdGet(id)

Get Artist

### Example

```ts
import {
  Configuration,
  V1Api,
} from 'audio-server';
import type { GetArtistApiV1ArtistIdGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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
  V1Api,
} from 'audio-server';
import type { GetArtistsFromPlaylistApiV1PlaylistIdArtistsGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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
  V1Api,
} from 'audio-server';
import type { GetCollaborationsFromArtistApiV1ArtistIdCollaborationsGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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
  V1Api,
} from 'audio-server';
import type { GetFeaturesFromAlbumApiV1AlbumIdFeaturesGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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
  V1Api,
} from 'audio-server';
import type { GetFeaturesFromArtistApiV1ArtistIdFeaturesGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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
  V1Api,
} from 'audio-server';
import type { GetFeaturesFromSongApiV1SongIdFeaturesGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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


## getGenreApiV1GenreIdGet

> GenreResponse getGenreApiV1GenreIdGet(id)

Get Genre

### Example

```ts
import {
  Configuration,
  V1Api,
} from 'audio-server';
import type { GetGenreApiV1GenreIdGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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
  V1Api,
} from 'audio-server';
import type { GetGenresFromAlbumApiV1AlbumIdGenresGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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
  V1Api,
} from 'audio-server';
import type { GetGenresFromArtistApiV1ArtistIdGenresGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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
  V1Api,
} from 'audio-server';
import type { GetGenresFromPlaylistApiV1PlaylistIdGenresGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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


## getImageApiV1ImageIdGet

> getImageApiV1ImageIdGet(id)

Get Image

### Example

```ts
import {
  Configuration,
  V1Api,
} from 'audio-server';
import type { GetImageApiV1ImageIdGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

  const body = {
    // number
    id: 56,
  } satisfies GetImageApiV1ImageIdGetRequest;

  try {
    const data = await api.getImageApiV1ImageIdGet(body);
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


## getPlaylistApiV1PlaylistIdGet

> PlaylistResponse getPlaylistApiV1PlaylistIdGet(id)

Get Playlist

### Example

```ts
import {
  Configuration,
  V1Api,
} from 'audio-server';
import type { GetPlaylistApiV1PlaylistIdGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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
  V1Api,
} from 'audio-server';
import type { GetPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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
  V1Api,
} from 'audio-server';
import type { GetSongApiV1SongIdGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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
  V1Api,
} from 'audio-server';
import type { GetSongsFromAlbumApiV1AlbumIdSongsGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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
  V1Api,
} from 'audio-server';
import type { GetSongsFromArtistApiV1ArtistIdSongsGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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
  V1Api,
} from 'audio-server';
import type { GetSongsFromGenreApiV1GenreIdSongsGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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
  V1Api,
} from 'audio-server';
import type { GetSongsFromPlaylistApiV1PlaylistIdSongsGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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


## listAllAlbumsApiV1AlbumsGet

> Array&lt;AlbumResponse&gt; listAllAlbumsApiV1AlbumsGet()

List All Albums

### Example

```ts
import {
  Configuration,
  V1Api,
} from 'audio-server';
import type { ListAllAlbumsApiV1AlbumsGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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


## listAllArtistApiV1ArtistsGet

> Array&lt;ArtistResponse&gt; listAllArtistApiV1ArtistsGet()

List All Artist

### Example

```ts
import {
  Configuration,
  V1Api,
} from 'audio-server';
import type { ListAllArtistApiV1ArtistsGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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


## listAllGenresApiV1GenresGet

> Array&lt;GenreResponse&gt; listAllGenresApiV1GenresGet()

List All Genres

### Example

```ts
import {
  Configuration,
  V1Api,
} from 'audio-server';
import type { ListAllGenresApiV1GenresGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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


## listAllPlaylistsApiV1PlaylistsGet

> Array&lt;PlaylistResponse&gt; listAllPlaylistsApiV1PlaylistsGet()

List All Playlists

### Example

```ts
import {
  Configuration,
  V1Api,
} from 'audio-server';
import type { ListAllPlaylistsApiV1PlaylistsGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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


## listAllSongApiV1SongsGet

> Array&lt;SongResponse&gt; listAllSongApiV1SongsGet()

List All Song

### Example

```ts
import {
  Configuration,
  V1Api,
} from 'audio-server';
import type { ListAllSongApiV1SongsGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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


## setDatabaseApiV1DbPatch

> boolean setDatabaseApiV1DbPatch(path)

Set Database

### Example

```ts
import {
  Configuration,
  V1Api,
} from 'audio-server';
import type { SetDatabaseApiV1DbPatchRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

  const body = {
    // string
    path: path_example,
  } satisfies SetDatabaseApiV1DbPatchRequest;

  try {
    const data = await api.setDatabaseApiV1DbPatch(body);
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
| **path** | `string` |  | [Defaults to `undefined`] |

### Return type

**boolean**

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


## streamSongApiV1SongIdStreamGet

> streamSongApiV1SongIdStreamGet(id)

Stream Song

### Example

```ts
import {
  Configuration,
  V1Api,
} from 'audio-server';
import type { StreamSongApiV1SongIdStreamGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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


## updateAlbumApiV1AlbumIdPatch

> AlbumResponse updateAlbumApiV1AlbumIdPatch(id, albumUpdateRequest)

Update Album

### Example

```ts
import {
  Configuration,
  V1Api,
} from 'audio-server';
import type { UpdateAlbumApiV1AlbumIdPatchRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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


## updateArtistApiV1ArtistIdPatch

> ArtistResponse updateArtistApiV1ArtistIdPatch(id, artistUpdateRequest)

Update Artist

### Example

```ts
import {
  Configuration,
  V1Api,
} from 'audio-server';
import type { UpdateArtistApiV1ArtistIdPatchRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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


## updateGenreApiV1GenreIdPatch

> GenreResponse updateGenreApiV1GenreIdPatch(id, genreUpdateRequest)

Update Genre

### Example

```ts
import {
  Configuration,
  V1Api,
} from 'audio-server';
import type { UpdateGenreApiV1GenreIdPatchRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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


## updatePlaylistApiV1PlaylistIdPatch

> PlaylistResponse updatePlaylistApiV1PlaylistIdPatch(id, playlistUpdateRequest)

Update Playlist

### Example

```ts
import {
  Configuration,
  V1Api,
} from 'audio-server';
import type { UpdatePlaylistApiV1PlaylistIdPatchRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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


## updateSongApiV1SongIdPatch

> SongResponse updateSongApiV1SongIdPatch(id, songUpdateRequest)

Update Song

### Example

```ts
import {
  Configuration,
  V1Api,
} from 'audio-server';
import type { UpdateSongApiV1SongIdPatchRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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
  V1Api,
} from 'audio-server';
import type { UploadSongApiV1SongPostRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new V1Api();

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

