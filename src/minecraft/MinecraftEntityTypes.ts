import { MinecraftFilters } from './types/MinecraftFilters';

export interface EntityTupes {
  filters?: MinecraftFilters;
  max_dist?: number;
  must_see?: number;
  must_see_forget_duration?: number;
  sprint_speed_multiplier?: number;
  walk_speed_multiplier?: number;
}
