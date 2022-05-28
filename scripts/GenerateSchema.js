const path = require('path');
const { register } = require('ts-node');
const { compilerOptions } = require('../tsconfig.json');

function requireTS(path) {
  register({ compilerOptions });
  const TSFile = require(path);

  return TSFile.default || TSFile;
}

function main() {
  const MinecraftBedrockSchemas = requireTS('../src/MinecraftBedrockSchemas');

  MinecraftBedrockSchemas.generateSchemaFiles('schemas/');
  MinecraftBedrockSchemas.generateSettingsFile('.vscode/');
}

main();
