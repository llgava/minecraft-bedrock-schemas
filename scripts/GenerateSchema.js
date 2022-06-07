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
  const { MinecraftBedrockSchemas } = requireTS('../src/MinecraftBedrockSchemas');

  const Languages = requireTS('../src/models/global/Languages');
  const LanguageNames = requireTS('../src/models/resource_packs/LanguageNames');
  const FlipbookTextures = requireTS('../src/models/resource_packs/FlipbookTextures');

  console.clear();

  /*
    GENERATE SCHEMAS
    Schemas where is not a interface, should be added manually via
    `MinecraftBedrockSchemas#generateSchemaStatic` method.
  */
  const mcs = new MinecraftBedrockSchemas();
  mcs.generateSchemasDynamic(SCHEMAS_DIR);
  mcs.generateSchemaStatic(SchemasConfig['Languages'].file_name, Languages.path, SCHEMAS_DIR);
  mcs.generateSchemaStatic(SchemasConfig['LanguageNames'].file_name, LanguageNames.path, SCHEMAS_DIR);
  mcs.generateSchemaStatic(SchemasConfig['FlipbookTextures'].file_name, FlipbookTextures.path, SCHEMAS_DIR);

  /*
    GENERATE VSCODE SETTINGS
    Schemas where is not a interface, should be added manually via
    `VSCodeSettings#generateSchemaConfig` method.
  */
  mcs.settings.generateVSCodeDynamic();
  mcs.settings.generateSchemaFileMatch(SchemasConfig['Languages'].file_name, SchemasConfig['Languages'].file_match);
  mcs.settings.generateSchemaFileMatch(
    SchemasConfig['LanguageNames'].file_name,
    SchemasConfig['LanguageNames'].file_match
  );
  mcs.settings.generateSchemaFileMatch(
    SchemasConfig['FlipbookTextures'].file_name,
    SchemasConfig['FlipbookTextures'].file_match
  );

  mcs.settings.saveVSCodeSettings(SETTINGS_DIR);
}

main();
