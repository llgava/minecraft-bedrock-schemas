import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface Weather extends MinecraftFilterBase {
  test?: 'weather';
  value?: string;
}
