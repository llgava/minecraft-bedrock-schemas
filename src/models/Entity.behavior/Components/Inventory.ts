import { MinecraftContainer } from '@minecraft/types/MinecraftContainers';

export interface Inventory {
  additional_slots_per_strength?: number;
  can_be_siphoned_from?: boolean;
  container_type?: MinecraftContainer;
}
