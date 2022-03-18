import { MinecraftBlocks } from '../../../minecraft/types/MinecraftBlocks';
import { BlockFaces } from '../Definitions';

export interface PlacementFilter {
  allowed_faces?: BlockFaces;
  block_filter?: MinecraftBlocks[] | string;
}
