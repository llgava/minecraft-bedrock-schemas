import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface IsWeather extends MinecraftFilterBase {
  test?: 'is_weather';
  value?: string;
}
