import { MinecraftFilterBase } from '../MinecraftFilterBase';
import { MinecraftDyeColors } from '../types/MinecraftDyeColors';

export interface IsColor extends MinecraftFilterBase {
  value?: MinecraftDyeColors;
}
