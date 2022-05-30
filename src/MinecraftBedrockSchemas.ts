import fs from 'fs';
import chalk from 'chalk';
import path from 'path';
import * as TJS from 'typescript-json-schema';

import { ManifestSchema } from '@models/Manifests/Schema';
import { Tick } from '@models/BehaviorPack/Tick';
import { BlocksSchema } from '@models/BehaviorPack/Blocks/Schema';
import { ItemsSchema } from '@models/BehaviorPack/Items/Schema';
import { EntitiesSchema } from '@models/BehaviorPack/Entity/Schema';
import { RecipesSchema } from '@models/BehaviorPack/Recipes/Schema';
import { AnimationControllersSchema } from '@models/BehaviorPack/AnimationControllers/Schema';
import { AnimationsSchema } from '@models/BehaviorPack/Animations/Schema';
import { LootTablesSchema } from '@models/BehaviorPack/LootTables/Schema';
import { ItemTextureSchema } from '@models/ResourcePack/ItemTexture';
import { TerrainTextureSchema } from '@models/ResourcePack/TerrainTexture';
import { BlocksTextureSchema } from '@models/ResourcePack/BlocksTexture/Schema';
import { SoundsSchema } from '@models/ResourcePack/Sounds/Schema';
import { SoundDefinitionsSchema } from '@models/ResourcePack/SoundDefinitions/Schema';
import { MusicDefinitionsSchema } from '@models/ResourcePack/MusicDefinitions/Schema';

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
      new TerrainTextureSchema(),
      new BlocksTextureSchema(),
      new SoundsSchema(),
      new SoundDefinitionsSchema(),
      new MusicDefinitionsSchema(),
    ];
  }

  public generateDynamicSchemas(save_to: string): void {
    console.log(`${chalk.bold.magenta(`[v${this.version}]`)} Generating dynamic schemas...`);

    for (const i in this.schemas) {
      this.generateSchemaFromFile(this.schemas[i].name, this.schemas[i].fileName, this.schemas[i].path, save_to);
    }

    console.log(`${chalk.bold.green('✔')} Generated schemas!\n`);
  }

  public generateSettingsFile(save_to: string): void {
    console.log(`${chalk.bold.magenta(`[v${this.version}]`)} Generating VSCode settings...`);

    if (!fs.existsSync(save_to)) {
      fs.mkdirSync(save_to, { recursive: true });
    }

    const vscode = new VSCodeSettings(this.schemas, this.version);

    fs.writeFileSync(
      `${save_to}/settings-${this.version}.json`,
      JSON.stringify({ ['json.schemas']: vscode['json.schemas'] }, null, 2),
      { encoding: 'utf8' }
    );

    console.log(`${chalk.bold.green('✔')} Generated VSCode settings!\n`);
  }

  public generateSchemaFromFile(schema_name: string, file_name: string, file_path: string, save_to: string): void {
    if (!fs.existsSync(save_to)) {
      fs.mkdirSync(`${save_to}/${this.version}`, { recursive: true });
    }

    const program = TJS.programFromConfig('./tsconfig.json', [path.resolve(file_path)]);

    const schema = TJS.generateSchema(program, schema_name, {
      required: true,
    });

    fs.writeFileSync(`${save_to}/${this.version}/${file_name}.schema.json`, JSON.stringify(schema, null, 2), {
      encoding: 'utf-8',
    });
  }
}

export default new MinecraftBedrockSchemas();
