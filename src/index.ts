import fs from 'fs';
import MinecraftBedrock from '@utils/MinecraftBedrock';

if (!fs.existsSync('schemas')) { fs.mkdirSync('schemas'); }

/* Generates Schemas */
MinecraftBedrock.generateSchemaFiles();

process.kill(0);
