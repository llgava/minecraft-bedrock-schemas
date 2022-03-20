import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface IsUnderground extends MinecraftFilterBase {
  test?: 'is_underground';
  value?: boolean;
}
