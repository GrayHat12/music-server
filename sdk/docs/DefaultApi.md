# AudioServer.DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**albumsUiAlbumsGet**](DefaultApi.md#albumsUiAlbumsGet) | **GET** /ui/albums | Albums
[**artistsUiArtistsGet**](DefaultApi.md#artistsUiArtistsGet) | **GET** /ui/artists | Artists
[**playlistsUiPlaylistsGet**](DefaultApi.md#playlistsUiPlaylistsGet) | **GET** /ui/playlists | Playlists



## albumsUiAlbumsGet

> String albumsUiAlbumsGet()

Albums

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.DefaultApi();
apiInstance.albumsUiAlbumsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/html


## artistsUiArtistsGet

> String artistsUiArtistsGet()

Artists

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.DefaultApi();
apiInstance.artistsUiArtistsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/html


## playlistsUiPlaylistsGet

> String playlistsUiPlaylistsGet()

Playlists

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.DefaultApi();
apiInstance.playlistsUiPlaylistsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/html

