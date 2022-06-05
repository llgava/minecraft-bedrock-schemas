export interface LootTableEntry {
  type?: 'loot_table';
  /** @pattern ^(?:loot_tables/)+[a-z]+$ */
  name?: string;
}
