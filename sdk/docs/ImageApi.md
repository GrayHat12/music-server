# AudioServer.ImageApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addImageApiV1ImagePost**](ImageApi.md#addImageApiV1ImagePost) | **POST** /api/v1/image | Add Image
[**deleteImageApiV1ImageIdDelete**](ImageApi.md#deleteImageApiV1ImageIdDelete) | **DELETE** /api/v1/image/{id} | Delete Image
[**getImageApiV1ImageIdGet**](ImageApi.md#getImageApiV1ImageIdGet) | **GET** /api/v1/image/{id} | Get Image



## addImageApiV1ImagePost

> Number addImageApiV1ImagePost(file)

Add Image

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.ImageApi();
let file = "file_example"; // String | 
apiInstance.addImageApiV1ImagePost(file, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **String**|  | 

### Return type

**Number**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## deleteImageApiV1ImageIdDelete

> DeletedResponse deleteImageApiV1ImageIdDelete(id)

Delete Image

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.ImageApi();
let id = 56; // Number | 
apiInstance.deleteImageApiV1ImageIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**DeletedResponse**](DeletedResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getImageApiV1ImageIdGet

> getImageApiV1ImageIdGet(id)

Get Image

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.ImageApi();
let id = 56; // Number | 
apiInstance.getImageApiV1ImageIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

