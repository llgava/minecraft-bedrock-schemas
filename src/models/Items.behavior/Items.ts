// tslint:disable: align
import { ItemsBehavior } from './ItemsBehavior';

export class Items {
  public format_version: string | '1.18.0';
  public 'minecraft:item': ItemsBehavior;

  /** @TJS-ignore */ get schemaName(): string { return 'items_behavior'; }
  /** @TJS-ignore */ get path(): string { return __filename; }
  /** @TJS-ignore */ get name(): string { return this.constructor.name; }
}
