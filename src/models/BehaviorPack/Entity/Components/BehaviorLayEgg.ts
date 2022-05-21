import { MinecraftTriggerFiltered } from '@minecraft/MinecraftTriggerFiltered';

export interface BehaviorLayEgg {
  /** is_experimental: true */
  allow_laying_from_below?: boolean;
  /** is_experimental: true */
  egg_type?: string;
  /** is_experimental: true */
  goal_radius?: number;
  /** is_experimental: true */
  lay_egg_sound?: string;
  lay_seconds?: number;
  on_lay?: MinecraftTriggerFiltered;
  search_height?: number;
  search_range?: number;
  speed_multiplier?: number;
  /** is_experimental: true */
  target_blocks?: string[];
  /** is_experimental: true */
  target_materials_above_block?: string[];
  /** is_experimental: true */
  use_default_animation?: boolean;
}
