import { MinecraftFilters } from '../../../minecraft/types/MinecraftFilters';

export interface CelebrateHunt {
  broadcast?: boolean;
  celeberation_targets?: MinecraftFilters;
  celebrate_sound?: number;
  duration?: number;
  radius?: number;
  sound_interval?: [number, number];
}
