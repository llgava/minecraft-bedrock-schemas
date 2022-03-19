import { BlockFaces } from '@minecraft/types/MinecraftBlockFaces';
import { MinecraftBlocks } from '@minecraft/types/MinecraftBlocks';

export interface PlacementFilter {
  allowed_faces?: BlockFaces[] | string;
  block_filter?: MinecraftBlocks[] | string;
}
