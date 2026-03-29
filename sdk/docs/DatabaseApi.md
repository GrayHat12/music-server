# .DatabaseApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**setDatabaseApiV1DbPatch**](DatabaseApi.md#setDatabaseApiV1DbPatch) | **PATCH** /api/v1/db | Set Database


# **setDatabaseApiV1DbPatch**
> boolean setDatabaseApiV1DbPatch()


### Example


```typescript
import { createConfiguration, DatabaseApi } from '';
import type { DatabaseApiSetDatabaseApiV1DbPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DatabaseApi(configuration);

const request: DatabaseApiSetDatabaseApiV1DbPatchRequest = {
  
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


