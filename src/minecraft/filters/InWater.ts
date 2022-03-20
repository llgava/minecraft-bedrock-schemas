import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface InWater extends MinecraftFilterBase {
  test?: 'in_water';
  value?: boolean;
}
