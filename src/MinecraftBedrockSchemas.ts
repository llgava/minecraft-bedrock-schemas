import fs from 'fs';
import chalk from 'chalk';
import path from 'path';
import * as TJS from 'typescript-json-schema';

import { Tick } from '@models/BehaviorPack/Tick';

import { ManifestSchema } from '@models/Manifests/Schema';
import { BlocksSchema } from '@models/BehaviorPack/Blocks/Schema';
import { ItemsSchema } from '@models/BehaviorPack/Items/Schema';
import { EntitiesSchema } from '@models/BehaviorPack/Entity/Schema';
import { RecipesSchema } from '@models/BehaviorPack/Recipes/Schema';
import { AnimationControllersSchema } from '@models/BehaviorPack/AnimationControllers/Schema';
import { AnimationsSchema } from '@models/BehaviorPack/Animations/Schema';
import { LootTablesSchema } from '@models/BehaviorPack/LootTables/Schema';
import { ItemTextureSchema } from '@models/ResourcePack/ItemTexture/Schema';
import { BlocksTextureSchema } from '@models/ResourcePack/BlocksTexture/Schema';
import { SoundsSchema } from '@models/ResourcePack/Sounds/Schema';
import { Schemas } from './types/Schemas';
import { VSCodeSettings } from './VSCodeSettings';

class MinecraftBedrockSchemas {
  public version: string;
  public schemas: Schemas[];

  constructor(version = '1.18.10') {
    this.version = version;
    this.schemas = [
      // Global
      new ManifestSchema(),

      // Behavior Packs
      new Tick(),
      new BlocksSchema(),
      new ItemsSchema(),
      new EntitiesSchema(),
      new RecipesSchema(),
      new AnimationControllersSchema(),
      new AnimationsSchema(),
      new LootTablesSchema(),

      // Resource Packs
      new ItemTextureSchema(),
      new BlocksTextureSchema(),
      new SoundsSchema(),
    ];
  }

  public generateSchemaFiles(saveTo: string): void {
    console.log(
      `${chalk.bold.magenta(`[v${this.version}]`)} Generating schemas...`
    );

    if (!fs.existsSync(saveTo)) {
      fs.mkdirSync(`${saveTo}/${this.version}`, { recursive: true });
    }

    for (const i in this.schemas) {
      const program = TJS.programFromConfig('./tsconfig.json', [
        path.resolve(this.schemas[i].path),
      ]);

      const schema = TJS.generateSchema(program, this.schemas[i].name, {
        required: true,
      });

      fs.writeFileSync(
        `${saveTo}/${this.version}/${this.schemas[i].fileName}.schema.json`,
        JSON.stringify(schema, null, 2),
        { encoding: 'utf-8' }
      );
    }

    console.log(`${chalk.bold.green('✔')} Generated schemas!\n`);
  }

  public generateSettingsFile(saveTo: string): void {
    console.log(
      `${chalk.bold.magenta(
        `[v${this.version}]`
      )} Generating VSCode settings...`
    );

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
