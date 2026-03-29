# ImageApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addImageApiV1ImagePost**](ImageApi.md#addimageapiv1imagepost) | **POST** /api/v1/image | Add Image |
| [**deleteImageApiV1ImageIdDelete**](ImageApi.md#deleteimageapiv1imageiddelete) | **DELETE** /api/v1/image/{id} | Delete Image |
| [**getImageApiV1ImageIdGet**](ImageApi.md#getimageapiv1imageidget) | **GET** /api/v1/image/{id} | Get Image |



## addImageApiV1ImagePost

> number addImageApiV1ImagePost(file)

Add Image

### Example

```ts
import {
  Configuration,
  ImageApi,
} from 'audio-server';
import type { AddImageApiV1ImagePostRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new ImageApi();

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


## deleteImageApiV1ImageIdDelete

> DeletedResponse deleteImageApiV1ImageIdDelete(id)

Delete Image

### Example

```ts
import {
  Configuration,
  ImageApi,
} from 'audio-server';
import type { DeleteImageApiV1ImageIdDeleteRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new ImageApi();

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


## getImageApiV1ImageIdGet

> getImageApiV1ImageIdGet(id)

Get Image

### Example

```ts
import {
  Configuration,
  ImageApi,
} from 'audio-server';
import type { GetImageApiV1ImageIdGetRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new ImageApi();

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

