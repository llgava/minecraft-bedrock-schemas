import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface HasBiomeTag extends MinecraftFilterBase {
  test?: 'has_biome_tag';
  value?: string;
}
