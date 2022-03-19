import { MinecraftTarget } from '@minecraft/MinecraftTarget';

export interface RunCommand extends MinecraftTarget {
  command?: string[];
}
