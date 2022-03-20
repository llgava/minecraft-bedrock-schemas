import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface HasNametag extends MinecraftFilterBase {
  test?: 'has_nametag';
  value?: boolean;
}
