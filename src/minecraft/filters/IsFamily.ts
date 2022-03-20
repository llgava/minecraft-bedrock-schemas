import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface IsFamily extends MinecraftFilterBase {
  test?: 'is_family';
  value?: string;
}
