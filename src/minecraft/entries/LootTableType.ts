import { LootTablePool } from '@models/BehaviorPack/LootTables/LootTableProperties';

export interface LootTableType {
  type?: 'loot_table';
  /** @TJS-pattern ^(?:loot_tables/)+[a-z]+$ */
  name?: string;
  pools?: LootTablePool[];
}
