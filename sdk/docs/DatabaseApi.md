# DatabaseApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**setDatabaseApiV1DbPatch**](DatabaseApi.md#setdatabaseapiv1dbpatch) | **PATCH** /api/v1/db | Set Database |



## setDatabaseApiV1DbPatch

> boolean setDatabaseApiV1DbPatch(path)

Set Database

### Example

```ts
import {
  Configuration,
  DatabaseApi,
} from 'audio-server';
import type { SetDatabaseApiV1DbPatchRequest } from 'audio-server';

async function example() {
  console.log("🚀 Testing audio-server SDK...");
  const api = new DatabaseApi();

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

