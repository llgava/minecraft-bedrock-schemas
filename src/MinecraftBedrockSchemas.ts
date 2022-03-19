import fs from 'fs';
import chalk from 'chalk';
import path from 'path';
import * as TJS from 'typescript-json-schema';

import { Manifest } from '@models/Manifests/Manifest';
import { Blocks } from '@models/Blocks.behavior/Blocks';
import { Items } from '@models/Items.behavior/Items';
import { Schemas } from './types/Schemas';
import { VSCodeSettings } from './VSCodeSettings';

class MinecraftBedrockSchemas {
  private version: string;
  private schemas: Schemas[];

  constructor(version = '1.18.10') {
    this.version = version;
    this.schemas = [
      new Manifest,
      new Blocks,
      new Items
    ];
  }

  public generateSchemaFiles(saveTo: string): void {
    console.log(`${chalk.bold.magenta(`[${this.version}]`)} Generating schemas...`);

    if (!fs.existsSync(saveTo)) {
      fs.mkdirSync(`${saveTo}/${this.version}`, { recursive: true });
    }

    for (const i in this.schemas) {
      const TJS_program: TJS.Program = TJS.getProgramFromFiles(
        [path.resolve(this.schemas[i].path)],
        { strictNullChecks: true }
      );

      const TJS_schema: TJS.Definition = TJS.generateSchema(
        TJS_program,
        this.schemas[i].name,
        { required: true }
      );

      fs.writeFileSync(
        `${saveTo}/${this.version}/${this.schemas[i].fileName}.schema.json`,
        JSON.stringify(TJS_schema, null, 2),
        { encoding: 'utf-8' }
      );
    }
  }

  public generateSettingsFile(saveTo: string): void {
    console.log(`${chalk.bold.magenta(`[${this.version}]`)} Generating VSCode settings...`);

    if (!fs.existsSync('saveTo')) {
      fs.mkdirSync(saveTo, { recursive: true });
    }

    const vscode = new VSCodeSettings(this.schemas, this.version);

    fs.writeFileSync(
      `${saveTo}/settings-${this.version}.json`,
      JSON.stringify({ ['json.schemas']: vscode['json.schemas'] }, null, 2),
      { encoding: 'utf8' }
    );
  }
}

export default new MinecraftBedrockSchemas();
