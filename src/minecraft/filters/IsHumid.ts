import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface IsHumid extends MinecraftFilterBase {
  test?: 'is_humid';
  value?: boolean;
}
