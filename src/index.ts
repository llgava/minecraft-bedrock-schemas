import fs from 'fs';
import MinecraftBedrock from './MinecraftBedrock';

if (!fs.existsSync('schemas')) { fs.mkdirSync('schemas'); }

/* Generates Schemas */
MinecraftBedrock.generateSchemaFiles('1.18.10');

process.kill(0);
