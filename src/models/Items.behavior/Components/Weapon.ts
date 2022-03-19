import { MinecraftTriggerConditioning } from '../../../minecraft/MinecraftTriggerConditioning';

export interface Weapon {
  on_hit_block?: MinecraftTriggerConditioning;
  on_hurt_entity?: MinecraftTriggerConditioning;
  on_not_hurt_entity?: MinecraftTriggerConditioning;
}
