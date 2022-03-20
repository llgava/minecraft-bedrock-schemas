import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface RiderCount extends MinecraftFilterBase {
  test?: 'rider_count';
  value?: number;
}
