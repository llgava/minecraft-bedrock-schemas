const { register } = require('ts-node');
const { compilerOptions } = require('../tsconfig.json');

function requireTS(path) {
  register({ compilerOptions });
  const TSFile = require(path);

  return TSFile.default || TSFile;
}

function main() {
  const MinecraftBedrockSchemas = requireTS('../src/MinecraftBedrockSchemas');
  const Languages = requireTS('../src/models/Languages');
  const FlipbookTextures = requireTS('../src/models/ResourcePack/FlipbookTextures');

  MinecraftBedrockSchemas.generateDynamicSchemas('schemas/');
  MinecraftBedrockSchemas.generateSettingsFile('.vscode/');

  // Static Schemas
  MinecraftBedrockSchemas.generateSchemaFromFile(Languages.name, Languages.fileName, Languages.path, 'schemas/');
  MinecraftBedrockSchemas.generateSchemaFromFile(
    FlipbookTextures.name,
    FlipbookTextures.fileName,
    FlipbookTextures.path,
    'schemas/'
  );
}

main();
