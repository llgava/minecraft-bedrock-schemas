import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface DistanceToNearestPlayer extends MinecraftFilterBase {
  test?: 'distance_to_nearest_player';
  value?: number;
}
