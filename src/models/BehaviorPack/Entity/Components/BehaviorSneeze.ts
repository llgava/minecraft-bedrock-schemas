import { MinecraftEntityTypes } from '@minecraft/MinecraftEntityTypes';

export interface BehaviorSneeze {
  cooldown_time?: number;
  drop_item_chance?: number;
  entity_types?: MinecraftEntityTypes;
  loot_table?: string;
  prepare_sound?: string;
  prepare_time?: number;
  probability?: number;
  sound?: string;
  within_radius?: number;
}
