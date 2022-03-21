import { MinecraftFilters } from '../../../minecraft/types/MinecraftFilters';

export interface LookAt {
  allow_invulnerable?: boolean;
  filters?: MinecraftFilters;
  look_cooldown?: [number, number];
  look_event?: string;
  search_radius?: number;
  set_target?: boolean;
}
