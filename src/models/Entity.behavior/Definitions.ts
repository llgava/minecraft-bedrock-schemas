import { Addrider } from './Components/Addrider';
import { AdmireItem } from './Components/AdmireItem';
import { Ageable } from './Components/Ageable';
import { AmbientSoundInterval } from './Components/AmbientSoundInterval';
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
import { CollisionBox } from './Components/CollisionBox';
import { Color } from './Components/Color';
import { CombatRegeneration } from './Components/CombatRegeneration';
import { ConditionalBandwidthOptimization } from './Components/ConditionalBandwidthOptimization';
import { CustomHitTest } from './Components/CustomHitTest';
import { DamageOverTime } from './Components/DamageOverTime';
import { DamageSensor } from './Components/DamageSensor';
import { DefaultLookAngle } from './Components/DefaultLookAngle';
import { Despawn } from './Components/Despawn';
import { DryingOutTimer } from './Components/DryingOutTimer';
import { EconomyTradeTable } from './Components/EconomyTradeTable';
import { EntitySensor } from './Components/EntitySensor';
import { EnvironmentSensor } from './Components/EnvironmentSensor';
import { Equippable } from './Components/Equippable';
import { ExperienceReward } from './Components/ExperienceReward';
import { Explode } from './Components/Explode';
import { Flocking } from './Components/Flocking';
import { FlyingSpeed } from './Components/FlyingSpeed';
import { FrictionModifier } from './Components/FrictionModifier';
import { Genetics } from './Components/Genetics';
import { Giveable } from './Components/Giveable';
import { GroundOffset } from './Components/GroundOffset';
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
import { IsDyeable } from './Components/IsDyeable';
import { ItemControllable } from './Components/ItemControllable';
import { JumpStatic } from './Components/JumpStatic';
import { Leashable } from './Components/Leashable';
import { LookAt } from './Components/LookAt';
import { Loot } from './Components/Loot';
import { MarkVariant } from './Components/MarkVariant';
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
import { PushThrough } from './Components/PushThrough';
import { RaidTrigger } from './Components/RaidTrigger';
import { RailMovement } from './Components/RailMovement';
import { RailSensor } from './Components/RailSensor';
import { RavagerBlocked } from './Components/RavagerBlocked';
import { Rideable } from './Components/Rideable';
import { Scale } from './Components/Scale';
import { ScaleByAge } from './Components/ScaleByAge';
import { Scheduler } from './Components/Scheduler';
import { Shareables } from './Components/Shareables';
import { Shooter } from './Components/Shooter';
import { Sittable } from './Components/Sittable';
import { SkinId } from './Components/SkinId';
import { SoundVolume } from './Components/SoundVolume';
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
import { TypeFamily } from './Components/TypeFamily';
import { Variant } from './Components/Variant';
import { WalkAnimationSpeed } from './Components/WalkAnimationSpeed';
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
export interface Components extends PropertyComponents {
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

// Properties Components
export interface PropertyComponents extends TriggersComponents {
  ['minecraft:ambient_sound_interval']?: AmbientSoundInterval;
  ['minecraft:can_climb']?: any;
  ['minecraft:can_fly']?: any;
  ['minecraft:can_power_jump']?: any;
  ['minecraft:collision_box']?: CollisionBox;
  ['minecraft:color']?: Color;
  ['minecraft:color2']?: Color;
  ['minecraft:default_look_angle']?: DefaultLookAngle;
  ['minecraft:equipment']?: any;
  ['minecraft:fire_immune']?: any;
  ['minecraft:floats_in_liquid']?: any;
  ['minecraft:flying_speed']?: FlyingSpeed;
  ['minecraft:friction_modifier']?: FrictionModifier;
  ['minecraft:ground_offset']?: GroundOffset;
  ['minecraft:input_ground_controlled']?: any;
  ['minecraft:is_baby']?: any;
  ['minecraft:is_charged']?: any;
  ['minecraft:is_chested']?: any;
  ['minecraft:is_dyeable']?: IsDyeable;
  ['minecraft:is_hidden_when_invisible']?: any;
  ['minecraft:is_ignited']?: any;
  ['minecraft:is_illager_captain']?: any;
  ['minecraft:is_saddled']?: any;
  ['minecraft:is_shaking']?: any;
  ['minecraft:is_sheared']?: any;
  ['minecraft:is_stackable']?: any;
  ['minecraft:is_stunned']?: any;
  ['minecraft:is_tamed']?: any;
  ['minecraft:item_controllable']?: ItemControllable;
  ['minecraft:loot']?: Loot;
  ['minecraft:mark_variant']?: MarkVariant;
  ['minecraft:push_through']?: PushThrough;
  ['minecraft:scale']?: Scale;
  ['minecraft:skin_id']?: SkinId;
  ['minecraft:sound_volume']?: SoundVolume;
  ['minecraft:type_family']?: TypeFamily;
  ['minecraft:variant']?: Variant;
  ['minecraft:walk_animation_speed']?: WalkAnimationSpeed;
}

// TriggersComponents
export interface TriggersComponents {

}

// Events
export interface Events {
  ['minecraft:entity_born']?: EventsReponse;
  ['minecraft:entity_spawned']?: EventsReponse;
  ['minecraft:entity_transformed']?: EventsReponse;
  ['minecraft:on_prime']?: EventsReponse;
  [property_name: string]: EventsReponse;
}

interface EventsSequence {
  sequence?: EventsReponse[];
}

interface EventsReponse extends EventsSequence {}
