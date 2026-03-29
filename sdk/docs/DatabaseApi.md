# AudioServer.DatabaseApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**setDatabaseApiV1DbPatch**](DatabaseApi.md#setDatabaseApiV1DbPatch) | **PATCH** /api/v1/db | Set Database



## setDatabaseApiV1DbPatch

> Boolean setDatabaseApiV1DbPatch(path)

Set Database

### Example

```javascript
import AudioServer from 'audio_server';

let apiInstance = new AudioServer.DatabaseApi();
let path = "path_example"; // String | 
apiInstance.setDatabaseApiV1DbPatch(path, (error, data, response) => {
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
 **path** | **String**|  | 

### Return type

**Boolean**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

