import fs from 'fs';
import MinecraftBedrock from './MinecraftBedrock';

const version = '1.18.10';

if (!fs.existsSync(`schemas/${version}/`)) {
  fs.mkdirSync(`schemas/${version}/`, { recursive: true });
}

/* Generates Schemas */
MinecraftBedrock.generateSchemaFiles(version);

process.kill(0);
