import { AnimationsProperty } from './AnimationProperties';

export class Animation {
  /** @pattern ^(?:animation.)+[a-z]+$ */
  [property_name: string]: AnimationsProperty;
}
