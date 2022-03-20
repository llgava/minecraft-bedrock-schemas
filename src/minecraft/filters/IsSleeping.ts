import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface IsSleeping extends MinecraftFilterBase {
  test?: 'is_sleeping';
  value?: boolean;
}
