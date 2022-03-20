import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface InLava extends MinecraftFilterBase {
  test?: 'in_lava';
  value?: boolean;
}
