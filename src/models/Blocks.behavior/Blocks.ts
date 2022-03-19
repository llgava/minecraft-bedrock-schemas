import { BlocksBehavior } from './BlocksBehavior';

/** Experimental toggles required: Holiday Creator Features Experiment */
export class Blocks {
  public format_version: string | '1.18.0';
  public 'minecraft:block': BlocksBehavior;

  /** @TJS-ignore */ get schemaName(): string { return 'blocks_behavior'; }
  /** @TJS-ignore */ get path(): string { return __filename; }
  /** @TJS-ignore */ get name(): string { return this.constructor.name;}
}
