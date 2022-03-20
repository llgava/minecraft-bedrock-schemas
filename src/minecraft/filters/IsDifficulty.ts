import { MinecraftFilterBase } from '../MinecraftFilterBase';
import { MinecraftDifficulty } from '../types/MinecraftDifficulty';

export interface IsColor extends MinecraftFilterBase {
  value?: MinecraftDifficulty;
}
