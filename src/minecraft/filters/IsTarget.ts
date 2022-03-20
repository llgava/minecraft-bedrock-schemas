import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface IsTarget extends MinecraftFilterBase {
  test?: 'is_target';
  value?: boolean;
}
