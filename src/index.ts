import fs from 'fs';
import chalk from 'chalk';
import MinecraftBedrock from './utils/MinecraftBedrock';

console.clear();
console.log(`${chalk.green('✔')} Generating schemas...`);

if (!fs.existsSync('schemas')) { fs.mkdirSync('schemas'); }

/* Generates Schemas */
MinecraftBedrock.generateSchemaFiles();

process.kill(0);
