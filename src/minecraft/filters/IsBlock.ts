import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface IsBlock extends MinecraftFilterBase {
  test?: 'is_block';
  value?: string;
}
