import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface InWaterOrRain extends MinecraftFilterBase {
  test?: 'in_water_or_rain';
  value?: boolean;
}
