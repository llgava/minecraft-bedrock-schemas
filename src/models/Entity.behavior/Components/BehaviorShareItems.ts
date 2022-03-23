import { MinecraftEntityTypes } from '@minecraft/MinecraftEntityTypes';

export interface BehaviorShareItems {
  entity_types?: MinecraftEntityTypes;
  goal_radius?: number;
  max_dist?: number;
  speed_multiplier?: number;
}
