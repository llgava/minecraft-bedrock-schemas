import { MinecraftFiltersType } from './types/MinecraftFiltersType';

export interface MinecraftFiltersOf {
  any_of?: MinecraftFiltersType[];
  all_of?: MinecraftFiltersType[];
  none_of?: MinecraftFiltersType[];
}
