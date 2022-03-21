import { MinecraftFilters } from '../../../minecraft/types/MinecraftFilters';

export interface Healable {
  filters?: MinecraftFilters;
  force_use?: boolean;
  items?: Items[]
}

interface Items {
  heal_amount?: number;
  item?: string;
}
