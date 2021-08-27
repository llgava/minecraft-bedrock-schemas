// tslint:disable: align
import { ItemsBase } from './ItemsBase';

class Items {
  public format_version: string;
  public 'minecraft:item': ItemsBase;

  /** @TJS-ignore */ get schemaName(): string { return 'bp_items'; }
  /** @TJS-ignore */ get path(): string { return __filename; }
  /** @TJS-ignore */ get name(): string { return this.constructor.name; }
}

export default new Items();
