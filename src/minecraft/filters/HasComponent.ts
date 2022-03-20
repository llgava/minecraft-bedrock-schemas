import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface HasComponent extends MinecraftFilterBase {
  test?: 'has_component';
  value?: string;
}
