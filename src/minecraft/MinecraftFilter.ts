import { MinecraftFilters } from './types/MinecraftFilters';

export interface MinecraftFilterAllOf {
  any_of?: MinecraftFilters[];
  all_of?: MinecraftFilters[];
  none_of?: MinecraftFilters[];
}
