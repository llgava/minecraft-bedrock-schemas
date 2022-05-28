import { MinecraftFilters } from '@minecraft/types/MinecraftFilters';

export interface AreaAttack {
  cause?: string;
  damage_per_tick?: number;
  damage_range?: number;
  entity_filter?: MinecraftFilters;
}
