import { MinecraftTrigger } from '../../../minecraft/MinecraftTrigger';

export interface Digger {
  destroy_speeds?: boolean;
  use_efficiency?: boolean;
  on_dig?: MinecraftTrigger;
}
