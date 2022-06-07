import { SchemaBase } from 'types/SchemaBase';
import { Block } from './Block';

/** @id llgava.behavior_packs.Blocks */
export class BlocksSchema implements SchemaBase {
  public format_version: string | '1.18.0';
  public 'minecraft:block': Block;

  /** @ignore */
  get path(): string {
    return __filename;
  }
}
