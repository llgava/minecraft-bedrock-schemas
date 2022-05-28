import { AnimationsProperty } from './AnimationProperties';

export class Animation {
  /** @TJS-pattern ^(?:animation.)+[a-z]+$ */
  [property_name: string]: AnimationsProperty;
}
