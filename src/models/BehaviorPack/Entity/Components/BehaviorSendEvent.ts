export interface BehaviorSendEvent {
  cast_duration?: number;
  look_at_target?: boolean;
  sequence?: Sequence[];
}

interface Sequence {
  base_delay?: number;
  event?: string;
  sound_event?: string;
}
