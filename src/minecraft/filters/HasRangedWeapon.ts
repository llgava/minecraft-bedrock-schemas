import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface HasRangedWeapon extends MinecraftFilterBase {
  test?: 'has_nametag';
  value?: boolean;
}
