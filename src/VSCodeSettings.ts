import { JSONSchema, Schemas } from './types/Schemas';

const BASE_URL = 'https://raw.githubusercontent.com/llgava/minecraft-bedrock-schemas/master/schemas/$VERSION/$FILE_NAME.schema.json';

export class VSCodeSettings {
  public schemas: Schemas[];
  public version: string;
  public baseUrl: string;

  public ['json.schemas']: JSONSchema[] = [];

  constructor(schemas: Schemas[], version = '1.18.10', base_url = BASE_URL) {
    this.schemas = schemas;
    this.version = version;
    this.baseUrl = base_url;

    this.mountJSONSchemas();
  }

  private mountJSONSchemas(): void {
    for (const i in this.schemas) {
      this['json.schemas'].push({
        fileMatch: this.schemas[i].fileMatch,
        url: this.baseUrl
          .replace('$VERSION', this.version)
          .replace('$FILE_NAME', this.schemas[i].fileName)
      });
    }
  }
}
