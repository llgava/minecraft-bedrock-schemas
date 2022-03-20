import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface IsImmobile extends MinecraftFilterBase {
  test?: 'is_immobile';
  value?: boolean;
}
