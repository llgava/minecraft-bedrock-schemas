import { MinecraftTrigger } from './MinecraftTrigger';

export interface MinecraftTriggerConditioning extends MinecraftTrigger {
  conditions?: string;
}
