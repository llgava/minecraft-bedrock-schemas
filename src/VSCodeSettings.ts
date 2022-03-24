import { JSONSchema, Schemas } from './types/Schemas';

const BASE_URL = 'https://raw.githubusercontent.com/llgava/minecraft-bedrock-schemas/master/schemas/%version%/%file_name%.schema.json';

export class VSCodeSettings {
  public schemas: Schemas[];
  public version: string;

  public ['json.schemas']: JSONSchema[] = [];

  constructor(schemas: Schemas[], version = '1.18.10') {
    this.schemas = schemas;
    this.version = version;

    this.mountJSONSchemas();
  }

  private mountJSONSchemas(): void {
    for (const i in this.schemas) {
      this['json.schemas'].push({
        fileMatch: this.schemas[i].fileMatch,
        url: BASE_URL
          .replace('%version%', this.version)
          .replace('%file_name%', this.schemas[i].fileName)
      });
    }
  }
}
