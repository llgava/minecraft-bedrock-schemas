import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface IsInVillage extends MinecraftFilterBase {
  test?: 'is_in_village';
  value?: boolean;
}
