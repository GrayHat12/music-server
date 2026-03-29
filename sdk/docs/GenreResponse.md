
# GenreResponse


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`lastUpdated` | Date
`streamCount` | number
`lastStreamed` | Date

## Example

```typescript
import type { GenreResponse } from 'audio-server'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "lastUpdated": null,
  "streamCount": null,
  "lastStreamed": null,
} satisfies GenreResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GenreResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


