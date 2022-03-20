import { MinecraftFilterBase } from '../MinecraftFilterBase';
import { MinecraftDamageSource } from '../types/MinecraftDamageSource';

export interface HasDamage extends MinecraftFilterBase {
  test?: 'has_damage'
  value?: MinecraftDamageSource;
}
