import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface InNether extends MinecraftFilterBase {
  test?: 'in_nether';
  value?: boolean;
}
