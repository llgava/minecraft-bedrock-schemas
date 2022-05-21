import { AnimationsProperty } from './Definitions';

export class AnimationsBehavior {
  /** @TJS-pattern ^(?:animation.)+[a-z]+$ */
  [property_name: string]: AnimationsProperty;
}
