import fs from 'fs';
import chalk from 'chalk';
import { SchemaBase, SchemaConfig } from './types/SchemaBase';

import Utils from './utils/Utils';

const BASE_URL =
  'https://raw.githubusercontent.com/llgava/minecraft-bedrock-schemas/master/schemas/$VERSION/$FILE_NAME.schema.json';

export class VSCodeSettings {
  public version: string;
  public baseUrl: string;
  public schemas: SchemaBase[];

  public ['json.schemas']: SchemaConfig[] = [];

  constructor(schemas: SchemaBase[], version = '1.18.10', base_url = BASE_URL) {
    this.version = version;
    this.baseUrl = base_url;
    this.schemas = schemas;
  }

  /** Generate all dynamic json schemas settings. */
  public generateVSCodeDynamic(): this {
    for (const i in this.schemas) {
      const config = Utils.findSchemaConfig(this.schemas[i].constructor.name);
      this.generateSchemaFileMatch(config.file_name, config.file_match);
    }

    return this;
  }

  /** Generate a specifc json schema setting. */
  public generateSchemaFileMatch(file_name: string, file_match: string[]): this {
    this['json.schemas'].push({
      fileMatch: file_match,
      url: this.baseUrl.replace('$VERSION', this.version).replace('$FILE_NAME', file_name),
    });

    return this;
  }

  /** Save VSCode settings.json */
  public saveVSCodeSettings(save_to: string): void {
    if (!fs.existsSync(save_to)) {
      fs.mkdirSync(save_to, { recursive: true });
    }

    fs.writeFileSync(
      `${save_to}/settings-${this.version}.json`,
      JSON.stringify({ ['json.schemas']: this['json.schemas'] }, null, 2),
      {
        encoding: 'utf8',
      }
    );

    console.log(`${chalk.bold.yellow('✓')} Generated VSCode settings!`);
  }
}
