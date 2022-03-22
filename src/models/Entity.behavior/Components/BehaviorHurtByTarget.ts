import { MinecraftEntities } from '../../../minecraft/types/MinecraftEntities';

export interface BehaviorHurtByTarget {
  alert_same_type?: boolean;
  entity_types?: MinecraftEntities[];
  hurt_owner?: boolean;
}
