import { MinecraftTriggerConditioning } from '@minecraft/MinecraftTriggerConditioning';

export interface OnFallOn extends MinecraftTriggerConditioning {
  min_fall_distance: number;
}
