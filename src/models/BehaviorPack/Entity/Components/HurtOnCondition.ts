import { MinecraftFilters } from '@minecraft/types/MinecraftFilters';

export interface HurtOnCondition {
  damage_conditions?: DamageCondition[];
}

interface DamageCondition {
  damage_per_tick?: number;
  filters?: MinecraftFilters;
}
