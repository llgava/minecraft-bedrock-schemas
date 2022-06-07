import { SchemaBase } from 'types/SchemaBase';
import { LootTablePool } from './LootTableProperties';

/** @id llgava.behavior_packs.LootTables */
export class LootTablesSchema implements SchemaBase {
  public pools?: LootTablePool[];

  /** @ignore */
  get path(): string {
    return __filename;
  }
}
