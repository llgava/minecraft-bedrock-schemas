import fs from 'fs';
import { resolve } from 'path';
import * as TJS from 'typescript-json-schema';
import Blocks from '../models/Blocks';

class MinecraftBedrock {
  private schemasList: any[];

  constructor() {
    this.schemasList = [Blocks];
  }

  /** Generate every Minecraft Bedrock Files Schemas. */
  public generateSchemaFiles(): void {
    const TJS_settings: TJS.PartialArgs = { required: true };
    const TJS_compilerOptions: TJS.CompilerOptions = { strictNullChecks: true };

    for (const i in this.schemasList) {
      const schemaName: string = this.schemasList[i].constructor.name;

      const TJS_program: TJS.Program = TJS.getProgramFromFiles([resolve(__dirname, `../models/${schemaName}.ts`)], TJS_compilerOptions);
      const TJS_schema: TJS.Definition = TJS.generateSchema(TJS_program, this.schemasList[i].constructor.name, TJS_settings);

      fs.writeFileSync(`schemas/${schemaName.toLowerCase()}.schema.json`, JSON.stringify(TJS_schema, null, 2), { encoding: 'utf-8' });
    }
  }
}

export default new MinecraftBedrock();
