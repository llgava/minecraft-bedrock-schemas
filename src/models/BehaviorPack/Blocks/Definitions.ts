import { MinecraftTarget } from '@minecraft/MinecraftTarget';
import { MinecraftTriggerConditioning } from '@minecraft/MinecraftTriggerConditioning';
import { MinecraftCollision } from '@minecraft/MinecraftCollision';
import { MinecraftCreativeCategories } from '@minecraft/types/MinecraftCreativeCategories';
import { Flammable } from './Components/Flammable';
import { MaterialInstances } from './Components/MaterialInstances';
import { OnFallOn } from './Components/OnFallOn';
import { OnTick } from './Components/OnTick';
import { PlacementFilter } from './Components/PlacementFilter';
import { Ticking } from './Components/Ticking';
import { AddMobEffect } from './EventsReponse/AddMobEffect';
import { Damage } from './EventsReponse/Damage';
import { PlayEffect } from './EventsReponse/PlayEffect';
import { PlaySound } from './EventsReponse/PlaySound';
import { RemoveMobEffect } from './EventsReponse/RemoveMobEffect';
import { RunCommand } from './EventsReponse/RunCommand';
import { SetBlock } from './EventsReponse/SetBlock';
import { SetBlockAtPos } from './EventsReponse/SetBlockAtPos';
import { SetBlockProperty } from './EventsReponse/SetBlockProperty';
import { SpawnLoot } from './EventsReponse/SpawnLoot';
import { Teleport } from './EventsReponse/Teleport';
import { TransformItem } from './EventsReponse/TransformItem';
import { CraftingTable } from './Components/CraftingTable';

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

