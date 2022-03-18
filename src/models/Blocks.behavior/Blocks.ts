import { BlocksBehavior } from './BlocksBehavior';

/** You need to turn on the Holiday Creator Features Experiment on your World Settings. */
export class Blocks {
  public format_version: string | '1.18.0';
  public 'minecraft:block': BlocksBehavior;

  /** @TJS-ignore */ get schemaName(): string { return 'blocks_behavior'; }
  /** @TJS-ignore */ get path(): string { return __filename; }
  /** @TJS-ignore */ get name(): string { return this.constructor.name;}
}
