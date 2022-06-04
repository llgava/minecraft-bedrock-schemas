import { MinecraftItems } from '@minecraft/types/MinecraftItems';
import { MinecraftTriggerConditioning } from '@minecraft/MinecraftTriggerConditioning';

export interface Repairable {
  repair_items?: MinecraftItems[] | string[];
  on_repaired?: MinecraftTriggerConditioning;
}
