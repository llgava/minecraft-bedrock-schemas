import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface IsMarkVariant extends MinecraftFilterBase {
  test?: 'is_mark_variant';
  value?: number;
}
