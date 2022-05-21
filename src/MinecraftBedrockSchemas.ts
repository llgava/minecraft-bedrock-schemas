import fs from 'fs';
import chalk from 'chalk';
import path from 'path';
import * as TJS from 'typescript-json-schema';

import { Manifest } from '@models/Manifests/Manifest';
import { Blocks } from '@models/BehaviorPack/Blocks/Blocks';
import { Items } from '@models/BehaviorPack/Items/Items';
import { Entities } from '@models/BehaviorPack/Entity/Entities';
import { Recipes } from '@models/BehaviorPack/Recipes/Recipes';
import { AnimationControllers } from '@models/BehaviorPack/AnimationControllers/AnimationControllers';
import { Animations } from '@models/BehaviorPack/Animations/Animations';
import { LootTables } from '@models/BehaviorPack/LootTables/LootTables';
import { Schemas } from './types/Schemas';
import { VSCodeSettings } from './VSCodeSettings';

class MinecraftBedrockSchemas {
  public version: string;
  public schemas: Schemas[];

  constructor(version = '1.18.10') {
    this.version = version;
    this.schemas = [
      new Manifest,
      new Blocks,
      new Items,
      new Entities,
      new Recipes,
      new AnimationControllers,
      new Animations,
      new LootTables
    ];
  }

  public generateSchemaFiles(saveTo: string): void {
    console.log(`${chalk.bold.magenta(`[v${this.version}]`)} Generating schemas...`);

    if (!fs.existsSync(saveTo)) {
      fs.mkdirSync(`${saveTo}/${this.version}`, { recursive: true });
    }


    for (const i in this.schemas) {
      const program = TJS.programFromConfig('./tsconfig.json', [path.resolve(this.schemas[i].path)]);
      const schema = TJS.generateSchema(program, this.schemas[i].name, { required: true });

      fs.writeFileSync(
        `${saveTo}/${this.version}/${this.schemas[i].fileName}.schema.json`,
        JSON.stringify(schema, null, 2),
        { encoding: 'utf-8' }
      );
    }

    console.log(`${chalk.bold.green('✔')} Generated schemas!\n`);
  }

  public generateSettingsFile(saveTo: string): void {
    console.log(`${chalk.bold.magenta(`[v${this.version}]`)} Generating VSCode settings...`);

    if (!fs.existsSync(saveTo)) {
      fs.mkdirSync(saveTo, { recursive: true });
    }

    const vscode = new VSCodeSettings(this.schemas, this.version);

    fs.writeFileSync(
      `${saveTo}/settings-${this.version}.json`,
      JSON.stringify({ ['json.schemas']: vscode['json.schemas'] }, null, 2),
      { encoding: 'utf8' }
    );

    console.log(`${chalk.bold.green('✔')} Generated VSCode settings!\n`);
  }
}

export default new MinecraftBedrockSchemas();
