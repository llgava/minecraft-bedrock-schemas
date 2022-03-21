import { MinecraftFiltersOf } from '../../../minecraft/MinecraftFilterOf';
import { MinecraftFilters } from '../../../minecraft/types/MinecraftFilters';

export interface EntitySensor {
  event?: string;
  event_filters?: MinecraftFiltersOf | MinecraftFilters;
  maximum_count?: number;
  minimum_count?: number;
  relative_range?: boolean;
  require_all?: boolean;
  sensor_range?: number;
}
