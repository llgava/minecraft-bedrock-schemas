import { SchemaBase, SchemaConfig } from './types/SchemaBase';

import * as SchemasConfig from '@models/schemas.json';
import Utils from './utils/Utils';

const BASE_URL =
  'https://raw.githubusercontent.com/llgava/minecraft-bedrock-schemas/master/schemas/$VERSION/$FILE_NAME.schema.json';

export class VSCodeSettings {
  public schemas: SchemaBase[];
  public version: string;
  public baseUrl: string;

  public ['json.schemas']: SchemaConfig[] = [];

  constructor(schemas: SchemaBase[], version = '1.18.10', base_url = BASE_URL) {
    this.schemas = schemas;
    this.version = version;
    this.baseUrl = base_url;

    this.mountConfig();
  }

  private mountConfig(): void {
    // Generate Dynamic Schemas config
    for (const i in this.schemas) {
      const config = Utils.findSchemaConfig(this.schemas[i].constructor.name);

      this.generateSchemaConfig(config.file_name, config.file_match);
    }

    // Generate Static Schemas config
    this.generateSchemaConfig(SchemasConfig['Languages'].file_name, SchemasConfig['Languages'].file_match);
    this.generateSchemaConfig(SchemasConfig['LanguageNames'].file_name, SchemasConfig['LanguageNames'].file_match);
    this.generateSchemaConfig(
      SchemasConfig['FlipbookTextures'].file_name,
      SchemasConfig['FlipbookTextures'].file_match
    );
  }

  private generateSchemaConfig(file_name: string, file_match: string[]): void {
    this['json.schemas'].push({
      fileMatch: file_match,
      url: this.baseUrl.replace('$VERSION', this.version).replace('$FILE_NAME', file_name),
    });
  }
}
