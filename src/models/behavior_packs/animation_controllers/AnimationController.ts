import { AnimationControllerProperties } from './AnimationControllerProperties';

export class AnimationController {
  /** @TJS-pattern ^(?:controller.animation.)+[a-z]+$ */
  [property_name: string]: AnimationControllerProperties;
}
