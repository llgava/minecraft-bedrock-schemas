import { SchemaBase } from 'types/SchemaBase';
import { LootTablePool } from './LootTableProperties';

/** @id llgava.behavior_packs.LootTables */
export class LootTablesSchema {
  public pools?: LootTablePool[];

  /** @ignore */
  get path(): string {
    return __filename;
  }
}
