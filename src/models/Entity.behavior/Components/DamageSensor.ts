import { MinecraftFiltersOf } from '../../../minecraft/MinecraftFilterOf';
import { MinecraftTarget } from '../../../minecraft/MinecraftTarget';
import { MinecraftDamageSource } from '../../../minecraft/types/MinecraftDamageSource';
import { MinecraftFilters } from '../../../minecraft/types/MinecraftFilters';

export interface DamageSensor {
  triggers?: Triggers[]
}

interface Triggers {
  cause?: MinecraftDamageSource;
  damage_modifier?: number;
  damage_multiplier?: number;
  deals_damage?: boolean;
  on_damage?: OnDamage;
  on_damage_sound_event?: string;
}

interface OnDamage {
  filters?: MinecraftFiltersOf | MinecraftFilters;
  target?: MinecraftTarget;
  event?: string;
}
