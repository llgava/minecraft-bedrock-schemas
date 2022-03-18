import fs from 'fs';
import chalk from 'chalk';
import path from 'path';
import * as TJS from 'typescript-json-schema';

/* Models */
import { Manifest } from '@models/Manifests/Manifest';
import { Blocks } from '@models/Blocks.behavior/Blocks';
import { Items } from '@models/Items.behavior/Items';

interface Schemas {
  schemaName: string;
  name: string;
  path: string;
}

class MinecraftBedrock {
  private schemas: Schemas[];

  constructor() {
    this.schemas = [
      new Manifest,
      new Blocks,
      new Items
    ];
  }

  /** Generate every Minecraft Bedrock JSON Schemas Files. */
  public generateSchemaFiles(): void {
    console.log(`${chalk.green('✔')} Generating schemas...\n`);

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
        `schemas/${this.schemas[i].schemaName}.schema.json`,
        JSON.stringify(TJS_schema, null, 2),
        { encoding: 'utf-8' }
      );
    }
  }
}

export default new MinecraftBedrock();
