import fs from 'fs';
import chalk from 'chalk';
import * as TJSchema from 'ts-json-schema-generator';
import { Schemas } from './Schemas';
import { VSCodeSettings } from './VSCodeSettings';

import Utils from './utils/Utils';

export class MinecraftBedrock {
  public version: string;
  public settings: VSCodeSettings;

  constructor(version = '1.18.10') {
    this.version = version;
    this.settings = new VSCodeSettings(Schemas);
  }

  /** Generate all dynamic schemas. */
  public generateSchemasDynamic(save_to: string): this {
    for (const i in Schemas) {
      const config = Utils.findSchemaConfig(Schemas[i].constructor.name);
      this.generateSchemaStatic(config.file_name, Schemas[i].path, save_to);
    }

    return this;
  }

  /** Use ts-json-schema-generator to generate JSON schema. */
  public generateSchemaStatic(file_name: string, file_path: string, save_to: string): void {
    if (!fs.existsSync(save_to)) {
      fs.mkdirSync(`${save_to}/${this.version}`, { recursive: true });
    }

    const config = {
      path: file_path,
      tsconfig: './tsconfig.json',
      type: '*',
    };

    const schema = TJSchema.createGenerator(config).createSchema(config.type);

    fs.writeFileSync(`${save_to}/${this.version}/${file_name}.schema.json`, JSON.stringify(schema, null, 2), {
      encoding: 'utf-8',
    });

    console.log(`${chalk.bold.green('✓')} Generated ${file_name}.schema.json`);
  }
}
