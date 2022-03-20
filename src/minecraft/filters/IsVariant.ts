import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface IsVariant extends MinecraftFilterBase {
  test?: 'is_variant';
  value?: number;
}
