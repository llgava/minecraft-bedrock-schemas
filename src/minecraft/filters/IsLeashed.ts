import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface IsLeashed extends MinecraftFilterBase {
  test?: 'is_leashed';
  value?: boolean;
}
