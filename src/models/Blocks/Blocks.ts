// tslint:disable: align
import { SchemaCategories } from '../../interfaces/Schema';
import { BlocksBase } from './BlocksBase';

/** You need to turn on the Holiday Creator Features Experiment on your World Settings. */
class Blocks {
  public format_version: string;
  public 'minecraft:block': BlocksBase;


  /** @TJS-ignore */ private _schemaName: string = 'bp_blocks';
  /** @TJS-ignore */ private _category: SchemaCategories = 'Blocks';
  /** @TJS-ignore */ get schemaName(): string { return this._schemaName; }
  /** @TJS-ignore */ get category(): SchemaCategories { return this._category; }
}

export default new Blocks();
