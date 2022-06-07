import fs from 'fs';
import chalk from 'chalk';
import * as TJSchema from 'ts-json-schema-generator';
import * as Schemas from '..';

import { SchemaBase } from 'types/SchemaBase';
import { VSCodeSettings } from './VSCodeSettings';
import Utils from './utils/Utils';

class MinecraftBedrockSchemas {
  public version: string;
  public schemas: SchemaBase[];

  constructor(version = '1.18.10') {
    this.version = version;
    this.schemas = [
      // Global
      new Schemas.ManifestSchema(),

      // Behavior Packs
      new Schemas.Tick(),
      new Schemas.BlocksSchema(),
      new Schemas.ItemsSchema(),
      new Schemas.EntitiesSchema(),
      new Schemas.RecipesSchema(),
      new Schemas.AnimationControllersSchema(),
      new Schemas.AnimationsSchema(),
      new Schemas.LootTablesSchema(),

      // Resource Packs
      new Schemas.SplashesSchema(),
      new Schemas.ItemTextureSchema(),
      new Schemas.TerrainTextureSchema(),
      new Schemas.BlocksTextureSchema(),
      new Schemas.SoundsSchema(),
      new Schemas.SoundDefinitionsSchema(),
      new Schemas.MusicDefinitionsSchema(),
      new Schemas.ClientEntitySchema(),
    ];
  }

  /** Generate all dynamic schemas. */
  public generateDynamicSchemas(save_to: string): void {
    console.log(`${chalk.bold.magenta(`[v${this.version}]`)} Generating dynamic schemas...`);

    for (const i in this.schemas) {
      const config = Utils.findSchemaConfig(this.schemas[i].constructor.name);

      this.generateSchemaFromFile(config.file_name, this.schemas[i].path, save_to);
    }

    console.log(`${chalk.bold.green('✔')} Generated schemas!\n`);
  }

  /** Generate .vscode/settings.json with [json.schema] property. */
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
