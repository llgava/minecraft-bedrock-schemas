import { MinecraftEntities } from '@minecraft/types/MinecraftEntities';

export interface BehaviorFollowCaravan {
  entity_count?: number;
  entity_types?: MinecraftEntities[];
  speed_multiplier?: number;
}
