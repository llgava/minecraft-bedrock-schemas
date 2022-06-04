import { MinecraftTarget } from '@minecraft/MinecraftTarget';

export interface PlaySound extends MinecraftTarget {
  sound?: string;
}
