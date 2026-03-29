
# AlbumCreateRequest


## Properties

Name | Type
------------ | -------------
`name` | string
`image` | number
`artist` | number

## Example

```typescript
import type { AlbumCreateRequest } from 'audio-server'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "image": null,
  "artist": null,
} satisfies AlbumCreateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AlbumCreateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


