import fs from 'fs';
import { resolve } from 'path';
import * as TJS from 'typescript-json-schema';
import Blocks from '../models/Blocks';
import BehaviorsManifest from '../models/BehaviorsManifest';
import { ManifestBase } from '../models/ManifestBase';
import ResourcesManifest from '../models/ResourcesManifest';

class MinecraftBedrock {
  private schemasList: any[];

  constructor() {
    this.schemasList = [Blocks, BehaviorsManifest, ResourcesManifest];
  }

  /** Generate every Minecraft Bedrock Files Schemas. */
  public generateSchemaFiles(): void {
    const TJS_settings: TJS.PartialArgs = { required: true };
    const TJS_compilerOptions: TJS.CompilerOptions = { strictNullChecks: true };

    for (const i in this.schemasList) {
      let schemaName: string = this.schemasList[i].constructor.name;
      const TJS_program: TJS.Program = TJS.getProgramFromFiles([resolve(__dirname, `../models/${schemaName}.ts`)], TJS_compilerOptions);

      /**
       * Checks if is a Minecraft Manifest.
       * If is, schemaName should be renamed in snake case.
       */
      if(this.schemasList[i] instanceof ManifestBase) {
        schemaName = schemaName.match('BehaviorsManifest') ? schemaName = 'behavior_manifest' :
                     schemaName.match('ResourcesManifest') ? schemaName = 'resource_manifest' : schemaName;
      }

      const TJS_schema: TJS.Definition = TJS.generateSchema(TJS_program, this.schemasList[i].constructor.name, TJS_settings);

      fs.writeFileSync(`schemas/${schemaName.toLowerCase()}.schema.json`, JSON.stringify(TJS_schema, null, 2), { encoding: 'utf-8' });
    }
  }
}

export default new MinecraftBedrock();
