import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface MoonIntensity extends MinecraftFilterBase {
  test?: 'moon_intensity';
  value?: number;
}
