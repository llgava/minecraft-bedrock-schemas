import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface LightLevel extends MinecraftFilterBase {
  test?: 'light_level';
  value?: number;
}
