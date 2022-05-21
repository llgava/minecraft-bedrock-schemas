import { MinecraftItems } from '@minecraft/types/MinecraftItems';

export interface Shooter {
  ammunition?: MinecraftItems[] | string[];
  charge_on_draw?: boolean;
  max_draw_duration?: number;
  max_launch_power?: number;
  launch_power_scale?: number;
  scale_power_by_draw_duration?: boolean;
}
