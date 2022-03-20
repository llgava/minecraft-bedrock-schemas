import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface HasMobEffect extends MinecraftFilterBase {
  test?: 'has_mob_effect';
  value?: string;
}
