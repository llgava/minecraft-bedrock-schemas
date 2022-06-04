import { MinecraftTriggerFiltered } from '@minecraft/MinecraftTriggerFiltered';
import { BehaviorMove } from './BehaviorMove';

export interface BehaviorMoveToBlock extends BehaviorMove {
  on_reach?: MinecraftTriggerFiltered;
  on_stay_completed?: MinecraftTriggerFiltered;
  start_chance?: number;
  stay_duration?: number;
  target_blocks?: string[];
  target_offset?: [number, number, number];
  target_selection_method?: string;
  tick_interval?: number;
}
