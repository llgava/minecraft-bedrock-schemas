import { JSONSchema, Schemas } from './types/Schemas';

import * as Languages from '@models/Languages';
import * as LanguageNames from '@models/LanguageNames';
import * as FlipbookTextures from '@models/ResourcePack/FlipbookTextures';

const BASE_URL =
  'https://raw.githubusercontent.com/llgava/minecraft-bedrock-schemas/master/schemas/$VERSION/$FILE_NAME.schema.json';

export class VSCodeSettings {
  public schemas: Schemas[];
  public version: string;
  public baseUrl: string;

  public ['json.schemas']: JSONSchema[] = [];

  constructor(schemas: Schemas[], version = '1.18.10', base_url = BASE_URL) {
    this.schemas = schemas;
    this.version = version;
    this.baseUrl = base_url;

    this.mountConfig();
  }

  private mountConfig(): void {
    // Generate Dynamic Schemas config
    for (const i in this.schemas) {
      this.generateSchemaConfig(this.schemas[i].fileName, this.schemas[i].fileMatch);
    }

    // Generate Static Schemas config
    this.generateSchemaConfig(Languages.fileName, Languages.fileMatch);
    this.generateSchemaConfig(LanguageNames.fileName, LanguageNames.fileMatch);
    this.generateSchemaConfig(FlipbookTextures.fileName, FlipbookTextures.fileMatch);
  }

  private generateSchemaConfig(file_name: string, file_match: string[]): void {
    this['json.schemas'].push({
      fileMatch: file_match,
      url: this.baseUrl.replace('$VERSION', this.version).replace('$FILE_NAME', file_name),
    });
  }
}
