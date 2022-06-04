import fs from 'fs';
import chalk from 'chalk';
import path from 'path';
import * as TJSchema from 'ts-json-schema-generator';

import { ManifestSchema } from '@models/global/Manifest';
import { Tick } from '@models/behavior_packs/Tick';
import { BlocksSchema } from '@models/behavior_packs/blocks/Schema';
import { ItemsSchema } from '@models/behavior_packs/items/Schema';
import { EntitiesSchema } from '@models/behavior_packs/entities/Schema';
import { RecipesSchema } from '@models/behavior_packs/recipes/Schema';
import { AnimationControllersSchema } from '@models/behavior_packs/animation_controllers/Schema';
import { AnimationsSchema } from '@models/behavior_packs/animations/Schema';
import { LootTablesSchema } from '@models/behavior_packs/loot_tables/Schema';
import { ItemTextureSchema } from '@models/resource_packs/ItemTexture';
import { TerrainTextureSchema } from '@models/resource_packs/TerrainTexture';
import { BlocksTextureSchema } from '@models/resource_packs/blocks_texture/Schema';
import { SoundsSchema } from '@models/resource_packs/sounds/Schema';
import { SplashesSchema } from '@models/resource_packs/Splashes';
import { SoundDefinitionsSchema } from '@models/resource_packs/sound_definitions/Schema';
import { MusicDefinitionsSchema } from '@models/resource_packs/music_definitions/Schema';

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
      new SplashesSchema(),
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
      this.generateSchemaFromFile(this.schemas[i].fileName, this.schemas[i].path, save_to);
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

  /** Use ts-json-schema-generator to generate JSON schema. */
  public generateSchemaFromFile(file_name: string, file_path: string, save_to: string): void {
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
  }
}

export default new MinecraftBedrockSchemas();
