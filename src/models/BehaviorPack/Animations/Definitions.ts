export interface AnimationsProperty {
  loop: boolean;
  timeline: Timeline
  animation_length: number;
}

// States
export interface Timeline {
  [property_name: string]: string[];
}
