export interface AnimationsProperty {
  loop: boolean;
  timeline: Timeline;
  animation_length: number;
}

// States
export interface Timeline {
  /** @TJS-pattern ^([0-9]+[.])?[0-9]+$ */
  [property_name: string]: string[];
}
