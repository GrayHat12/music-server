# .ImageApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addImageApiV1ImagePost**](ImageApi.md#addImageApiV1ImagePost) | **POST** /api/v1/image | Add Image
[**deleteImageApiV1ImageIdDelete**](ImageApi.md#deleteImageApiV1ImageIdDelete) | **DELETE** /api/v1/image/{id} | Delete Image
[**getImageApiV1ImageIdGet**](ImageApi.md#getImageApiV1ImageIdGet) | **GET** /api/v1/image/{id} | Get Image


# **addImageApiV1ImagePost**
> number addImageApiV1ImagePost()


### Example


```typescript
import { createConfiguration, ImageApi } from '';
import type { ImageApiAddImageApiV1ImagePostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ImageApi(configuration);

const request: ImageApiAddImageApiV1ImagePostRequest = {
  
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

# **deleteImageApiV1ImageIdDelete**
> DeletedResponse deleteImageApiV1ImageIdDelete()


### Example


```typescript
import { createConfiguration, ImageApi } from '';
import type { ImageApiDeleteImageApiV1ImageIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ImageApi(configuration);

const request: ImageApiDeleteImageApiV1ImageIdDeleteRequest = {
  
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

# **getImageApiV1ImageIdGet**
> void getImageApiV1ImageIdGet()


### Example


```typescript
import { createConfiguration, ImageApi } from '';
import type { ImageApiGetImageApiV1ImageIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ImageApi(configuration);

const request: ImageApiGetImageApiV1ImageIdGetRequest = {
  
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


