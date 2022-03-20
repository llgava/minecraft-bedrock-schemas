import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface HasTarget extends MinecraftFilterBase {
  test?: 'has_target';
  value?: boolean;
}
