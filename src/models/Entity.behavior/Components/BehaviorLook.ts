import { MinecraftFilters } from '../../../minecraft/types/MinecraftFilters';

export interface BehaviorLook {
  angle_of_view_horizontal?: number;
  angle_of_view_vertical?: number;
  filters?: MinecraftFilters;
  look_distance?: number;
  look_time?: [number, number];
  probability?: number;
}
