import { Blocks } from './models/Blocks';
import Convert from './utils/Convert';
import chalk from 'chalk';
import fs from 'fs';

const TSschema = require('generate-schema');

class ComplexHelloWorld {

  /** Initialize app. */
  public init() {
    console.clear();
    console.log(`${chalk.green('✔')} Generating schemas...`);

    if (!fs.existsSync('schemas')) { fs.mkdirSync('schemas'); }

    const blocksSchema = TSschema.json('Blocks Schema', Convert.toJSON(new Blocks()));

    fs.writeFileSync('schemas/blocks.schema.json', JSON.stringify(blocksSchema, null, 2), { encoding: 'utf-8' });
  }
}

const app = new ComplexHelloWorld();
app.init();
