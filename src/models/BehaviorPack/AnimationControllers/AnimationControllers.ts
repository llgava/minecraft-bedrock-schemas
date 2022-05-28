import { AnimationControllersBehavior } from './AnimationControllersBehavior';

export class AnimationControllers {
  public format_version: string | '1.10.0';
  public 'animation_controllers': AnimationControllersBehavior;

  /** @TJS-ignore */ get fileName(): string {
    return 'animation_controllers_behavior';
  }
  /** @TJS-ignore */ get path(): string {
    return __filename;
  }
  /** @TJS-ignore */ get name(): string {
    return this.constructor.name;
  }

  /** @TJS-ignore */ get fileMatch(): string[] {
    return [
      'behavior_packs/*/animation_controllers/*.json',
      'development_behavior_packs/*/animation_controllers/*.json',
    ];
  }
}
