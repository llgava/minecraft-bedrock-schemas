import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface ClockTime extends MinecraftFilterBase {
  test?: 'clock_time';
  value?: number;
}
