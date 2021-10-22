import fs from 'fs';
import chalk from 'chalk';
import { resolve } from 'path';
import * as TJS from 'typescript-json-schema';

/* Models */
import BehaviorsManifest from '@models/Manifests/BehaviorsManifest';
import ResourcesManifest from '@models/Manifests/ResourcesManifest';
import Blocks from '@models/Blocks/Blocks';
import Items from '@models/Items/Items';

interface Schemas {
  schemaName: string;
  name: string;
  path: string;
}

class MinecraftBedrock {
  private schemasList: Schemas[];
  private 'json.schemas': [];

  /* TJS settings */
  private settings: TJS.PartialArgs = { required: true };
  private compilerOptions: TJS.CompilerOptions = { strictNullChecks: true };

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

    for (const i in this.schemasList) {
      const TJS_program: TJS.Program = TJS.getProgramFromFiles([resolve(this.schemasList[i].path)], this.compilerOptions);
      const TJS_schema: TJS.Definition = TJS.generateSchema(TJS_program, this.schemasList[i].name, this.settings);

      fs.writeFileSync(`schemas/${this.schemasList[i].schemaName}.schema.json`, JSON.stringify(TJS_schema, null, 2), { encoding: 'utf-8' });
    }
  }
}

export default new MinecraftBedrock();
