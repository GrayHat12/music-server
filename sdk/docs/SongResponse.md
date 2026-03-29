
# SongResponse


## Properties

Name | Type
------------ | -------------
`id` | number
`title` | string
`release` | number
`trackno` | number
`metatags` | { [key: string]: any; }
`lastUpdated` | Date
`genre` | string
`artist` | number
`album` | number
`cover` | number
`streamCount` | number
`lastStreamed` | Date

## Example

```typescript
import type { SongResponse } from 'audio-server'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "title": null,
  "release": null,
  "trackno": null,
  "metatags": null,
  "lastUpdated": null,
  "genre": null,
  "artist": null,
  "album": null,
  "cover": null,
  "streamCount": null,
  "lastStreamed": null,
} satisfies SongResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SongResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


