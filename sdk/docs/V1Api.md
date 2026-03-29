# .V1Api

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addImageApiV1ImagePost**](V1Api.md#addImageApiV1ImagePost) | **POST** /api/v1/image | Add Image
[**createAlbumApiV1AlbumPost**](V1Api.md#createAlbumApiV1AlbumPost) | **POST** /api/v1/album | Create Album
[**createArtistApiV1ArtistPost**](V1Api.md#createArtistApiV1ArtistPost) | **POST** /api/v1/artist | Create Artist
[**createGenreApiV1GenrePost**](V1Api.md#createGenreApiV1GenrePost) | **POST** /api/v1/genre | Create Genre
[**createPlaylistApiV1PlaylistPost**](V1Api.md#createPlaylistApiV1PlaylistPost) | **POST** /api/v1/playlist | Create Playlist
[**deleteAlbumApiV1AlbumIdDelete**](V1Api.md#deleteAlbumApiV1AlbumIdDelete) | **DELETE** /api/v1/album/{id} | Delete Album
[**deleteArtistApiV1ArtistIdDelete**](V1Api.md#deleteArtistApiV1ArtistIdDelete) | **DELETE** /api/v1/artist/{id} | Delete Artist
[**deleteGenreApiV1GenreIdDelete**](V1Api.md#deleteGenreApiV1GenreIdDelete) | **DELETE** /api/v1/genre/{id} | Delete Genre
[**deleteImageApiV1ImageIdDelete**](V1Api.md#deleteImageApiV1ImageIdDelete) | **DELETE** /api/v1/image/{id} | Delete Image
[**deletePlaylistApiV1PlaylistIdDelete**](V1Api.md#deletePlaylistApiV1PlaylistIdDelete) | **DELETE** /api/v1/playlist/{id} | Delete Playlist
[**deleteSongApiV1SongIdDelete**](V1Api.md#deleteSongApiV1SongIdDelete) | **DELETE** /api/v1/song/{id} | Delete Song
[**getAlbumApiV1AlbumIdGet**](V1Api.md#getAlbumApiV1AlbumIdGet) | **GET** /api/v1/album/{id} | Get Album
[**getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet**](V1Api.md#getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet) | **GET** /api/v1/playlist/{id}/albums | Get Albums From Playlist
[**getArtistApiV1ArtistIdGet**](V1Api.md#getArtistApiV1ArtistIdGet) | **GET** /api/v1/artist/{id} | Get Artist
[**getArtistsFromPlaylistApiV1PlaylistIdArtistsGet**](V1Api.md#getArtistsFromPlaylistApiV1PlaylistIdArtistsGet) | **GET** /api/v1/playlist/{id}/artists | Get Artists From Playlist
[**getCollaborationsFromArtistApiV1ArtistIdCollaborationsGet**](V1Api.md#getCollaborationsFromArtistApiV1ArtistIdCollaborationsGet) | **GET** /api/v1/artist/{id}/collaborations | Get Collaborations From Artist
[**getFeaturesFromAlbumApiV1AlbumIdFeaturesGet**](V1Api.md#getFeaturesFromAlbumApiV1AlbumIdFeaturesGet) | **GET** /api/v1/album/{id}/features | Get Features From Album
[**getFeaturesFromArtistApiV1ArtistIdFeaturesGet**](V1Api.md#getFeaturesFromArtistApiV1ArtistIdFeaturesGet) | **GET** /api/v1/artist/{id}/features | Get Features From Artist
[**getFeaturesFromSongApiV1SongIdFeaturesGet**](V1Api.md#getFeaturesFromSongApiV1SongIdFeaturesGet) | **GET** /api/v1/song/{id}/features | Get Features From Song
[**getGenreApiV1GenreIdGet**](V1Api.md#getGenreApiV1GenreIdGet) | **GET** /api/v1/genre/{id} | Get Genre
[**getGenresFromAlbumApiV1AlbumIdGenresGet**](V1Api.md#getGenresFromAlbumApiV1AlbumIdGenresGet) | **GET** /api/v1/album/{id}/genres | Get Genres From Album
[**getGenresFromArtistApiV1ArtistIdGenresGet**](V1Api.md#getGenresFromArtistApiV1ArtistIdGenresGet) | **GET** /api/v1/artist/{id}/genres | Get Genres From Artist
[**getGenresFromPlaylistApiV1PlaylistIdGenresGet**](V1Api.md#getGenresFromPlaylistApiV1PlaylistIdGenresGet) | **GET** /api/v1/playlist/{id}/genres | Get Genres From Playlist
[**getImageApiV1ImageIdGet**](V1Api.md#getImageApiV1ImageIdGet) | **GET** /api/v1/image/{id} | Get Image
[**getPlaylistApiV1PlaylistIdGet**](V1Api.md#getPlaylistApiV1PlaylistIdGet) | **GET** /api/v1/playlist/{id} | Get Playlist
[**getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet**](V1Api.md#getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet) | **GET** /api/v1/song/{id}/playlists | Get Playlists Song Is Part Of
[**getSongApiV1SongIdGet**](V1Api.md#getSongApiV1SongIdGet) | **GET** /api/v1/song/{id} | Get Song
[**getSongsFromAlbumApiV1AlbumIdSongsGet**](V1Api.md#getSongsFromAlbumApiV1AlbumIdSongsGet) | **GET** /api/v1/album/{id}/songs | Get Songs From Album
[**getSongsFromArtistApiV1ArtistIdSongsGet**](V1Api.md#getSongsFromArtistApiV1ArtistIdSongsGet) | **GET** /api/v1/artist/{id}/songs | Get Songs From Artist
[**getSongsFromGenreApiV1GenreIdSongsGet**](V1Api.md#getSongsFromGenreApiV1GenreIdSongsGet) | **GET** /api/v1/genre/{id}/songs | Get Songs From Genre
[**getSongsFromPlaylistApiV1PlaylistIdSongsGet**](V1Api.md#getSongsFromPlaylistApiV1PlaylistIdSongsGet) | **GET** /api/v1/playlist/{id}/songs | Get Songs From Playlist
[**listAllAlbumsApiV1AlbumsGet**](V1Api.md#listAllAlbumsApiV1AlbumsGet) | **GET** /api/v1/albums | List All Albums
[**listAllArtistApiV1ArtistsGet**](V1Api.md#listAllArtistApiV1ArtistsGet) | **GET** /api/v1/artists | List All Artist
[**listAllGenresApiV1GenresGet**](V1Api.md#listAllGenresApiV1GenresGet) | **GET** /api/v1/genres | List All Genres
[**listAllPlaylistsApiV1PlaylistsGet**](V1Api.md#listAllPlaylistsApiV1PlaylistsGet) | **GET** /api/v1/playlists | List All Playlists
[**listAllSongApiV1SongsGet**](V1Api.md#listAllSongApiV1SongsGet) | **GET** /api/v1/songs | List All Song
[**setDatabaseApiV1DbPatch**](V1Api.md#setDatabaseApiV1DbPatch) | **PATCH** /api/v1/db | Set Database
[**streamSongApiV1SongIdStreamGet**](V1Api.md#streamSongApiV1SongIdStreamGet) | **GET** /api/v1/song/{id}/stream | Stream Song
[**updateAlbumApiV1AlbumIdPatch**](V1Api.md#updateAlbumApiV1AlbumIdPatch) | **PATCH** /api/v1/album/{id} | Update Album
[**updateArtistApiV1ArtistIdPatch**](V1Api.md#updateArtistApiV1ArtistIdPatch) | **PATCH** /api/v1/artist/{id} | Update Artist
[**updateGenreApiV1GenreIdPatch**](V1Api.md#updateGenreApiV1GenreIdPatch) | **PATCH** /api/v1/genre/{id} | Update Genre
[**updatePlaylistApiV1PlaylistIdPatch**](V1Api.md#updatePlaylistApiV1PlaylistIdPatch) | **PATCH** /api/v1/playlist/{id} | Update Playlist
[**updateSongApiV1SongIdPatch**](V1Api.md#updateSongApiV1SongIdPatch) | **PATCH** /api/v1/song/{id} | Update Song
[**uploadSongApiV1SongPost**](V1Api.md#uploadSongApiV1SongPost) | **POST** /api/v1/song | Upload Song


# **addImageApiV1ImagePost**
> number addImageApiV1ImagePost()


### Example


```typescript
import { createConfiguration, V1Api } from '';
import type { V1ApiAddImageApiV1ImagePostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiAddImageApiV1ImagePostRequest = {
  
  file: "file_example",
};

const data = await apiInstance.addImageApiV1ImagePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | [**string**] |  | defaults to undefined


### Return type

**number**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**409** | Conflict! Image already exists. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createAlbumApiV1AlbumPost**
> AlbumResponse createAlbumApiV1AlbumPost(albumCreateRequest)


### Example


```typescript
import { createConfiguration, V1Api } from '';
import type { V1ApiCreateAlbumApiV1AlbumPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiCreateAlbumApiV1AlbumPostRequest = {
  
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

# **createArtistApiV1ArtistPost**
> ArtistResponse createArtistApiV1ArtistPost(artistCreateRequest)


### Example


```typescript
import { createConfiguration, V1Api } from '';
import type { V1ApiCreateArtistApiV1ArtistPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiCreateArtistApiV1ArtistPostRequest = {
  
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

# **createGenreApiV1GenrePost**
> GenreResponse createGenreApiV1GenrePost(genreCreateRequest)


### Example


```typescript
import { createConfiguration, V1Api } from '';
import type { V1ApiCreateGenreApiV1GenrePostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiCreateGenreApiV1GenrePostRequest = {
  
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

# **createPlaylistApiV1PlaylistPost**
> PlaylistResponse createPlaylistApiV1PlaylistPost(playlistCreateRequest)


### Example


```typescript
import { createConfiguration, V1Api } from '';
import type { V1ApiCreatePlaylistApiV1PlaylistPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiCreatePlaylistApiV1PlaylistPostRequest = {
  
  playlistCreateRequest: {
    name: "name_example",
    image: 1,
    songs: [
      1,
    ],
  },
};

const data = await apiInstance.createPlaylistApiV1PlaylistPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playlistCreateRequest** | **PlaylistCreateRequest**|  |


### Return type

**PlaylistResponse**

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

# **deleteAlbumApiV1AlbumIdDelete**
> DeletedResponse deleteAlbumApiV1AlbumIdDelete()


### Example


```typescript
import { createConfiguration, V1Api } from '';
import type { V1ApiDeleteAlbumApiV1AlbumIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiDeleteAlbumApiV1AlbumIdDeleteRequest = {
  
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

# **deleteArtistApiV1ArtistIdDelete**
> DeletedResponse deleteArtistApiV1ArtistIdDelete()


### Example


```typescript
import { createConfiguration, V1Api } from '';
import type { V1ApiDeleteArtistApiV1ArtistIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiDeleteArtistApiV1ArtistIdDeleteRequest = {
  
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

# **deleteGenreApiV1GenreIdDelete**
> DeletedResponse deleteGenreApiV1GenreIdDelete()


### Example


```typescript
import { createConfiguration, V1Api } from '';
import type { V1ApiDeleteGenreApiV1GenreIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiDeleteGenreApiV1GenreIdDeleteRequest = {
  
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

# **deleteImageApiV1ImageIdDelete**
> DeletedResponse deleteImageApiV1ImageIdDelete()


### Example


```typescript
import { createConfiguration, V1Api } from '';
import type { V1ApiDeleteImageApiV1ImageIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiDeleteImageApiV1ImageIdDeleteRequest = {
  
  id: 1,
};

const data = await apiInstance.deleteImageApiV1ImageIdDelete(request);
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

# **deletePlaylistApiV1PlaylistIdDelete**
> DeletedResponse deletePlaylistApiV1PlaylistIdDelete()


### Example


```typescript
import { createConfiguration, V1Api } from '';
import type { V1ApiDeletePlaylistApiV1PlaylistIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiDeletePlaylistApiV1PlaylistIdDeleteRequest = {
  
  id: 1,
};

const data = await apiInstance.deletePlaylistApiV1PlaylistIdDelete(request);
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

# **deleteSongApiV1SongIdDelete**
> DeletedResponse deleteSongApiV1SongIdDelete()


### Example


```typescript
import { createConfiguration, V1Api } from '';
import type { V1ApiDeleteSongApiV1SongIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiDeleteSongApiV1SongIdDeleteRequest = {
  
  id: 1,
};

const data = await apiInstance.deleteSongApiV1SongIdDelete(request);
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
import { createConfiguration, V1Api } from '';
import type { V1ApiGetAlbumApiV1AlbumIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiGetAlbumApiV1AlbumIdGetRequest = {
  
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
import { createConfiguration, V1Api } from '';
import type { V1ApiGetAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiGetAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetRequest = {
  
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

# **getArtistApiV1ArtistIdGet**
> ArtistResponse getArtistApiV1ArtistIdGet()


### Example


```typescript
import { createConfiguration, V1Api } from '';
import type { V1ApiGetArtistApiV1ArtistIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiGetArtistApiV1ArtistIdGetRequest = {
  
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
import { createConfiguration, V1Api } from '';
import type { V1ApiGetArtistsFromPlaylistApiV1PlaylistIdArtistsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiGetArtistsFromPlaylistApiV1PlaylistIdArtistsGetRequest = {
  
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
import { createConfiguration, V1Api } from '';
import type { V1ApiGetCollaborationsFromArtistApiV1ArtistIdCollaborationsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiGetCollaborationsFromArtistApiV1ArtistIdCollaborationsGetRequest = {
  
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
import { createConfiguration, V1Api } from '';
import type { V1ApiGetFeaturesFromAlbumApiV1AlbumIdFeaturesGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiGetFeaturesFromAlbumApiV1AlbumIdFeaturesGetRequest = {
  
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
import { createConfiguration, V1Api } from '';
import type { V1ApiGetFeaturesFromArtistApiV1ArtistIdFeaturesGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiGetFeaturesFromArtistApiV1ArtistIdFeaturesGetRequest = {
  
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
import { createConfiguration, V1Api } from '';
import type { V1ApiGetFeaturesFromSongApiV1SongIdFeaturesGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiGetFeaturesFromSongApiV1SongIdFeaturesGetRequest = {
  
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

# **getGenreApiV1GenreIdGet**
> GenreResponse getGenreApiV1GenreIdGet()


### Example


```typescript
import { createConfiguration, V1Api } from '';
import type { V1ApiGetGenreApiV1GenreIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiGetGenreApiV1GenreIdGetRequest = {
  
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
import { createConfiguration, V1Api } from '';
import type { V1ApiGetGenresFromAlbumApiV1AlbumIdGenresGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiGetGenresFromAlbumApiV1AlbumIdGenresGetRequest = {
  
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
import { createConfiguration, V1Api } from '';
import type { V1ApiGetGenresFromArtistApiV1ArtistIdGenresGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiGetGenresFromArtistApiV1ArtistIdGenresGetRequest = {
  
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
import { createConfiguration, V1Api } from '';
import type { V1ApiGetGenresFromPlaylistApiV1PlaylistIdGenresGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiGetGenresFromPlaylistApiV1PlaylistIdGenresGetRequest = {
  
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

# **getImageApiV1ImageIdGet**
> void getImageApiV1ImageIdGet()


### Example


```typescript
import { createConfiguration, V1Api } from '';
import type { V1ApiGetImageApiV1ImageIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiGetImageApiV1ImageIdGetRequest = {
  
  id: 1,
};

const data = await apiInstance.getImageApiV1ImageIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**void**

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

# **getPlaylistApiV1PlaylistIdGet**
> PlaylistResponse getPlaylistApiV1PlaylistIdGet()


### Example


```typescript
import { createConfiguration, V1Api } from '';
import type { V1ApiGetPlaylistApiV1PlaylistIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiGetPlaylistApiV1PlaylistIdGetRequest = {
  
  id: 1,
};

const data = await apiInstance.getPlaylistApiV1PlaylistIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**PlaylistResponse**

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

# **getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet**
> Array<number> getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet()


### Example


```typescript
import { createConfiguration, V1Api } from '';
import type { V1ApiGetPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiGetPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetRequest = {
  
  id: 1,
};

const data = await apiInstance.getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet(request);
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

# **getSongApiV1SongIdGet**
> SongResponse getSongApiV1SongIdGet()


### Example


```typescript
import { createConfiguration, V1Api } from '';
import type { V1ApiGetSongApiV1SongIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiGetSongApiV1SongIdGetRequest = {
  
  id: 1,
};

const data = await apiInstance.getSongApiV1SongIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**SongResponse**

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
import { createConfiguration, V1Api } from '';
import type { V1ApiGetSongsFromAlbumApiV1AlbumIdSongsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiGetSongsFromAlbumApiV1AlbumIdSongsGetRequest = {
  
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

# **getSongsFromArtistApiV1ArtistIdSongsGet**
> Array<number> getSongsFromArtistApiV1ArtistIdSongsGet()


### Example


```typescript
import { createConfiguration, V1Api } from '';
import type { V1ApiGetSongsFromArtistApiV1ArtistIdSongsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiGetSongsFromArtistApiV1ArtistIdSongsGetRequest = {
  
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

# **getSongsFromGenreApiV1GenreIdSongsGet**
> Array<number> getSongsFromGenreApiV1GenreIdSongsGet()


### Example


```typescript
import { createConfiguration, V1Api } from '';
import type { V1ApiGetSongsFromGenreApiV1GenreIdSongsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiGetSongsFromGenreApiV1GenreIdSongsGetRequest = {
  
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

# **getSongsFromPlaylistApiV1PlaylistIdSongsGet**
> Array<number> getSongsFromPlaylistApiV1PlaylistIdSongsGet()


### Example


```typescript
import { createConfiguration, V1Api } from '';
import type { V1ApiGetSongsFromPlaylistApiV1PlaylistIdSongsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiGetSongsFromPlaylistApiV1PlaylistIdSongsGetRequest = {
  
  id: 1,
};

const data = await apiInstance.getSongsFromPlaylistApiV1PlaylistIdSongsGet(request);
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
import { createConfiguration, V1Api } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

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

# **listAllArtistApiV1ArtistsGet**
> Array<ArtistResponse> listAllArtistApiV1ArtistsGet()


### Example


```typescript
import { createConfiguration, V1Api } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

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

# **listAllGenresApiV1GenresGet**
> Array<GenreResponse> listAllGenresApiV1GenresGet()


### Example


```typescript
import { createConfiguration, V1Api } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

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

# **listAllPlaylistsApiV1PlaylistsGet**
> Array<PlaylistResponse> listAllPlaylistsApiV1PlaylistsGet()


### Example


```typescript
import { createConfiguration, V1Api } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request = {};

const data = await apiInstance.listAllPlaylistsApiV1PlaylistsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<PlaylistResponse>**

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

# **listAllSongApiV1SongsGet**
> Array<SongResponse> listAllSongApiV1SongsGet()


### Example


```typescript
import { createConfiguration, V1Api } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request = {};

const data = await apiInstance.listAllSongApiV1SongsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<SongResponse>**

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

# **setDatabaseApiV1DbPatch**
> boolean setDatabaseApiV1DbPatch()


### Example


```typescript
import { createConfiguration, V1Api } from '';
import type { V1ApiSetDatabaseApiV1DbPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiSetDatabaseApiV1DbPatchRequest = {
  
  path: "path_example",
};

const data = await apiInstance.setDatabaseApiV1DbPatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | [**string**] |  | defaults to undefined


### Return type

**boolean**

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

# **streamSongApiV1SongIdStreamGet**
> void streamSongApiV1SongIdStreamGet()


### Example


```typescript
import { createConfiguration, V1Api } from '';
import type { V1ApiStreamSongApiV1SongIdStreamGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiStreamSongApiV1SongIdStreamGetRequest = {
  
  id: 1,
};

const data = await apiInstance.streamSongApiV1SongIdStreamGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**void**

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

# **updateAlbumApiV1AlbumIdPatch**
> AlbumResponse updateAlbumApiV1AlbumIdPatch(albumUpdateRequest)


### Example


```typescript
import { createConfiguration, V1Api } from '';
import type { V1ApiUpdateAlbumApiV1AlbumIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiUpdateAlbumApiV1AlbumIdPatchRequest = {
  
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

# **updateArtistApiV1ArtistIdPatch**
> ArtistResponse updateArtistApiV1ArtistIdPatch(artistUpdateRequest)


### Example


```typescript
import { createConfiguration, V1Api } from '';
import type { V1ApiUpdateArtistApiV1ArtistIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiUpdateArtistApiV1ArtistIdPatchRequest = {
  
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

# **updateGenreApiV1GenreIdPatch**
> GenreResponse updateGenreApiV1GenreIdPatch(genreUpdateRequest)


### Example


```typescript
import { createConfiguration, V1Api } from '';
import type { V1ApiUpdateGenreApiV1GenreIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiUpdateGenreApiV1GenreIdPatchRequest = {
  
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

# **updatePlaylistApiV1PlaylistIdPatch**
> PlaylistResponse updatePlaylistApiV1PlaylistIdPatch(playlistUpdateRequest)


### Example


```typescript
import { createConfiguration, V1Api } from '';
import type { V1ApiUpdatePlaylistApiV1PlaylistIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiUpdatePlaylistApiV1PlaylistIdPatchRequest = {
  
  id: 1,
  
  playlistUpdateRequest: {
    name: "name_example",
    image: 1,
  },
};

const data = await apiInstance.updatePlaylistApiV1PlaylistIdPatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playlistUpdateRequest** | **PlaylistUpdateRequest**|  |
 **id** | [**number**] |  | defaults to undefined


### Return type

**PlaylistResponse**

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

# **updateSongApiV1SongIdPatch**
> SongResponse updateSongApiV1SongIdPatch(songUpdateRequest)


### Example


```typescript
import { createConfiguration, V1Api } from '';
import type { V1ApiUpdateSongApiV1SongIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiUpdateSongApiV1SongIdPatchRequest = {
  
  id: 1,
  
  songUpdateRequest: {
    genre: "genre_example",
    artist: 1,
    album: 1,
    cover: 1,
    title: "title_example",
    release: 1,
    trackno: 1.0,
    metatags: "metatags_example",
  },
};

const data = await apiInstance.updateSongApiV1SongIdPatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **songUpdateRequest** | **SongUpdateRequest**|  |
 **id** | [**number**] |  | defaults to undefined


### Return type

**SongResponse**

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

# **uploadSongApiV1SongPost**
> SongResponse uploadSongApiV1SongPost()


### Example


```typescript
import { createConfiguration, V1Api } from '';
import type { V1ApiUploadSongApiV1SongPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new V1Api(configuration);

const request: V1ApiUploadSongApiV1SongPostRequest = {
  
  file: "file_example",
};

const data = await apiInstance.uploadSongApiV1SongPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | [**string**] |  | defaults to undefined


### Return type

**SongResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**409** | Conflict! Song already exists. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


