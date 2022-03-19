import { MinecraftTrigger } from '@minecraft/MinecraftTrigger';
import { MinecraftBlocks } from '@minecraft/types/MinecraftBlocks';

export interface Digger {
  destroy_speeds?: DestroySpeed[];
  use_efficiency?: boolean;
  on_dig?: MinecraftTrigger;
}

interface DestroySpeed {
  block: string | MinecraftBlocks;
  speed: number;
}
