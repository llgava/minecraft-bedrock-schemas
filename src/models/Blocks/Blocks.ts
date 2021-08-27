// tslint:disable: align
import { BlocksBase } from './BlocksBase';

/** You need to turn on the Holiday Creator Features Experiment on your World Settings. */
class Blocks {
  public format_version: string;
  public 'minecraft:block': BlocksBase;

  /** @TJS-ignore */ get schemaName(): string { return 'bp_blocks'; }
  /** @TJS-ignore */ get path(): string { return __filename; }
  /** @TJS-ignore */ get name(): string { return this.constructor.name;}
}

export default new Blocks();
