import { MinecraftFilters } from './types/MinecraftFilters';

export interface MinecraftFiltersOf {
  any_of?: MinecraftFilters[];
  all_of?: MinecraftFilters[];
  none_of?: MinecraftFilters[];
}
