import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface HasTag extends MinecraftFilterBase {
  test?: 'has_tag';
  value?: string;
}
