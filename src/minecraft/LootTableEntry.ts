export interface LootTableEntry {
  type?: 'loot_table';
  /** @TJS-pattern ^(?:loot_tables/)+[a-z]+$ */
  name?: string;
}
