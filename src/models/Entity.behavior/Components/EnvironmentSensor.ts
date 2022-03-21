import { MinecraftFiltersOf } from '../../../minecraft/MinecraftFilterOf';
import { MinecraftFilters } from '../../../minecraft/types/MinecraftFilters';

export interface EnvironmentSensor {
  triggers?: Trigger[];
}

interface Trigger {
  filters?: MinecraftFiltersOf | MinecraftFilters;
  event?: string;
}
