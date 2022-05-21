import { MinecraftTriggerFiltered } from '@minecraft/MinecraftTriggerFiltered';
import { SpellEffects } from './Components/SpellEffects';
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
import { Attack } from './Components/Attack';
import { BehaviorAdmireItem } from './Components/BehaviorAdmireItem';
import { BehaviorBeg } from './Components/BehaviorBeg';
import { BehaviorBreed } from './Components/BehaviorBreed';
import { BehaviorDefendTrustedTarget } from './Components/BehaviorDefendTrustedTarget';
import { BehaviorDrinkPotion } from './Components/BehaviorDrinkPotion';
import { BehaviorEatCarriedItem } from './Components/BehaviorEatCarriedItem';
import { BehaviorExploreOutskirts } from './Components/BehaviorExploreOutskirts';
import { BehaviorFindCover } from './Components/BehaviorFindCover';
import { BehaviorFindMount } from './Components/BehaviorFindMount';
import { BehaviorFindUnderwaterTreasure } from './Components/BehaviorFindUnderwaterTreasure';
import { BehaviorFleeSun } from './Components/BehaviorFleeSun';
import { BehaviorFloatWander } from './Components/BehaviorFloatWander';
import { BehaviorFollowCaravan } from './Components/BehaviorFollowCaravan';
import { BehaviorFollow } from './Components/BehaviorFollow';
import { BehaviorFollowParent } from './Components/BehaviorFollowParent';
import { BehaviorFollowTargetCaptain } from './Components/BehaviorFollowTargetCaptain';
import { BehaviorGoHome } from './Components/BehaviorGoHome';
import { BehaviorHide } from './Components/BehaviorHide';
import { BehaviorHoldGround } from './Components/BehaviorHoldGround';
import { BehaviorHurtByTarget } from './Components/BehaviorHurtByTarget';
import { BehaviorInspectBookshelf } from './Components/BehaviorInspectBookshelf';
import { BehaviorKnockbackRoar } from './Components/BehaviorKnockbackRoar';
import { BehaviorLayDown } from './Components/BehaviorLayDown';
import { BehaviorLayEgg } from './Components/BehaviorLayEgg';
import { BehaviorLeapAtTarget } from './Components/BehaviorLeapAtTarget';
import { BehaviorLook } from './Components/BehaviorLook';
import { BehaviorMingle } from './Components/BehaviorMingle';
import { BehaviorMountPathing } from './Components/BehaviorMountPathing';
import { BehaviorMoveThroughVillage } from './Components/BehaviorMoveThroughVillage';
import { BehaviorMoveToBlock } from './Components/BehaviorMoveToBlock';
import { BehaviorMove } from './Components/BehaviorMove';
import { BehaviorMoveToLiquid } from './Components/BehaviorMoveToLiquid';
import { BehaviorMoveToPoi } from './Components/BehaviorMoveToPoi';
import { BehaviorMoveToRandomBlock } from './Components/BehaviorMoveToRandomBlock';
import { BehaviorMoveToVillage } from './Components/BehaviorMoveToVillage';
import { BehaviorMoveTowardsTarget } from './Components/BehaviorMoveTowardsTarget';
import { BehaviorNap } from './Components/BehaviorNap';
import { BehaviorOcelotSitOnBlock } from './Components/BehaviorOcelotSitOnBlock';
import { BehaviorOpenDoor } from './Components/BehaviorOpenDoor';
import { BehaviorHurtTarget } from './Components/BehaviorHurtTarget';
import { BehaviorPanic } from './Components/BehaviorPanic';
import { BehaviorPetSleepWithOwner } from './Components/BehaviorPetSleepWithOwner';
import { BehaviorPickupItems } from './Components/BehaviorPickupItems';
import { BehaviorPlay } from './Components/BehaviorPlay';
import { BehaviorRaidGarden } from './Components/BehaviorRaidGarden';
import { BehaviorAttackableTarget } from './Components/BehaviorAttack';
import { BehaviorRandomBreach } from './Components/BehaviorRandomBreach';
import { BehaviorRandomFly } from './Components/BehaviorRandomFly';
import { BehaviorRandomHover } from './Components/BehaviorRandomHover';
import { BehaviorRandomLookAround } from './Components/BehaviorRandomLookAround';
import { BehaviorRandomLookAroundAndSit } from './Components/BehaviorRandomLookAroundAndSit';
import { BehaviorRandomSitting } from './Components/BehaviorRandomSitting';
import { BehaviorRandomStroll } from './Components/BehaviorRandomStroll';
import { BehaviorRandomSwim } from './Components/BehaviorRandomSwim';
import { BehaviorRiseToLiquidLevel } from './Components/BehaviorRiseToLiquidLevel';
import { BehaviorRoll } from './Components/BehaviorRoll';
import { BehaviorRunAroundLikeCrazy } from './Components/BehaviorRunAroundLikeCrazy';
import { BehaviorScared } from './Components/BehaviorScared';
import { BehaviorSendEvent } from './Components/BehaviorSendEvent';
import { BehaviorShareItems } from './Components/BehaviorShareItems';
import { BehaviorSkeletonHorseTrap } from './Components/BehaviorSkeletonHorseTrap';
import { BehaviorSleep } from './Components/BehaviorSleep';
import { BehaviorSlimeAttack } from './Components/BehaviorSlimeAttack';
import { BehaviorSnacking } from './Components/BehaviorSnacking';
import { BehaviorSneeze } from './Components/BehaviorSneeze';
import { BehaviorStalkAndPounceOnTarget } from './Components/BehaviorStalkAndPounceOnTarget';
import { BehaviorStompTurtleEgg } from './Components/BehaviorStompTurtleEgg';
import { BehaviorStrollTowardsVillage } from './Components/BehaviorStrollTowardsVillage';
import { BehaviorSummonEntity } from './Components/BehaviorSummonEntity';
import { BehaviorSwell } from './Components/BehaviorSwell';
import { BehaviorTempt } from './Components/BehaviorTempt';
import { BehaviorTradeInterest } from './Components/BehaviorTradeInterest';
import { BehaviorVexCopyOwnerTarget } from './Components/BehaviorVexCopyOwnerTarget';
import { BehaviorWitherTargetHighestDamage } from './Components/BehaviorWitherTargetHighestDamage';
import { BehaviorWork } from './Components/BehaviorWork';
import { MinecraftFilters } from '@minecraft/types/MinecraftFilters';

// Description
export interface Description {
  /** @TJS-pattern ^(?:(?:(?!minecraft|minecon))+[a-z]*:[a-z_]*)+$ */
  identifier: string;
  is_spawnable?: boolean;
  is_summonable?: boolean;
  is_experimental?: boolean;
  runtime_identifier?: string;
  animations?: AnimationProperties;
  scripts?: ScriptProperties;
}

// Properties
export interface AnimationProperties {
  [property_name: string]: string;
}

export interface ScriptProperties {
  animate: string[];
}

// Components
export interface ComponentGroups {
  [property_name: string]: Components;
}

export interface Components {
  ['minecraft:addrider']?: Addrider;
  ['minecraft:admire_item']?: AdmireItem;
  ['minecraft:ageable']?: Ageable;
  ['minecraft:angry']?: Angry;
  ['minecraft:annotation.break_door']?: AnnotationBreakDoor;
  ['minecraft:annotation.open_door']?: any;
  ['minecraft:area_attack']?: AreaAttack;
  ['minecraft:attack']?: Attack;
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
  ['minecraft:spell_effects']?: SpellEffects;
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

  // Property Components
  ['minecraft:ambient_sound_interval']?: AmbientSoundInterval;
  ['minecraft:can_climb']?: object;
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

  // Trigger Components
  ['minecraft:on_death']?: MinecraftTriggerFiltered;
  ['minecraft:on_friendly_anger']?: MinecraftTriggerFiltered;
  ['minecraft:on_hurt']?: MinecraftTriggerFiltered;
  ['minecraft:on_hurt_by_player']?: MinecraftTriggerFiltered;
  ['minecraft:on_ignite']?: MinecraftTriggerFiltered;
  ['minecraft:on_start_landing']?: MinecraftTriggerFiltered;
  ['minecraft:on_start_takeoff']?: MinecraftTriggerFiltered;
  ['minecraft:on_target_acquired']?: MinecraftTriggerFiltered;
  ['minecraft:on_target_escape']?: MinecraftTriggerFiltered;
  ['minecraft:on_wake_with_owner']?: MinecraftTriggerFiltered;

  // Behavior Components
  ['minecraft:behavior.admire_item']?: BehaviorAdmireItem;
  ['minecraft:behavior.barter']?: any;
  ['minecraft:behavior.beg']?: BehaviorBeg;
  ['minecraft:behavior.break_door']?: any;
  ['minecraft:behavior.breed']?: BehaviorBreed;
  ['minecraft:behavior.defend_trusted_target']?: BehaviorDefendTrustedTarget;
  ['minecraft:behavior.door_interact']?: any;
  ['minecraft:behavior.dragondeath']?: any;
  ['minecraft:behavior.dragonholdingpattern']?: any;
  ['minecraft:behavior.dragonlanding']?: any;
  ['minecraft:behavior.dragonscanning']?: any;
  ['minecraft:behavior.dragontakeoff']?: any;
  ['minecraft:behavior.drink_potion']?: BehaviorDrinkPotion;
  ['minecraft:behavior.eat_carried_item']?: BehaviorEatCarriedItem;
  ['minecraft:behavior.enderman_leave_block']?: any;
  ['minecraft:behavior.enderman_take_block']?: any;
  ['minecraft:behavior.explore_outskirts']?: BehaviorExploreOutskirts;
  ['minecraft:behavior.find_cover']?: BehaviorFindCover;
  ['minecraft:behavior.find_mount']?: BehaviorFindMount;
  ['minecraft:behavior.find_underwater_treasure']?: BehaviorFindUnderwaterTreasure;
  ['minecraft:behavior.flee_sun']?: BehaviorFleeSun;
  ['minecraft:behavior.float']?: any;
  ['minecraft:behavior.float_wander']?: BehaviorFloatWander;
  ['minecraft:behavior.follow_caravan']?: BehaviorFollowCaravan;
  ['minecraft:behavior.follow_mob']?: BehaviorFollow;
  ['minecraft:behavior.follow_owner']?: BehaviorFollow;
  ['minecraft:behavior.follow_parent']?: BehaviorFollowParent;
  ['minecraft:behavior.follow_target_captain']?: BehaviorFollowTargetCaptain;
  ['minecraft:behavior.go_home']?: BehaviorGoHome;
  ['minecraft:behavior.hide']?: BehaviorHide;
  ['minecraft:behavior.hold_ground']?: BehaviorHoldGround;
  ['minecraft:behavior.hurt_by_target']?: BehaviorHurtByTarget;
  ['minecraft:behavior.inspect_bookshelf']?: BehaviorInspectBookshelf;
  ['minecraft:behavior.knockback_roar']?: BehaviorKnockbackRoar;
  ['minecraft:behavior.lay_down']?: BehaviorLayDown;
  ['minecraft:behavior.lay_egg']?: BehaviorLayEgg;
  ['minecraft:behavior.leap_at_target']?: BehaviorLeapAtTarget;
  ['minecraft:behavior.look_at_entity']?: BehaviorLook;
  ['minecraft:behavior.look_at_player']?: BehaviorLook;
  ['minecraft:behavior.look_at_target']?: BehaviorLook;
  ['minecraft:behavior.look_at_trading_player']?: BehaviorLook;
  ['minecraft:behavior.make_love']?: any;
  ['minecraft:behavior.mingle']?: BehaviorMingle;
  ['minecraft:behavior.mount_pathing']?: BehaviorMountPathing;
  ['minecraft:behavior.move_through_village']?: BehaviorMoveThroughVillage;
  ['minecraft:behavior.move_to_block']?: BehaviorMoveToBlock;
  ['minecraft:behavior.move_to_land']?: BehaviorMove;
  ['minecraft:behavior.move_to_lava']?: BehaviorMove;
  ['minecraft:behavior.move_to_liquid']?: BehaviorMoveToLiquid;
  ['minecraft:behavior.move_to_poi']?: BehaviorMoveToPoi;
  ['minecraft:behavior.move_to_random_block']?: BehaviorMoveToRandomBlock;
  ['minecraft:behavior.move_to_village']?: BehaviorMoveToVillage;
  ['minecraft:behavior.move_to_water']?: BehaviorMove;
  ['minecraft:behavior.move_towards_target']?: BehaviorMoveTowardsTarget;
  ['minecraft:behavior.nap']?: BehaviorNap;
  ['minecraft:behavior.nearest_attackable_target']?: BehaviorAttackableTarget;
  ['minecraft:behavior.nearest_prioritized_attackable_target']?: BehaviorAttackableTarget;
  ['minecraft:behavior.ocelot_sit_on_block']?: BehaviorOcelotSitOnBlock;
  ['minecraft:behavior.offer_flower']?: any;
  ['minecraft:behavior.open_door']?: BehaviorOpenDoor;
  ['minecraft:behavior.owner_hurt_by_target']?: BehaviorHurtTarget;
  ['minecraft:behavior.owner_hurt_target']?: BehaviorHurtTarget;
  ['minecraft:behavior.panic']?: BehaviorPanic;
  ['minecraft:behavior.peek']?: any;
  ['minecraft:behavior.pet_sleep_with_owner']?: BehaviorPetSleepWithOwner;
  ['minecraft:behavior.pickup_items']?: BehaviorPickupItems;
  ['minecraft:behavior.play']?: BehaviorPlay;
  ['minecraft:behavior.player_ride_tamed']?: any;
  ['minecraft:behavior.raid_garden']?: BehaviorRaidGarden;
  ['minecraft:behavior.random_breach']?: BehaviorRandomBreach;
  ['minecraft:behavior.random_fly']?: BehaviorRandomFly;
  ['minecraft:behavior.random_hover']?: BehaviorRandomHover;
  ['minecraft:behavior.random_look_around']?: BehaviorRandomLookAround;
  ['minecraft:behavior.random_look_around_and_sit']?: BehaviorRandomLookAroundAndSit;
  ['minecraft:behavior.random_sitting']?: BehaviorRandomSitting;
  ['minecraft:behavior.random_stroll']?: BehaviorRandomStroll;
  ['minecraft:behavior.random_swim']?: BehaviorRandomSwim;
  ['minecraft:behavior.receive_love']?: any;
  ['minecraft:behavior.restrict_open_door']?: any;
  ['minecraft:behavior.restrict_sun']?: any;
  ['minecraft:behavior.rise_to_liquid_level']?: BehaviorRiseToLiquidLevel;
  ['minecraft:behavior.roll']?: BehaviorRoll;
  ['minecraft:behavior.run_around_like_crazy']?: BehaviorRunAroundLikeCrazy;
  ['minecraft:behavior.scared']?: BehaviorScared;
  ['minecraft:behavior.send_event']?: BehaviorSendEvent;
  ['minecraft:behavior.share_items']?: BehaviorShareItems;
  ['minecraft:behavior.silverfish_merge_with_stone']?: any;
  ['minecraft:behavior.silverfish_wake_up_friends']?: any;
  ['minecraft:behavior.skeleton_horse_trap']?: BehaviorSkeletonHorseTrap;
  ['minecraft:behavior.sleep']?: BehaviorSleep;
  ['minecraft:behavior.slime_attack']?: BehaviorSlimeAttack;
  ['minecraft:behavior.snacking']?: BehaviorSnacking;
  ['minecraft:behavior.sneeze']?: BehaviorSneeze;
  ['minecraft:behavior.squid_dive']?: any;
  ['minecraft:behavior.squid_flee']?: any;
  ['minecraft:behavior.squid_idle']?: any;
  ['minecraft:behavior.squid_move_away_from_ground']?: any;
  ['minecraft:behavior.squid_out_of_water']?: any;
  ['minecraft:behavior.stalk_and_pounce_on_target']?: BehaviorStalkAndPounceOnTarget;
  ['minecraft:behavior.stay_while_sitting']?: any;
  ['minecraft:behavior.stomp_turtle_egg']?: BehaviorStompTurtleEgg;
  ['minecraft:behavior.stroll_towards_village']?: BehaviorStrollTowardsVillage;
  ['minecraft:behavior.summon_entity']?: BehaviorSummonEntity;
  ['minecraft:behavior.swell']?: BehaviorSwell;
  ['minecraft:behavior.take_flower']?: any;
  ['minecraft:behavior.tempt']?: BehaviorTempt;
  ['minecraft:behavior.trade_interest']?: BehaviorTradeInterest;
  ['minecraft:behavior.trade_with_player']?: any;
  ['minecraft:behavior.vex_copy_owner_target']?: BehaviorVexCopyOwnerTarget;
  ['minecraft:behavior.vex_random_move']?: any;
  ['minecraft:behavior.wither_random_attack_pos_goal']?: any;
  ['minecraft:behavior.wither_target_highest_damage']?: BehaviorWitherTargetHighestDamage;
  ['minecraft:behavior.work']?: BehaviorWork;
}

// Events
export interface Events {
  ['minecraft:entity_born']?: EventsReponse;
  ['minecraft:entity_spawned']?: EventsReponse;
  ['minecraft:entity_transformed']?: EventsReponse;
  ['minecraft:on_prime']?: EventsReponse;
  [property_name: string]: EventsReponse;
}

interface EventsReponse extends EventsComponentGroupsController {
  filters?: MinecraftFilters;
  randomize?: EventsRandomize[];
  sequence?: EventsReponse[];
  trigger?: MinecraftTriggerFiltered;
}

interface EventsRandomize extends EventsComponentGroupsController {
  weight?: number;
  trigger?: MinecraftTriggerFiltered;
}

interface EventsComponentGroupsController {
  add?: EventComponentGroups;
  remove?: EventComponentGroups;
}

export interface EventComponentGroups {
  component_groups?: string[];
}
