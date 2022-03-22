import { EntityTupes } from '../../../minecraft/MinecraftEntityTypes';

export interface BehaviorDefendTrustedTarget {
  aggro_sound?: string;
  attack_interval?: number;
  entity_types?: EntityTupes[]
  must_see?: boolean;
  must_see_distance?: number;
  within_radius?: number;
}
