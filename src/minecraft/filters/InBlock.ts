import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface InBlock extends MinecraftFilterBase {
  test?: 'in_block';
  value?: string;
}
