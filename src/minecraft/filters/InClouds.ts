import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface InClouds extends MinecraftFilterBase {
  test?: 'in_clouds';
  value?: boolean;
}
