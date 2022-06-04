/** @$id llgava.behavior_packs.functions.Tick */
export class Tick {
  public values?: string[];

  /** @TJS-ignore */ get fileName(): string {
    return 'tick';
  }
  /** @TJS-ignore */ get path(): string {
    return __filename;
  }
  /** @TJS-ignore */ get name(): string {
    return this.constructor.name;
  }

  /** @TJS-ignore */
  get fileMatch(): string[] {
    return ['behavior_packs/*/functions/tick.json', 'development_behavior_packs/*/functions/tick.json'];
  }
}
