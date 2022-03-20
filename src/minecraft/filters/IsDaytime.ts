import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface IsDaytime extends MinecraftFilterBase {
  test?: 'is_daytime';
  value?: boolean;
}
