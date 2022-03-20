import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface HasContainerOpen extends MinecraftFilterBase {
  test?: 'has_container_open';
  value?: boolean;
}
