import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface IsClimbing extends MinecraftFilterBase {
  test?: 'is_climbing';
  value?: boolean;
}
