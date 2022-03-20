import { MinecraftFilterBase } from '../MinecraftFilterBase';
import { MinecraftTemperatures } from '../types/MinecraftTemperatures';

export interface IsTemperatureType extends MinecraftFilterBase {
  test?: 'is_temperature_type';
  value?: MinecraftTemperatures;
}
