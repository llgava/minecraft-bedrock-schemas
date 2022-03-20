import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface InactivityTimer extends MinecraftFilterBase {
  test?: 'inactivity_timer';
  value?: number;
}
