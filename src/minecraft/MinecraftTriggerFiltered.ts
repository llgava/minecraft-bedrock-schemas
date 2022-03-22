import { MinecraftTrigger } from './MinecraftTrigger';
import { MinecraftFilters } from './types/MinecraftFilters';

export interface MinecraftTriggerFiltered extends MinecraftTrigger {
  filters?: MinecraftFilters;
}
