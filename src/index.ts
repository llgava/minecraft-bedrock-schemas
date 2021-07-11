import { Blocks } from './models/Blocks';
import Convert from './utils/Convert';
import fs from 'fs/promises';

const TSschema = require('generate-schema');

class ComplexHelloWorld {
  public init() {
    const blocksSchema = TSschema.json('Blocks Schema', Convert.toJSON(new Blocks()));

    fs.writeFile('blocks.json', JSON.stringify(new Blocks(), null, 2), 'utf-8');
    fs.writeFile('blocks.schema.json', JSON.stringify(blocksSchema, null, 2), 'utf-8');


    console.clear();
    console.log(blocksSchema);
  }
}

const app = new ComplexHelloWorld();
app.init();
