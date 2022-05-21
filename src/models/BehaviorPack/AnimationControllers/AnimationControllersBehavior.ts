import { AnimationControllerProperty } from './Definitions';

export class AnimationControllersBehavior {
  /** @TJS-pattern ^(?:controller.animation.)+[a-z]+$ */
  [property_name: string]: AnimationControllerProperty;
}
