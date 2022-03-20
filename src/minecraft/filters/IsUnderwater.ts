import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface IsUnderwater extends MinecraftFilterBase {
  test?: 'is_underwater';
  value?: boolean;
}
