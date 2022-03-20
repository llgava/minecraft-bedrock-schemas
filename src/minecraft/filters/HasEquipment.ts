import { MinecraftFilterBase } from '../MinecraftFilterBase';
import { MinecraftDomains } from '../types/MinecraftDomains';

export interface HasEquipment extends MinecraftFilterBase {
  test?: 'has_equipment';
  domain?: MinecraftDomains;
  value?: string;
}
