
# PlaylistResponse


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`image` | number
`lastUpdated` | Date
`streamCount` | number
`lastStreamed` | Date

## Example

```typescript
import type { PlaylistResponse } from 'audio-server'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "image": null,
  "lastUpdated": null,
  "streamCount": null,
  "lastStreamed": null,
} satisfies PlaylistResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlaylistResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


