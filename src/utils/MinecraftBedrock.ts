import fs from 'fs';
import { resolve } from 'path';
import chalk from 'chalk';
import * as TJS from 'typescript-json-schema';

/* Models */
import BehaviorsManifest from '../models/Manifests/BehaviorsManifest';
import ResourcesManifest from '../models/Manifests/ResourcesManifest';
import Blocks from '../models/Blocks/Blocks';
import Items from '../models/Items/Items';

class MinecraftBedrock {
  private schemasList: any[];

  constructor() {
    this.schemasList = [
      BehaviorsManifest,
      ResourcesManifest,
      Blocks,
      Items
    ];
  }

  /** Generate every Minecraft Bedrock Files Schemas. */
  public generateSchemaFiles(): void {
    console.log(`${chalk.green('✔')} Generating schemas...\n`);

    const TJS_settings: TJS.PartialArgs = { required: true };
    const TJS_compilerOptions: TJS.CompilerOptions = { strictNullChecks: true };


    for (const i in this.schemasList) {
      const constructorName = this.schemasList[i].constructor.name;

      const TJS_program: TJS.Program = TJS.getProgramFromFiles([
        resolve(__dirname, `../models/${this.schemasList[i].category}/${constructorName}.ts`)
      ], TJS_compilerOptions);

      const TJS_schema: TJS.Definition = TJS.generateSchema(TJS_program, constructorName, TJS_settings);

      fs.writeFileSync(`schemas/${this.schemasList[i].schemaName}.schema.json`, JSON.stringify(TJS_schema, null, 2), { encoding: 'utf-8' });

      // console.log(`${chalk.yellow(`[${Number(i) + 1}/${this.schemasList.length}]`)} ${chalk.bold(`${this.schemasList[i].schemaName}.schema.json`)} generated.`);
    }
  }
}

export default new MinecraftBedrock();
