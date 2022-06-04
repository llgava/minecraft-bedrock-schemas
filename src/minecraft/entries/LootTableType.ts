import { LootTablePool } from '@models/behavior_packs/loot_tables/LootTableProperties';

export interface LootTableType {
  type?: 'loot_table';
  /** @TJS-pattern ^(?:loot_tables/)+[a-z]+$ */
  name?: string;
  pools?: LootTablePool[];
}
