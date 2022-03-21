import { Addrider } from './Components/Addrider';
import { AdmireItem } from './Components/AdmireItem';
import { Ageable } from './Components/Ageable';
import { Angry } from './Components/Angry';
import { AnnotationBreakDoor } from './Components/AnnotationBreakDoor';
import { AreaAttack } from './Components/AreaAttack';
import { AttackCooldown } from './Components/AttackCooldown';
import { Barter } from './Components/Barter';
import { BlockSensor } from './Components/BlockSensor';
import { Boostable } from './Components/Boostable';
import { Boss } from './Components/Boss';
import { BreakBlocks } from './Components/BreakBlocks';
import { Breathable } from './Components/Breathable';
import { Breedable } from './Components/Breedable';
import { Bribeable } from './Components/Bribeable';
import { Buoyant } from './Components/Buoyant';
import { CelebrateHunt } from './Components/CelebrateHunt';
import { CombatRegeneration } from './Components/CombatRegeneration';
import { ConditionalBandwidthOptimization } from './Components/ConditionalBandwidthOptimization';
import { CustomHitTest } from './Components/CustomHitTest';
import { DamageOverTime } from './Components/DamageOverTime';
import { DamageSensor } from './Components/DamageSensor';
import { Despawn } from './Components/Despawn';
import { DryingOutTimer } from './Components/DryingOutTimer';
import { EconomyTradeTable } from './Components/EconomyTradeTable';
import { EntitySensor } from './Components/EntitySensor';
import { EnvironmentSensor } from './Components/EnvironmentSensor';
import { Equippable } from './Components/Equippable';
import { ExperienceReward } from './Components/ExperienceReward';
import { Explode } from './Components/Explode';
import { Flocking } from './Components/Flocking';
import { Genetics } from './Components/Genetics';
import { Giveable } from './Components/Giveable';
import { GroupSize } from './Components/GroupSize';
import { GrowsCrop } from './Components/GrowsCrop';
import { Healable } from './Components/Healable';
import { Home } from './Components/Home';
import { HurtOnCondition } from './Components/HurtOnCondition';
import { InsideBlockNotifier } from './Components/InsideBlockNotifier';
import { Insomnia } from './Components/Insomnia';
import { InstantDespawn } from './Components/InstantDespawn';
import { Interact } from './Components/Interact';
import { Inventory } from './Components/Inventory';
import { JumpStatic } from './Components/JumpStatic';
import { Leashable } from './Components/Leashable';
import { LookAt } from './Components/LookAt';
import { MobEffect } from './Components/MobEffect';
import { Movement } from './Components/Movement';
import { MovementJump } from './Components/MovementJump';
import { MovementSway } from './Components/MovementSway';
import { Nameable } from './Components/Nameable';
import { Navigation } from './Components/Navigation';
import { Peek } from './Components/Peek';
import { Physics } from './Components/Physics';
import { PreferredPath } from './Components/PreferredPath';
import { Projectile } from './Components/Projectile';
import { Pushable } from './Components/Pushable';
import { RaidTrigger } from './Components/RaidTrigger';
import { RailMovement } from './Components/RailMovement';
import { RailSensor } from './Components/RailSensor';
import { RavagerBlocked } from './Components/RavagerBlocked';
import { Rideable } from './Components/Rideable';
import { ScaleByAge } from './Components/ScaleByAge';
import { Scheduler } from './Components/Scheduler';
import { Shareables } from './Components/Shareables';
import { Shooter } from './Components/Shooter';
import { Sittable } from './Components/Sittable';
import { SpawnEntity } from './Components/SpawnEntity';
import { Strength } from './Components/Strength';
import { Tameable } from './Components/Tameable';
import { TameMount } from './Components/TameMount';
import { TargetNearbySensor } from './Components/TargetNearbySensor';
import { Teleport } from './Components/Teleport';
import { TickWorld } from './Components/TickWorld';
import { Timer } from './Components/Timer';
import { TradeTable } from './Components/TradeTable';
import { Trail } from './Components/Trail';
import { Transformation } from './Components/Transformation';
import { Trusting } from './Components/Trusting';
import { WaterMovement } from './Components/WaterMovement';

// Description
export interface Description {
  /** @TJS-pattern ^(?:(?:(?!minecraft|minecon))+[a-z]*:[a-z_]*)+$ */
  identifier: string;
  is_spawnable?: boolean;
  is_summonable?: boolean;
  is_experimental?: boolean;
  runtime_identifier?: string;
  register_to_creative_menu?: boolean;
}

// Properties
export interface ComponentGroups {
  [property_name: string]: Components;
}

// Components
export interface Components extends ExperimentalComponents {
  ['minecraft:addrider']?: Addrider;
  ['minecraft:admire_item']?: AdmireItem;
  ['minecraft:ageable']?: Ageable;
  ['minecraft:angry']?: Angry;
  ['minecraft:annotation.break_door']?: AnnotationBreakDoor;
  ['minecraft:annotation.open_door']?: any;
  ['minecraft:area_attack']?: AreaAttack;
  ['minecraft:attack_cooldown']?: AttackCooldown;
  ['minecraft:barter']?: Barter;
  ['minecraft:block_climber']?: any;
  ['minecraft:block_sensor']?: BlockSensor;
  ['minecraft:boostable']?: Boostable;
  ['minecraft:boss']?: Boss;
  ['minecraft:break_blocks']?: BreakBlocks;
  ['minecraft:breathable']?: Breathable;
  ['minecraft:breedable']?: Breedable;
  ['minecraft:bribeable']?: Bribeable;
  ['minecraft:buoyant']?: Buoyant;
  ['minecraft:burns_in_daylight']?: any;
  ['minecraft:celebrate_hunt']?: CelebrateHunt;
  ['minecraft:combat_regeneration']?: CombatRegeneration;
  ['minecraft:conditional_bandwidth_optimization']?: ConditionalBandwidthOptimization;
  ['minecraft:custom_hit_test']?: CustomHitTest;
  ['minecraft:damage_over_time']?: DamageOverTime;
  ['minecraft:damage_sensor']?: DamageSensor;
  ['minecraft:despawn']?: Despawn;
  ['minecraft:drying_out_timer']?: DryingOutTimer;
  ['minecraft:economy_trade_table']?: EconomyTradeTable;
  ['minecraft:entity_sensor']?: EntitySensor;
  ['minecraft:environment_sensor']?: EnvironmentSensor;
  ['minecraft:equip_item']?: any;
  ['minecraft:equippable']?: Equippable;
  ['minecraft:experience_reward']?: ExperienceReward;
  ['minecraft:explode']?: Explode;
  ['minecraft:flocking']?: Flocking;
  ['minecraft:genetics']?: Genetics;
  ['minecraft:giveable']?: Giveable;
  ['minecraft:group_size']?: GroupSize;
  ['minecraft:grows_crop']?: GrowsCrop;
  ['minecraft:healable']?: Healable;
  ['minecraft:home']?: Home;
  ['minecraft:hurt_on_condition']?: HurtOnCondition;
  ['minecraft:inside_block_notifier']?: InsideBlockNotifier;
  ['minecraft:insomnia']?: Insomnia;
  ['minecraft:instant_despawn']?: InstantDespawn;
  ['minecraft:interact']?: Interact;
  ['minecraft:inventory']?: Inventory;
  ['minecraft:item_hopper']?: any;
  ['minecraft:jump.dynamic']?: any;
  ['minecraft:jump.static']?: JumpStatic;
  ['minecraft:leashable']?: Leashable;
  ['minecraft:lookat']?: LookAt;
  ['minecraft:managed_wandering_trader']?: any;
  ['minecraft:mob_effect']?: MobEffect;
  ['minecraft:movement.amphibious']?: Movement;
  ['minecraft:movement.basic']?: Movement;
  ['minecraft:movement.fly']?: Movement;
  ['minecraft:movement.generic']?: Movement;
  ['minecraft:movement.hover']?: Movement;
  ['minecraft:movement.jump']?: MovementJump;
  ['minecraft:movement.skip']?: Movement;
  ['minecraft:movement.sway']?: MovementSway;
  ['minecraft:nameable']?: Nameable;
  ['minecraft:navigation.climb']?: Navigation;
  ['minecraft:navigation.float']?: Navigation;
  ['minecraft:navigation.fly']?: Navigation;
  ['minecraft:navigation.generic']?: Navigation;
  ['minecraft:navigation.hover']?: Navigation;
  ['minecraft:navigation.swim']?: Navigation;
  ['minecraft:navigation.walk']?: Navigation;
  ['minecraft:out_of_control']?: any;
  ['minecraft:peek']?: Peek;
  ['minecraft:persistent']?: any;
  ['minecraft:physics']?: Physics;
  ['minecraft:preferred_path']?: PreferredPath;
  ['minecraft:projectile']?: Projectile;
  ['minecraft:pushable']?: Pushable;
  ['minecraft:raid_trigger']?: RaidTrigger;
  ['minecraft:rail_movement']?: RailMovement;
  ['minecraft:rail_sensor']?: RailSensor;
  ['minecraft:ravager_blocked']?: RavagerBlocked;
  ['minecraft:rideable']?: Rideable;
  ['minecraft:scale_by_age']?: ScaleByAge;
  ['minecraft:scheduler']?: Scheduler;
  ['minecraft:shareables']?: Shareables;
  ['minecraft:shooter']?: Shooter;
  ['minecraft:sittable']?: Sittable;
  ['minecraft:spawn_entity']?: SpawnEntity;
  ['minecraft:strength']?: Strength;
  ['minecraft:tameable']?: Tameable;
  ['minecraft:tamemount']?: TameMount;
  ['minecraft:target_nearby_sensor']?: TargetNearbySensor;
  ['minecraft:teleport']?: Teleport;
  ['minecraft:tick_world']?: TickWorld;
  ['minecraft:timer']?: Timer;
  ['minecraft:trade_table']?: TradeTable;
  ['minecraft:trail']?: Trail;
  ['minecraft:transformation']?: Transformation;
  ['minecraft:trusting']?: Trusting;
  ['minecraft:water_movement']?: WaterMovement;
}

// Experimental Components
export interface ExperimentalComponents {}

// Events
export interface Events {
  [property_name: string]: EventsReponse;
}

interface EventsSequence {
  sequence?: EventsReponse[];
}

interface EventsReponse extends EventsSequence {}
