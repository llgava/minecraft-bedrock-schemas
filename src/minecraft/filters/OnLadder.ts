import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface OnLadder extends MinecraftFilterBase {
  test?: 'on_ladder';
  value?: boolean;
}
