
# SongUpdateRequest


## Properties

Name | Type
------------ | -------------
`genre` | string
`artist` | number
`album` | number
`cover` | number
`title` | string
`release` | number
`trackno` | number
`metatags` | string

## Example

```typescript
import type { SongUpdateRequest } from 'audio-server'

// TODO: Update the object below with actual values
const example = {
  "genre": null,
  "artist": null,
  "album": null,
  "cover": null,
  "title": null,
  "release": null,
  "trackno": null,
  "metatags": null,
} satisfies SongUpdateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SongUpdateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


