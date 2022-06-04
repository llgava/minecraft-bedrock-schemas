export interface Rideable {
  controlling_seat?: number;
  crouching_skip_interact?: boolean;
  family_types?: string[];
  interact_text?: string;
  priority?: number;
  pull_in_entities?: boolean;
  rider_can_interact?: boolean;
  seat_count?: number;
  seats?: Seats[];
}

interface Seats {
  lock_rider_rotation?: number;
  max_rider_count?: number;
  min_rider_count?: number;
  position?: [number, number, number];
  rotate_rider_by?: string;
}
