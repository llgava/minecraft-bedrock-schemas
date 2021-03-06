import { MinecraftFilterBase } from '../MinecraftFilterBase';
import { MinecraftBiomes } from '../types/MinecraftBiomes';

export interface IsBiome extends MinecraftFilterBase {
  test?: 'is_biome';
  value?: MinecraftBiomes;
}
