import { MinecraftTarget } from './MinecraftTarget';

export interface MinecraftTrigger extends MinecraftTarget {
  event?: string;
}
