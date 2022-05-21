export interface BehaviorTempt {
  can_get_scared?: boolean;
  can_tempt_verticlly?: boolean;
  can_tempt_while_ridden?: boolean;
  items?: string[];
  sound_interval?: [number, number];
  speed_multiplier?: number;
  tempt_sound?: string;
  whithin_radius?: number;
}
