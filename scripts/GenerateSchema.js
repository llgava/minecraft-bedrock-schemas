const { register } = require('ts-node');
const { compilerOptions } = require('../tsconfig.json');

function requireTS(path) {
  register({ compilerOptions });
  const TSFile = require(path);

  return TSFile.default || TSFile;
}

function main() {
  const MinecraftBedrockSchemas = requireTS('../src/MinecraftBedrockSchemas');
  const Languages = requireTS('../src/models/global/Languages');
  const LanguageNames = requireTS('../src/models/resource_packs/LanguageNames');
  const FlipbookTextures = requireTS('../src/models/resource_packs/FlipbookTextures');
  const output = 'schemas/';

  MinecraftBedrockSchemas.generateDynamicSchemas(output);
  MinecraftBedrockSchemas.generateSettingsFile('.vscode/');

  // Static Schemas
  MinecraftBedrockSchemas.generateSchemaFromFile(Languages.fileName, Languages.path, output);
  MinecraftBedrockSchemas.generateSchemaFromFile(LanguageNames.fileName, LanguageNames.path, output);
  MinecraftBedrockSchemas.generateSchemaFromFile(FlipbookTextures.fileName, FlipbookTextures.path, output);
}

main();
