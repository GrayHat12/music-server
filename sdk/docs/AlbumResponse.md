
# AlbumResponse


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`image` | number
`lastUpdated` | Date
`artist` | number
`streamCount` | number
`lastStreamed` | Date

## Example

```typescript
import type { AlbumResponse } from 'audio-server'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "image": null,
  "lastUpdated": null,
  "artist": null,
  "streamCount": null,
  "lastStreamed": null,
} satisfies AlbumResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AlbumResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


