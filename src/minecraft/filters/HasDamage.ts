import { MinecraftFilterBase } from '../MinecraftFilterBase';
import { MinecraftDamageSource } from '../types/MinecraftDamageSource';

export interface HasDamage extends MinecraftFilterBase {
  value?: MinecraftDamageSource;
}
