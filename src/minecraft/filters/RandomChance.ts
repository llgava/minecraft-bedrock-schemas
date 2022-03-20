import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface RandomChance extends MinecraftFilterBase {
  test?: 'random_chance';
  value?: number;
}
