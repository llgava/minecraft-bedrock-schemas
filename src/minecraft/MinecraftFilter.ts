import { MinecraftFilterBase } from './MinecraftFilterBase';

export interface MinecraftFilter extends MinecraftFilterBase {
  value?: string | number | boolean;
}
