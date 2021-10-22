export interface JsonSchema {
  fileMatch: string[],
  url: string
}

export interface JsonSchemas {
  ['json.schema']: JsonSchema
}
