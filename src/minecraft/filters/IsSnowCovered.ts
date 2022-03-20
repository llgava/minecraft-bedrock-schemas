import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface IsSnowCovered extends MinecraftFilterBase {
  test?: 'is_snow_covered';
  value?: boolean;
}
