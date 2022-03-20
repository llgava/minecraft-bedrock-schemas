import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface IsAltitude extends MinecraftFilterBase {
  test?: 'is_altitude';
  value?: number;
}
