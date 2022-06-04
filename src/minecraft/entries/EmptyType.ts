import { LootTablePool } from '@models/behavior_packs/loot_tables/LootTableProperties';

export interface EmptyType {
  type?: 'empty';
  pools?: LootTablePool[];
}
