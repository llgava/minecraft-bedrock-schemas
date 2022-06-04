import { Item } from './Item';

/** @id llgava.behavior_packs.Items */
export class ItemsSchema {
  public format_version: string | '1.18.0';
  public 'minecraft:item': Item;

  /** @TJS-ignore */ get fileName(): string {
    return 'items_behavior';
  }
  /** @TJS-ignore */ get path(): string {
    return __filename;
  }
  /** @TJS-ignore */ get name(): string {
    return this.constructor.name;
  }

  /** @TJS-ignore */ get fileMatch(): string[] {
    return ['behavior_packs/*/items/*.json', 'development_behavior_packs/*/items/*.json'];
  }
}
