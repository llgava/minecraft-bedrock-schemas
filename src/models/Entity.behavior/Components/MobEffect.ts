import { MinecraftFilters } from '@minecraft/types/MinecraftFilters';

export interface MobEffect {
  effect_range?: number;
  effect_time?: number;
  entity_filter?: MinecraftFilters;
  mob_effect?: string;
}
