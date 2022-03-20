import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface IsVisible extends MinecraftFilterBase {
  test?: 'is_visible';
  value?: boolean;
}
