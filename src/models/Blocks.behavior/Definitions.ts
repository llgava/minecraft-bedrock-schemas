import { MinecraftCondition } from '../../minecraft/MinecraftCondition';
import { MinecraftTarget } from '../../minecraft/MinecraftTarget';
import { MinecraftTriggerConditioning } from '../../minecraft/MinecraftTriggerConditioning';
import { Collision } from './Components/Collision';
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

export interface Description {
  /** @TJS-pattern ^(?:(?:(?!minecraft|minecon))+[a-z]*:[a-z_]*)+$ */
  identifier: string;
  is_experimental?: boolean;
  register_to_creative_menu?: boolean;
  properties?: Properties;
}

export interface Permutations extends MinecraftCondition {
  components?: Components;
}

export interface Components {
  ['minecraft:block_light_absorption']?: number;
  ['minecraft:block_light_emission']?: number;
  ['minecraft:breakonpush']?: boolean;
  ['minecraft:breathability']?: 'solid' | 'air';
  ['minecraft:destroy_time']?: number;
  ['minecraft:display_name']?: string;
  ['minecraft:entity_collision']?: false | Collision;
  ['minecraft:explosion_resistance']?: number;
  ['minecraft:flammable']?: Flammable;
  ['minecraft:friction']?: number;
  ['minecraft:geometry']?: string;
  ['minecraft:immovable']?: boolean;

  /** @TJS-pattern ^#(?:[0-9a-fA-F]{3}){1,2}$ */
  ['minecraft:map_color']?: string;

  ['minecraft:material_instances']?: MaterialInstances;
  ['minecraft:onlypistonpush']?: boolean;
  ['minecraft:pick_collision']?: false | Collision;
  ['minecraft:placement_filter']?: PlacementFilter;
  ['minecraft:preventsjumping']?: boolean;
  ['minecraft:random_ticking']?: OnTick;
  ['minecraft:rotation']?: [number, number, number];
  ['minecraft:ticking']?: Ticking;
  ['minecraft:unit_cube']?: string;
  ['minecraft:unwalkable']?: boolean;

  /* Trigger Components */
  ['minecraft:on_fall_on']?: OnFallOn;
  ['minecraft:on_interact']?: MinecraftTriggerConditioning;
  ['minecraft:on_placed']?: MinecraftTriggerConditioning;
  ['minecraft:on_player_destroyed']?: MinecraftTriggerConditioning;
  ['minecraft:on_player_placing']?: MinecraftTriggerConditioning;
  ['minecraft:on_step_off']?: MinecraftTriggerConditioning;
  ['minecraft:on_step_on']?: MinecraftTriggerConditioning;
}

export interface Events {
  [property_name: string]: EventsReponse;
}

/* Block Description */
interface Properties {
  [property_name: string]: number[] | boolean[];
}

/* Block Components */
export type BlockFaces =
  | 'up'
  | 'down'
  | 'north'
  | 'south'
  | 'east'
  | 'west'
  | 'side'
  | 'all';

interface EventsSequence {
  sequence?: EventsReponse[];
}

interface EventsReponse extends EventsSequence {
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

