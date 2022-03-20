import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface IsBrightness extends MinecraftFilterBase {
  test?: 'is_brightness';
  value?: number;
}
