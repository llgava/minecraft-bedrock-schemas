import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface IsPersistent extends MinecraftFilterBase {
  test?: 'is_persistent';
  value?: boolean;
}
