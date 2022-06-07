const { register } = require('ts-node');
const { compilerOptions } = require('../tsconfig.json');

const SCHEMAS_DIR = 'schemas/';
const SETTINGS_DIR = '.vscode/';

function requireTS(path) {
  register({ compilerOptions });
  const TSFile = require(path);

  return TSFile.default || TSFile;
}

function main() {
  console.clear();
  const { MinecraftBedrock } = requireTS('../src/MinecraftBedrock');

  const MCB = new MinecraftBedrock();
  MCB.generateSchemasDynamic(SCHEMAS_DIR);
  MCB.settings.generateVSCodeDynamic().saveVSCodeSettings(SETTINGS_DIR);
}

main();
