import { MinecraftFilters } from '../../../minecraft/types/MinecraftFilters';

export interface EntitySensor {
  event?: string;
  event_filters?: MinecraftFilters;
  maximum_count?: number;
  minimum_count?: number;
  relative_range?: boolean;
  require_all?: boolean;
  sensor_range?: number;
}
