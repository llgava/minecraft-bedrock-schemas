import { MinecraftFilterBase } from '../MinecraftFilterBase';
import { MinecraftTemperatures } from '../types/MinecraftTemperatures';

export interface IsTemperatureType extends MinecraftFilterBase {
  value?: MinecraftTemperatures;
}
