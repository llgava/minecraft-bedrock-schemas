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

  MinecraftBedrockSchemas.generateDynamicSchemas('schemas/');
  MinecraftBedrockSchemas.generateSettingsFile('.vscode/');

  // Static Schemas
  MinecraftBedrockSchemas.generateSchemaFromFile(Languages.name, Languages.fileName, Languages.path, 'schemas/');
  MinecraftBedrockSchemas.generateSchemaFromFile(
    LanguageNames.name,
    LanguageNames.fileName,
    LanguageNames.path,
    'schemas/'
  );
  MinecraftBedrockSchemas.generateSchemaFromFile(
    FlipbookTextures.name,
    FlipbookTextures.fileName,
    FlipbookTextures.path,
    'schemas/'
  );
}

main();
