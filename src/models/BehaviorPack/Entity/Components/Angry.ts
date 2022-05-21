import { MinecraftFilters } from '@minecraft/types/MinecraftFilters';

export interface Angry {
  angry_sound?: string;
  broadcast_anger?: boolean;
  broadcast_anger_on_attack?: boolean;
  broadcast_anger_on_being_attacked?: boolean;
  broadcast_filters?: MinecraftFilters;
  broadcast_range?: number;
  broadcast_targets?: string[];
  calm_event?: string;
  duration?: number;
  duration_delta?: number;
  filters?: MinecraftFilters;
  sound_interval?: [number, number];
}
