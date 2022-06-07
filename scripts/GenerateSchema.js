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
  const SchemasConfig = require('../src/models/schemas.json');
  const { MinecraftBedrock } = requireTS('../src/MinecraftBedrock');

  const Languages = requireTS('../src/models/global/Languages');
  const LanguageNames = requireTS('../src/models/resource_packs/LanguageNames');
  const FlipbookTextures = requireTS('../src/models/resource_packs/FlipbookTextures');

  console.clear();

  /*
    GENERATE SCHEMAS
    Schemas where is not a interface, should be added manually via
    `MinecraftBedrockSchemas.generateSchemaStatic` method.
  */
  const MCB = new MinecraftBedrock();
  MCB.generateSchemasDynamic(SCHEMAS_DIR);
  MCB.generateSchemaStatic(SchemasConfig['Languages'].file_name, Languages.path, SCHEMAS_DIR);
  MCB.generateSchemaStatic(SchemasConfig['LanguageNames'].file_name, LanguageNames.path, SCHEMAS_DIR);
  MCB.generateSchemaStatic(SchemasConfig['FlipbookTextures'].file_name, FlipbookTextures.path, SCHEMAS_DIR);

  /*
    GENERATE VSCODE SETTINGS
    Schemas where is not a interface, should be added manually via
    `MinecraftBedrockSchemas[settings].generateSchemaConfig` method.
  */
  MCB.settings.generateVSCodeDynamic();
  MCB.settings.generateSchemaFileMatch(SchemasConfig['Languages'].file_name, SchemasConfig['Languages'].file_match);
  MCB.settings.generateSchemaFileMatch(
    SchemasConfig['LanguageNames'].file_name,
    SchemasConfig['LanguageNames'].file_match
  );
  MCB.settings.generateSchemaFileMatch(
    SchemasConfig['FlipbookTextures'].file_name,
    SchemasConfig['FlipbookTextures'].file_match
  );

  MCB.settings.saveVSCodeSettings(SETTINGS_DIR);
}

main();
