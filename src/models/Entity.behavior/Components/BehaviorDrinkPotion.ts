import { MinecraftFilters } from '../../../minecraft/types/MinecraftFilters';

export interface BehaviorDrinkPotion {
  potions?: Potions[];
  speed_modifier?: number;
}

interface Potions {
  chance?: number;
  filters?: MinecraftFilters;
  id?: number;
}
