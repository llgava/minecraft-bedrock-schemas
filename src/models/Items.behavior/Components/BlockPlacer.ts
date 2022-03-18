import { MinecraftBlocks } from '../../../minecraft/types/MinecraftBlocks';

export interface BlockPlacer {
  block?: MinecraftBlocks | string;
  use_on?: MinecraftBlocks[] | string[];
  use_block_description?: boolean;
}
