import { AnimationControllerProperties } from './AnimationControllerProperties';

export class AnimationController {
  /** @pattern ^(?:controller.animation.)+[a-z]+$ */
  [property_name: string]: AnimationControllerProperties;
}
