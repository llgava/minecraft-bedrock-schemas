import { AnimationsBehavior } from './AnimationsBehavior';

/** @$id llgava.behavior_packs.Animations */
export class Animations {
  public format_version: string | '1.10.0';
  public 'animations': AnimationsBehavior;

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
