import { Animation } from './Animation';

/** @$id llgava.behavior_packs.Animations */
export class AnimationsSchema {
  public format_version: string | '1.10.0';
  public 'animations': Animation;

  /** @TJS-ignore */ get fileName(): string {
    return 'animations_behavior';
  }
  /** @TJS-ignore */ get path(): string {
    return __filename;
  }
  /** @TJS-ignore */ get name(): string {
    return this.constructor.name;
  }

  /** @TJS-ignore */ get fileMatch(): string[] {
    return [
      'behavior_packs/*/animations/*.json',
      'development_behavior_packs/*/animations/*.json',
    ];
  }
}
