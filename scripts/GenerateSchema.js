const { register } = require('ts-node');
const { compilerOptions } = require('../tsconfig.json');

function requireTS(path) {
  register({ compilerOptions });
  const TSFile = require(path);

  return TSFile.default || TSFile;
}

function main() {
  const { MinecraftBedrock } = requireTS('../src/MinecraftBedrock');
  const MCB = new MinecraftBedrock();

  MCB.generateSchemasDynamic('schemas/');
  MCB.settings.generateVSCodeDynamic().saveVSCodeSettings('.vscode/');
}

main();
