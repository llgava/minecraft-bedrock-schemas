import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface WeatherAtPosition extends MinecraftFilterBase {
  test?: 'weather_at_position';
  value?: string;
}
