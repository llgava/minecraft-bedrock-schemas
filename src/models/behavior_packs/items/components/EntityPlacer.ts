import { MinecraftBlocks } from '@minecraft/types/MinecraftBlocks';
import { MinecraftEntities } from '@minecraft/types/MinecraftEntities';

export interface EntityPlacer {
  dispense_on?: string[] | MinecraftBlocks[];
  entity?: MinecraftEntities | string;
  use_on?: MinecraftBlocks[] | string[];
}
