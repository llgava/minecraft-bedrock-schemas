import { MinecraftFilters } from '@minecraft/types/MinecraftFilters';

export interface EnvironmentSensor {
  triggers?: Trigger[];
}

interface Trigger {
  filters?: MinecraftFilters;
  event?: string;
}
