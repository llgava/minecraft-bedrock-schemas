import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface IsAvoidingMobs extends MinecraftFilterBase {
  test?: 'is_avoiding_mobs';
  value?: boolean;
}
