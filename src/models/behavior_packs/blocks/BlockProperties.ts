import { MinecraftTarget } from '@minecraft/MinecraftTarget';
import { MinecraftTriggerConditioning } from '@minecraft/MinecraftTriggerConditioning';
import { MinecraftCollision } from '@minecraft/MinecraftCollision';
import { MinecraftCreativeCategories } from '@minecraft/types/MinecraftCreativeCategories';
import { Flammable } from './components/Flammable';
import { MaterialInstances } from './components/MaterialInstances';
import { OnFallOn } from './components/OnFallOn';
import { OnTick } from './components/OnTick';
import { PlacementFilter } from './components/PlacementFilter';
import { Ticking } from './components/Ticking';
import { AddMobEffect } from './events/AddMobEffect';
import { Damage } from './events/Damage';
import { PlayEffect } from './events/PlayEffect';
import { PlaySound } from './events/PlaySound';
import { RemoveMobEffect } from './events/RemoveMobEffect';
import { RunCommand } from './events/RunCommand';
import { SetBlock } from './events/SetBlock';
import { SetBlockAtPos } from './events/SetBlockAtPos';
import { SetBlockProperty } from './events/SetBlockProperty';
import { SpawnLoot } from './events/SpawnLoot';
import { Teleport } from './events/Teleport';
import { TransformItem } from './events/TransformItem';
import { CraftingTable } from './components/CraftingTable';

// Description
export interface Description {
  /** @TJS-pattern ^(?:(?:(?!minecraft|minecon))+[a-z]*:[a-z_]*)+$ */
  identifier: string;
  is_experimental?: boolean;
  register_to_creative_menu?: boolean;
  properties?: Properties;
}

// Properties
interface Properties {
  [property_name: string]: number[] | boolean[];
}

// Components
export interface Components extends ExperimentalComponents {
  ['minecraft:block_light_emission']?: number;
  ['minecraft:block_light_filter']?: number;
  ['minecraft:breakonpush']?: boolean;
  ['minecraft:crafting_table']?: CraftingTable;
  ['minecraft:creative_category']?: MinecraftCreativeCategories;
  ['minecraft:destroy_time']?: number;
  ['minecraft:explosion_resistance']?: number;
  ['minecraft:flammable']?: Flammable;
  ['minecraft:friction']?: number;
  ['minecraft:immovable']?: boolean;
  ['minecraft:loot']?: string;

  /** @TJS-pattern ^#(?:[0-9a-fA-F]{3}){1,2}$ */
  ['minecraft:map_color']?: string;
  ['minecraft:onlypistonpush']?: boolean;
  ['minecraft:placement_filter']?: PlacementFilter;
  ['minecraft:preventsjumping']?: boolean;
  ['minecraft:random_ticking']?: OnTick;
  ['minecraft:rotation']?: [number, number, number];
  ['minecraft:ticking']?: Ticking;
  ['minecraft:unwalkable']?: boolean;

  // Trigger Components
  ['minecraft:on_fall_on']?: OnFallOn;
  ['minecraft:on_interact']?: MinecraftTriggerConditioning;
  ['minecraft:on_placed']?: MinecraftTriggerConditioning;
  ['minecraft:on_player_destroyed']?: MinecraftTriggerConditioning;
  ['minecraft:on_player_placing']?: MinecraftTriggerConditioning;
  ['minecraft:on_step_off']?: MinecraftTriggerConditioning;
  ['minecraft:on_step_on']?: MinecraftTriggerConditioning;
}

// Experimental Components
export interface ExperimentalComponents {
  /** Experimental toggles required: Holiday Creator Features Experiment */
  ['minecraft:aim_collision']?: boolean | MinecraftCollision;
  /** Experimental toggles required: Holiday Creator Features Experiment */
  ['minecraft:block_collision']?: boolean | MinecraftCollision;
  /** Experimental toggles required: Holiday Creator Features Experiment */
  ['minecraft:breathability']?: 'solid' | 'air';
  /** Experimental toggles required: Holiday Creator Features Experiment */
  ['minecraft:display_name']?: string;
  /** Experimental toggles required: Holiday Creator Features Experiment */
  ['minecraft:geometry']?: string;
  /** Experimental toggles required: Holiday Creator Features Experiment */
  ['minecraft:material_instances']?: MaterialInstances;
  /** Experimental toggles required: Upcoming Creator Featurest */
  ['minecraft:part_visibility']?: any;
  /** Experimental toggles required: Holiday Creator Features Experiment */
  ['minecraft:unit_cube']?: any;
}

// Permutations
export interface Permutations {
  components?: Components;
  conditions?: [];
}

// Events
export interface Events {
  [property_name: string]: EventsReponse;
}

interface EventsReponse {
  sequence?: EventsReponse[];
  add_mob_effect?: AddMobEffect;
  damage?: Damage;
  decrement_stack?: Record<string, unknown>;
  die?: MinecraftTarget;
  play_effect?: PlayEffect;
  play_sound?: PlaySound;
  remove_mob_effect?: RemoveMobEffect;
  run_command?: RunCommand;
  set_block?: SetBlock;
  set_block_at_pos?: SetBlockAtPos;
  set_block_property?: SetBlockProperty;
  spawn_loot?: SpawnLoot;
  swing?: Record<string, unknown>;
  teleport?: Teleport;
  transform_item?: TransformItem;
}
