import { MinecraftTarget } from '../../../minecraft/MinecraftTarget';

export interface AddMobEffect extends MinecraftTarget {
  amplifier?: number;
  duration?: number;
  effect?: string;
}
