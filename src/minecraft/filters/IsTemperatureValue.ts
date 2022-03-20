import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface IsTemperatureValue extends MinecraftFilterBase {
  test?: 'is_temperature_value';
  value?: number;
}
