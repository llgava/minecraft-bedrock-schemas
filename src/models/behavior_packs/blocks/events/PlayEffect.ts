import { MinecraftTarget } from '@minecraft/MinecraftTarget';

export interface PlayEffect extends MinecraftTarget {
  data?: number;
  effect?: string;
}
