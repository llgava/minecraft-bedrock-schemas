import { MinecraftBlocks, MinecraftSubjects, MinecraftTarget } from './Minecraft';

export interface IBlocksDescription {
  /** @TJS-pattern ^(?:(?:(?!minecraft|minecon)\w(?!minecon\w))+[a-z]*:[a-z_]*)+$ */
  identifier?: string;
  is_experimental?: boolean;
  register_to_creative_menu?: boolean;
  properties?: IProperties;
}

export interface IBlocksPermutations {
  condition: string;
  components: IBlocksComponents;
}

export interface IBlocksComponents {
  ['minecraft:block_light_absorption']?: number;
  ['minecraft:block_light_emission']?: number;
  ['minecraft:breakonpush']?: boolean;
  ['minecraft:breathability']?: 'solid' | 'air';
  ['minecraft:destroy_time']?: number;
  ['minecraft:display_name']?: string;
  ['minecraft:entity_collision']?: false | ICollision;
  ['minecraft:explosion_resistance']?: number;
  ['minecraft:flammable']?: IFlammable;
  ['minecraft:friction']?: number;
  ['minecraft:geometry']?: string;
  ['minecraft:immovable']?: boolean;

  /** @TJS-pattern ^#(?:[0-9a-fA-F]{3}){1,2}$ */
  ['minecraft:map_color']?: '#FF00FF' | string;

  ['minecraft:material_instances']?: IMaterialInstances;
  ['minecraft:onlypistonpush']?: boolean;
  ['minecraft:pick_collision']?: false | ICollision;
  ['minecraft:placement_filter']?: IPlacementFilter;
  ['minecraft:preventsjumping']?: boolean;
  ['minecraft:random_ticking']?: IOnTick;
  ['minecraft:rotation']?: [number, number, number];
  ['minecraft:ticking']?: ITicking;
  ['minecraft:unit_cube']?: string;
  ['minecraft:unwalkable']?: boolean;

  /* Trigger Components */
  ['minecraft:on_fall_on']?: IOnFallOn;
}

interface IOnFallOn extends MinecraftTarget {
  condition: string;
  event: IBlocksEvents;
  min_fall_distance: number;
}


export interface IBlocksEvents { [property_name: string]: IEventsResponse | IBlocksEventsInSequence; }

/* BLOCK DESCRIPTION */
interface IProperties { [property_name: string]: number[] | boolean[]; }

/* BLOCK COMPONENTS */
interface ICollision {
  origin?: [number, number, number];
  size?: [number, number, number];
}

interface IFlammable {
  burn_odds?: number;
  flame_odds?: number;
}

interface IMaterialInstances {
  '*'?: {
    render_method?: 'opaque' | 'alpha_test';
    texture?: string;
  };
}

type PlacementFilterFaces =
  | 'up'
  | 'down'
  | 'north'
  | 'south'
  | 'east'
  | 'west'
  | 'side'
  | 'all';

interface IPlacementFilter {
  allowed_faces?: PlacementFilterFaces;
  block_filter?: MinecraftBlocks[] | string;
}

interface IOnTick {
  on_tick?: {
    condition?: string;
    event?: string;
    target?: MinecraftSubjects;
    range?: [number, number];
  };
}

interface ITicking extends IOnTick {
  looping?: boolean;
  range?: [number, number];
}


/* BLOCK EVENTS RESPONSE */
interface IAddMobEffect extends MinecraftTarget {
  amplifier?: number;
  duration?: number;
  effect?: string;
}

interface IDamage extends MinecraftTarget {
  amount?: number;
  type?: 'all';
}

interface IPlayEffect extends MinecraftTarget {
  data?: number;
  effect?: string;
}

interface IPlaySound extends MinecraftTarget { sound?: string; }
interface IRemoveMobEffect { effect?: string; }
interface IRunCommand extends MinecraftTarget { command?: string[]; }
interface ISetBlock { block_type?: string; }
interface ISetBlockAtPos extends ISetBlock { block_offset?: [number, number, number]; }

interface ISetBlockProperty { [property_name: string]: string; }

interface ISpawnLoot { table?: string; }

interface ITeleport extends MinecraftTarget {
  avoid_water?: boolean;
  destination?: [number, number, number];
  land_on_block?: boolean;
  max_range?: [number, number, number];
}

interface ITransformItem { transform?: string; }

interface IEventsResponse {
  add_mob_effect?: IAddMobEffect;
  damage?: IDamage;
  decrement_stack?: object;
  die?: MinecraftTarget;
  play_effect?: IPlayEffect;
  play_sound?: IPlaySound;
  remove_mob_effect?: IRemoveMobEffect;
  run_command?: IRunCommand;
  set_block?: ISetBlock;
  set_block_at_pos?: ISetBlockAtPos;
  set_block_property?: ISetBlockProperty;
  spawn_loot?: ISpawnLoot;
  swing?: object;
  teleport?: ITeleport;
  transform_item?: ITransformItem;
}

interface IBlocksEventsInSequence { sequence?: IEventsResponse[]; }
