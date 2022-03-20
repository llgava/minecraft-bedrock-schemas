import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface IsRiding extends MinecraftFilterBase {
  test?: 'is_riding';
  value?: boolean;
}
