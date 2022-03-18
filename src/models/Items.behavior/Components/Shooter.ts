import { MinecraftItems } from '../../../minecraft/types/MinecraftItems';

export interface Shooter {
  max_draw_duration?: number;
  charge_on_draw?: boolean;
  scale_power_by_draw_duration?: boolean;
  ammunition?: MinecraftItems[] | string[];
}
