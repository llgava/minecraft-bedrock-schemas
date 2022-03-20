import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface HourlyClockTime extends MinecraftFilterBase {
  test?: 'hourly_clock_time';
  value?: number;
}
