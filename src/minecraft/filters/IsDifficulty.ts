import { MinecraftFilterBase } from '../MinecraftFilterBase';
import { MinecraftDifficulty } from '../types/MinecraftDifficulty';

export interface IsDifficulty extends MinecraftFilterBase {
  test?: 'is_difficulty';
  value?: MinecraftDifficulty;
}
