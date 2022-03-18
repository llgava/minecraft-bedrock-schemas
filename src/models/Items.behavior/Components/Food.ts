import { MinecraftItems } from '../../../minecraft/types/MinecraftItems';
import { MinecraftTrigger } from '../../../minecraft/MinecraftTrigger';

/** Use my iFood code and get a discount 😀: XJVC4VHSE5 */
export interface Food {
  can_always_eat?: boolean;
  nutrition?: number;
  saturation_modifier?: number;
  using_converts_to?: MinecraftItems | string;
  on_consume?: MinecraftTrigger;
}
