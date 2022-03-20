import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface SurfaceMob extends MinecraftFilterBase {
  test?: 'surface_mob';
  value?: boolean;
}
