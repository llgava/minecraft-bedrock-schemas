import fs from 'fs';
import { resolve } from 'path';
import chalk from 'chalk';
import * as TJS from 'typescript-json-schema';
import Blocks from '../models/Blocks/Blocks';
import BehaviorsManifest from '../models/Manifests/BehaviorsManifest';
import { ManifestBase } from '../models/Manifests/ManifestBase';
import ResourcesManifest from '../models/Manifests/ResourcesManifest';
import Items from '../models/Items/Items';

interface Schemas {
  folder: string;
  file: any;
}

class MinecraftBedrock {
  private schemasList: Schemas[];

  constructor() {
    this.schemasList = [
      { folder: 'Blocks', file: Blocks, },
      { folder: 'Items', file: Items, },
      { folder: 'Manifests', file: BehaviorsManifest, },
      { folder: 'Manifests', file: ResourcesManifest, }
    ];
  }

  /** Generate every Minecraft Bedrock Files Schemas. */
  public generateSchemaFiles(): void {
    console.log(`${chalk.green('✔')} Generating schemas...`);

    const TJS_settings: TJS.PartialArgs = { required: true };
    const TJS_compilerOptions: TJS.CompilerOptions = { strictNullChecks: true };

    for (const i in this.schemasList) {
      let schemaName: string = this.schemasList[i].file.constructor.name;
      const TJS_program: TJS.Program =TJS.getProgramFromFiles([
        resolve(__dirname, `../models/${this.schemasList[i].folder}/${schemaName}.ts`)
      ], TJS_compilerOptions);

      /**
       * Checks if is a Minecraft Manifest.
       * If is, schemaName should be renamed in snake case.
       */
      if (this.schemasList[i].file instanceof ManifestBase) {
        schemaName = schemaName.match('BehaviorsManifest') ? schemaName = 'bp_manifest' :
          schemaName.match('ResourcesManifest') ? schemaName = 'rp_manifest' : schemaName;
      }

      const TJS_schema: TJS.Definition = TJS.generateSchema(TJS_program, this.schemasList[i].file.constructor.name, TJS_settings);
      const fileName: string = `${schemaName.toLowerCase()}.schema.json`;

      fs.writeFileSync(`schemas/${fileName}`, JSON.stringify(TJS_schema, null, 2), { encoding: 'utf-8' });
    }
  }
}

export default new MinecraftBedrock();
