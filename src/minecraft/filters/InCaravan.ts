import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface InCaravan extends MinecraftFilterBase {
  test?: 'in_caravan';
  value?: boolean;
}
