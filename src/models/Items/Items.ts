// tslint:disable: align
import { SchemaCategories } from '../../interfaces/Schema';
import { ItemsBase } from './ItemsBase';

class Items {
  public format_version: string;
  public 'minecraft:item': ItemsBase;

  /** @TJS-ignore */ private _schemaName: string = 'bp_items';
  /** @TJS-ignore */ private _category: SchemaCategories = 'Items';
  /** @TJS-ignore */ get schemaName(): string { return this._schemaName; }
  /** @TJS-ignore */ get category(): SchemaCategories { return this._category; }
}

export default new Items();
