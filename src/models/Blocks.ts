import { BlocksBase } from './BlocksBase';

class Blocks {
  public format_version: `${number}.${number}.${number}`;
  public 'minecraft:block': BlocksBase;
}

export default new Blocks();
