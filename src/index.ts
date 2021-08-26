import fs from 'fs';
import MinecraftBedrock from './utils/MinecraftBedrock';
import Blocks from './models/Blocks/Blocks';

console.clear();
if (!fs.existsSync('schemas')) { fs.mkdirSync('schemas'); }

/* Generates Schemas */
MinecraftBedrock.generateSchemaFiles();

console.log();
process.kill(0);
