import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface IsMissingHealth extends MinecraftFilterBase {
  test?: 'is_missing_health';
  value?: boolean;
}
