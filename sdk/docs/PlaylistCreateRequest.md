
# PlaylistCreateRequest


## Properties

Name | Type
------------ | -------------
`name` | string
`image` | number
`songs` | Array&lt;number&gt;

## Example

```typescript
import type { PlaylistCreateRequest } from 'audio-server'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "image": null,
  "songs": null,
} satisfies PlaylistCreateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlaylistCreateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


