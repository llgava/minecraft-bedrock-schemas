const { register } = require('ts-node');
const { compilerOptions } = require('../tsconfig.json');

function requireTS(path) {
  register({ compilerOptions });
  const TSFile = require(path);

  return TSFile.default || TSFile;
}

function main() {
  const output = 'schemas/';
  const SchemasConfig = require('../src/models/schemas.json');
  const MinecraftBedrockSchemas = requireTS('../src/MinecraftBedrockSchemas');

  const Languages = requireTS('../src/models/global/Languages');
  const LanguageNames = requireTS('../src/models/resource_packs/LanguageNames');
  const FlipbookTextures = requireTS('../src/models/resource_packs/FlipbookTextures');


  MinecraftBedrockSchemas.generateDynamicSchemas(output);
  MinecraftBedrockSchemas.generateSettingsFile('.vscode/');

  // Static Schemas
  MinecraftBedrockSchemas.generateSchemaFromFile(SchemasConfig['Languages'].file_name, Languages.path, output);
  MinecraftBedrockSchemas.generateSchemaFromFile(SchemasConfig['LanguageNames'].file_name, LanguageNames.path, output);
  MinecraftBedrockSchemas.generateSchemaFromFile(
    SchemasConfig['FlipbookTextures'].file_name,
    FlipbookTextures.path,
    output
  );
}

main();
