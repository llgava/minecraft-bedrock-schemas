import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface IsSneaking extends MinecraftFilterBase {
  test?: 'is_sneaking';
  value?: boolean;
}
