import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface MoonPhase extends MinecraftFilterBase {
  test?: 'moon_phase';
  value?: number;
}
