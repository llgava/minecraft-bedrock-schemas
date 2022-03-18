import { MinecraftArmorTextureTypes } from '../../../minecraft/types/MinecraftArmorTextureTypes';

export interface Armor {
  protection?: number;
  texture_type?: MinecraftArmorTextureTypes;
}
