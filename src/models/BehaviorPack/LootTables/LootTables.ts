import { LootTablePool } from './Definitions';

export class LootTables {
  public pools?: LootTablePool[];

  /** @TJS-ignore */ get fileName(): string { return 'loot_tables'; }
  /** @TJS-ignore */ get path(): string { return __filename; }
  /** @TJS-ignore */ get name(): string { return this.constructor.name; }

  /** @TJS-ignore */
  get fileMatch(): string[] {
    return [
      'behavior_packs/*/loot_tables/*.json',
      'development_behavior_packs/*/loot_tables/*.json',
    ];
  }
}
