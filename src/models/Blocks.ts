import { BlocksBase } from './BlocksBase';

export class Blocks {
  public format_version: string;
  public 'minecraft:block': BlocksBase;

  constructor() {
    this.format_version = '1.17.0';
    this['minecraft:block'] = new BlocksBase();
  }
}

