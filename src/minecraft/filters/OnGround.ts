import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface OnGround extends MinecraftFilterBase {
  test?: 'on_ground';
  value?: boolean;
}
