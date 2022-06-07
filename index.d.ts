export declare class MinecraftBedrock {
  version: string;
  schemas: SchemaBase[];
  settings: VSCodeSettings;
  constructor(version?: string);
  generateSchemasDynamic(save_to: string): void;
  generateSchemaStatic(file_name: string, file_path: string, save_to: string): void;
}

export declare const Schemas: SchemaBase[];

export declare class VSCodeSettings {
  version: string;
  baseUrl: string;
  schemas: SchemaBase[];
  ['json.schemas']: SchemaConfig[];
  constructor(schemas: SchemaBase[], version?: string, base_url?: string);
  generateVSCodeDynamic(): this;
  generateSchemaFileMatch(file_name: string, file_match: string[]): this;
  saveVSCodeSettings(save_to: string): void;
}

export interface LootTableEntry {
  type?: 'loot_table';
  name?: string;
}

export interface MinecraftClientVariables {
  ['variable.angles']?: string;
  ['variable.animation_speed']?: string;
  ['variable.AnimationAmountBlen']?: string;
  ['variable.attack']?: string;
  ['variable.attack2']?: string;
  ['variable.attack_body_rot_y']?: string;
  ['variable.attack_head_rot']?: string;
  ['variable.attack_time']?: string;
  ['variable.backLegMultiplier']?: string;
  ['variable.base_scale']?: string;
  ['variable.bite_anim_duration']?: string;
  ['variable.bit_neck_length']?: string;
  ['variable.body_base_rotation']?: string;
  ['variable.body_roll_progress']?: string;
  ['variable.body_rot_z']?: string;
  ['variable.body_shake_angle']?: string;
  ['variable.boot_layer_visible']?: string;
  ['variable.bounce']?: string;
  ['variable.bristle_flow']?: string;
  ['variable.bristle_range_mod']?: string;
  ['variable.bristle_speed_mod']?: string;
  ['variable.chest_layer_visible']?: string;
  ['variable.current_frame']?: string;
  ['variable.dance.x']?: string;
  ['variable.dance.y']?: string;
  ['variable.deg_rotation']?: string;
  ['variable.display_normal_skin']?: string;
  ['variable.first_person_rotation_factor']?: string;
  ['variable.flash']?: string;
  ['variable.flipbook']?: string;
  ['variable.frames']?: string;
  ['variable.frontLegMultiplier']?: string;
  ['variable.hand_bob']?: string;
  ['variable.head_roll_progress']?: string;
  ['variable.head_rot_z']?: string;
  ['variable.height']?: string;
  ['variable.helmet_layer_scale_amount']?: string;
  ['variable.horizontal_scale_amount']?: string;
  ['variable.hp']?: string;
  ['variable.is_blinking']?: string;
  ['variable.is_holding_right']?: string;
  ['variable.is_invulnerable']?: string;
  ['variable.item_use_normalized']?: string;
  ['variable.last_blink_time']?: string;
  ['variable.leg_layer_visible']?: string;
  ['variable.leg_rot']?: string;
  ['variable.legSpeedMultiplier']?: string;
  ['variable.level_index']?: string;
  ['variable.map_angle']?: string;
  ['variable.max_frames']?: string;
  ['variable.modified_tcos0']?: string;
  ['variable.num_professions']?: string;
  ['variable.num_tiers']?: string;
  ['variable.page']?: string;
  ['variable.profession_index']?: string;
  ['variable.radius']?: string;
  ['variable.roar_length']?: string;
  ['variable.runtimeid']?: string;
  ['variable.scale_xz']?: string;
  ['variable.scale_y']?: string;
  ['variable.Shulker.EastFacing']?: string;
  ['variable.Shulker.LidPositionFactor']?: string;
  ['variable.Shulker.LidRotationFactor']?: string;
  ['variable.Shulker.NorthFacing']?: string;
  ['variable.Shulker.SouthFacing']?: string;
  ['variable.Shulker.UpFacing']?: string;
  ['variable.Shulker.WestFacing']?: string;
  ['variable.Shulker.XOffset']?: string;
  ['variable.Shulker.XPreRotation']?: string;
  ['variable.Shulker.Yoffset']?: string;
  ['variable.Shulker.ZOffset']?: string;
  ['variable.Shulker.ZPreRotation']?: string;
  ['variable.slime_squish_factor']?: string;
  ['variable.speed']?: string;
  ['variable.spike_animation_speed']?: string;
  ['variable.spike_extension']?: string;
  ['variable.spike_shake']?: string;
  ['variable.squish_factor']?: string;
  ['variable.state']?: string;
  ['variable.swell_adjustment']?: string;
  ['variable.swell_clamped']?: string;
  ['variable.swelling_scale1']?: string;
  ['variable.swelling_scale2']?: string;
  ['variable.tail_animation_speed']?: string;
  ['variable.tail_base_angle']?: string;
  ['variable.tail_rool_progress']?: string;
  ['variable.tail_rot_z']?: string;
  ['variable.tail_swim']?: string;
  ['variable.tailrotx']?: string;
  ['variable.tcos0']?: string;
  ['variable.tcos_left_side']?: string;
  ['variable.tcos_right_side']?: string;
  ['variable.texture_fps']?: string;
  ['variable.timeMultiplier']?: string;
  ['variable.timer']?: string;
  ['variable.upper_body_roll_progress']?: string;
  ['variable.upper_body_rot_z']?: string;
  ['variable.upper_body_rotation']?: string;
  ['variable.vertical_scale_amount']?: string;
  ['variable.wing_flap']?: string;
  ['variable.wingrotz']?: string;
  ['variable.wobble']?: string;
  ['variable.x_bob']?: string;
  ['variable.z_bob']?: string;
  ['variable.ZRot']?: string;
}

export interface MinecraftCollision {
  origin?: [number, number, number];
  size?: [number, number, number];
}

export interface MinecraftEntityTypes {
  filters?: MinecraftFilters;
  max_dist?: number;
  must_see?: number;
  must_see_forget_duration?: number;
  sprint_speed_multiplier?: number;
  walk_speed_multiplier?: number;
}

export interface MinecraftFilterBase {
  subject?: MinecraftSubjects;
  operator?: MinecraftOperators;
}

export interface MinecraftFiltersOf {
  any_of?: MinecraftFiltersType[];
  all_of?: MinecraftFiltersType[];
  none_of?: MinecraftFiltersType[];
  player_with_instabuild?: boolean;
  other_with_families?: string;
  without_components?: string | string[];
}

export interface MinecraftFlipbookTexture {
  atlas_index?: number;
  atlas_tile_variant?: number;
  blend_frames?: boolean;
  replicate?: number;
  ticks_per_frame?: number;
  flipbook_texture?: string;
  atlas_tile?: number;
  frames?: number[];
}

export interface MinecraftQueryAnimation {
  [property_name: string]: string;
}

export interface MinecraftRecipeItemProperties {
  item?: string;
  count?: number;
  data?: number;
}

export interface MinecraftSound {
  volume?: number | [number, number];
  pitch?: number | [number, number];
}

export interface MinecraftSoundEvent extends MinecraftSound {
  sound?: string;
}

export interface MinecraftTarget {
  target?: MinecraftSubjects;
}

export declare class MinecraftTextureData {
  [property_name: string]: MinecraftTextures;
}

export interface MinecraftTextures {
  textures?: string | string[] | Textures;
}
export interface Textures {
  path?: string;
  overlay_color?: string;
  tint_color?: string;
  variations?: Variations[];
}
export interface Variations {
  path?: string;
  weight?: number;
}

export interface MinecraftTrigger extends MinecraftTarget {
  event?: string;
}

export interface MinecraftTriggerConditioning extends MinecraftTrigger {
  conditions?: string;
}

export interface MinecraftTriggerFiltered extends MinecraftTrigger {
  filters?: MinecraftFilters;
}

export interface EntityProperties {
  condition?: 'entity_properties';
  entity?: 'this';
  properties?: Properties;
}
interface Properties {
  on_fire?: boolean;
  on_ground?: boolean;
}

export interface HasMarkVariant {
  condition?: 'has_mark_variant';
  value?: number;
}

export interface KilledByPlayer {
  condition?: 'killed_by_player';
}

export interface KilledByPlayerOrPets {
  condition?: 'killed_by_player_or_pets';
}

export interface RandomChance {
  condition?: 'random_chance';
  chance?: number;
  max_chance?: number;
}

export interface RandomChanceWithLooting {
  condition?: 'random_chance_with_looting';
  chance?: number;
  looting_multiplier?: number;
}

export interface RandomDifficultyChance {
  condition?: 'random_difficulty_chance';
  default_chance?: number;
  peaceful?: number;
  easy?: number;
  normal?: number;
  hard?: number;
}

export interface RandomRegionalDifficultyChance {
  condition?: 'random_regional_difficulty_chance';
  default_chance?: number;
  max_chance?: number;
  peaceful?: number;
  easy?: number;
  normal?: number;
  hard?: number;
}

export interface EmptyType {
  type?: 'empty';
  pools?: LootTablePool[];
}

export interface ItemType {
  type?: 'item';
  name?: string;
  count?: number;
  weight?: number;
  quality?: number;
  pools?: LootTablePool[];
  functions?: MinecraftFunctionsType[];
}

export interface LootTableType {
  type?: 'loot_table';
  name?: string;
  pools?: LootTablePool[];
}

export interface ClockTime extends MinecraftFilterBase {
  test?: 'clock_time';
  value?: number;
}

export interface DistanceToNearestPlayer extends MinecraftFilterBase {
  test?: 'distance_to_nearest_player';
  value?: number;
}

export interface HasAbility extends MinecraftFilterBase {
  test?: 'has_ability';
  value?: MinecraftAbilities;
}

export interface HasBiomeTag extends MinecraftFilterBase {
  test?: 'has_biome_tag';
  value?: string;
}

export interface HasComponent extends MinecraftFilterBase {
  test?: 'has_component';
  value?: string;
}

export interface HasContainerOpen extends MinecraftFilterBase {
  test?: 'has_container_open';
  value?: boolean;
}

export interface HasDamage extends MinecraftFilterBase {
  test?: 'has_damage';
  value?: MinecraftDamageSource;
}

export interface HasEquipment extends MinecraftFilterBase {
  test?: 'has_equipment';
  domain?: MinecraftDomains;
  value?: string;
}

export interface HasMobEffect extends MinecraftFilterBase {
  test?: 'has_mob_effect';
  value?: string;
}

export interface HasNametag extends MinecraftFilterBase {
  test?: 'has_nametag';
  value?: boolean;
}

export interface HasRangedWeapon extends MinecraftFilterBase {
  test?: 'has_nametag';
  value?: boolean;
}

export interface HasTag extends MinecraftFilterBase {
  test?: 'has_tag';
  value?: string;
}

export interface HasTarget extends MinecraftFilterBase {
  test?: 'has_target';
  value?: boolean;
}

export interface HasTradeSupply extends MinecraftFilterBase {
  test?: 'has_trade_supply';
  value?: boolean;
}

export interface HourlyClockTime extends MinecraftFilterBase {
  test?: 'hourly_clock_time';
  value?: number;
}

export interface InBlock extends MinecraftFilterBase {
  test?: 'in_block';
  value?: string;
}

export interface InCaravan extends MinecraftFilterBase {
  test?: 'in_caravan';
  value?: boolean;
}

export interface InClouds extends MinecraftFilterBase {
  test?: 'in_clouds';
  value?: boolean;
}

export interface InContactWithWater extends MinecraftFilterBase {
  test?: 'in_contact_with_water';
  value?: boolean;
}

export interface InLava extends MinecraftFilterBase {
  test?: 'in_lava';
  value?: boolean;
}

export interface InNether extends MinecraftFilterBase {
  test?: 'in_nether';
  value?: boolean;
}

export interface InWater extends MinecraftFilterBase {
  test?: 'in_water';
  value?: boolean;
}

export interface InWaterOrRain extends MinecraftFilterBase {
  test?: 'in_water_or_rain';
  value?: boolean;
}

export interface InactivityTimer extends MinecraftFilterBase {
  test?: 'inactivity_timer';
  value?: number;
}

export interface IsAltitude extends MinecraftFilterBase {
  test?: 'is_altitude';
  value?: number;
}

export interface IsAvoidingMobs extends MinecraftFilterBase {
  test?: 'is_avoiding_mobs';
  value?: boolean;
}

export interface IsBiome extends MinecraftFilterBase {
  test?: 'is_biome';
  value?: MinecraftBiomes;
}

export interface IsBlock extends MinecraftFilterBase {
  test?: 'is_block';
  value?: string;
}

export interface IsBrightness extends MinecraftFilterBase {
  test?: 'is_brightness';
  value?: number;
}

export interface IsClimbing extends MinecraftFilterBase {
  test?: 'is_climbing';
  value?: boolean;
}

export interface IsColor extends MinecraftFilterBase {
  test?: 'is_color';
  value?: MinecraftDyeColors;
}

export interface IsDaytime extends MinecraftFilterBase {
  test?: 'is_daytime';
  value?: boolean;
}

export interface IsDifficulty extends MinecraftFilterBase {
  test?: 'is_difficulty';
  value?: MinecraftDifficulty;
}

export interface IsFamily extends MinecraftFilterBase {
  test?: 'is_family';
  value?: string;
}

export interface IsGameRule extends MinecraftFilterBase {
  test?: 'is_game_rule';
  domain?: string;
  value?: boolean;
}

export interface IsHumid extends MinecraftFilterBase {
  test?: 'is_humid';
  value?: boolean;
}

export interface IsImmobile extends MinecraftFilterBase {
  test?: 'is_immobile';
  value?: boolean;
}

export interface IsInVillage extends MinecraftFilterBase {
  test?: 'is_in_village';
  value?: boolean;
}

export interface IsLeashed extends MinecraftFilterBase {
  test?: 'is_leashed';
  value?: boolean;
}

export interface IsLeashedTo extends MinecraftFilterBase {
  test?: 'is_leashed_to';
  value?: boolean;
}

export interface IsMarkVariant extends MinecraftFilterBase {
  test?: 'is_mark_variant';
  value?: number;
}

export interface IsMissingHealth extends MinecraftFilterBase {
  test?: 'is_missing_health';
  value?: boolean;
}

export interface IsMoving extends MinecraftFilterBase {
  test?: 'is_moving';
  value?: boolean;
}

export interface IsOwner extends MinecraftFilterBase {
  test?: 'is_owner';
  value?: boolean;
}

export interface IsPersistent extends MinecraftFilterBase {
  test?: 'is_persistent';
  value?: boolean;
}

export interface IsRiding extends MinecraftFilterBase {
  test?: 'is_riding';
  value?: boolean;
}

export interface IsSkingId extends MinecraftFilterBase {
  test?: 'is_skin_id';
  value?: number;
}

export interface IsSleeping extends MinecraftFilterBase {
  test?: 'is_sleeping';
  value?: boolean;
}

export interface IsSneaking extends MinecraftFilterBase {
  test?: 'is_sneaking';
  value?: boolean;
}

export interface IsSnowCovered extends MinecraftFilterBase {
  test?: 'is_snow_covered';
  value?: boolean;
}

export interface IsTarget extends MinecraftFilterBase {
  test?: 'is_target';
  value?: boolean;
}

export interface IsTemperatureType extends MinecraftFilterBase {
  test?: 'is_temperature_type';
  value?: MinecraftTemperatures;
}

export interface IsTemperatureValue extends MinecraftFilterBase {
  test?: 'is_temperature_value';
  value?: number;
}

export interface IsUnderground extends MinecraftFilterBase {
  test?: 'is_underground';
  value?: boolean;
}

export interface IsUnderwater extends MinecraftFilterBase {
  test?: 'is_underwater';
  value?: boolean;
}

export interface IsVariant extends MinecraftFilterBase {
  test?: 'is_variant';
  value?: number;
}

export interface IsVisible extends MinecraftFilterBase {
  test?: 'is_visible';
  value?: boolean;
}

export interface IsWeather extends MinecraftFilterBase {
  test?: 'is_weather';
  value?: string;
}

export interface LightLevel extends MinecraftFilterBase {
  test?: 'light_level';
  value?: number;
}

export interface MoonIntensity extends MinecraftFilterBase {
  test?: 'moon_intensity';
  value?: number;
}

export interface MoonPhase extends MinecraftFilterBase {
  test?: 'moon_phase';
  value?: number;
}

export interface OnGround extends MinecraftFilterBase {
  test?: 'on_ground';
  value?: boolean;
}

export interface OnLadder extends MinecraftFilterBase {
  test?: 'on_ladder';
  value?: boolean;
}

export interface RandomChance extends MinecraftFilterBase {
  test?: 'random_chance';
  value?: number;
}

export interface RiderCount extends MinecraftFilterBase {
  test?: 'rider_count';
  value?: number;
}

export interface SurfaceMob extends MinecraftFilterBase {
  test?: 'surface_mob';
  value?: boolean;
}

export interface Trusts extends MinecraftFilterBase {
  test?: 'trusts';
  value?: boolean;
}

export interface Weather extends MinecraftFilterBase {
  test?: 'weather';
  value?: string;
}

export interface WeatherAtPosition extends MinecraftFilterBase {
  test?: 'weather_at_position';
  value?: string;
}

export interface EnchantBookForTrading {
  function?: 'enchant_book_for_trading';
  base_cost?: number;
  base_random_cost?: number;
  per_level_cost?: number;
  per_level_random_cost?: number;
}

export interface EnchantRandomGear {
  function?: 'enchant_random_gear';
  chance?: number;
}

export interface EnchantRandomly {
  function?: 'enchant_randomly';
  treasure?: boolean;
}

export interface EnchantWithLevels {
  function?: 'enchant_with_levels';
  treasure?: boolean;
  levels?: Levels;
}
interface Levels {
  max?: number;
  min?: number;
}

export interface ExplorationMap {
  function?: 'exploration_map';
  destination?: MinecraftStructures;
}

export interface FillContainer {
  function?: 'fill_container';
  loot_table?: string;
}

export interface FurnaceSmelt {
  furnace_smelt?: 'furnace_smelt';
  conditions?: MinecraftConditionsType[];
}

export interface LootingEnchant {
  function?: 'looting_enchant';
  count?: Count;
}
interface Count {
  max?: number;
  min?: number;
}

export interface RandomAuxValue {
  function?: 'random_aux_value';
  values?: Values;
}
interface Values {
  max?: number;
  min?: number;
}

export interface RandomBlockState {
  function?: 'random_block_state';
  block_state?: string;
  values?: Values;
}
interface Values {
  max?: number;
  min?: number;
}

export interface RandomDye {
  function?: 'random_dye';
}

export interface SetActorId {
  function?: 'set_actor_id';
  id?: string;
}

export interface SetBannerDetails {
  function?: 'set_banner_details';
  type?: number;
}

export interface SetBookContents {
  function?: 'set_book_contents';
  author?: string;
  pages?: [];
  title?: string;
}

export interface SetCount {
  function?: 'set_count';
  count?: Count;
}
interface Count {
  max?: number;
  min?: number;
}

export interface SetDamage {
  function?: 'set_damage';
  damage?: Damage;
}
interface Damage {
  max?: number;
  min?: number;
}

export interface SetData {
  function?: 'set_data';
  data?: Data;
}
interface Data {
  max?: number;
  min?: number;
}

export interface SetDataFromColorIndex {
  function?: 'set_data_from_color_index';
}

export interface SetLore {
  function?: 'set_lore';
  lore?: [];
}

export interface SetName {
  function?: 'set_name';
  name?: string;
}

export interface SpecificEnchants {
  function?: 'specific_enchants';
  enchants?: MinecraftEnchantments;
}

export interface TraderMaterialType {
  function?: 'trader_material_type';
}

export declare type MinecraftAbilities =
  | 'flySpeed'
  | 'flying'
  | 'instabuild'
  | 'invulnerable'
  | 'lightning'
  | 'mayfly'
  | 'mute'
  | 'noclip'
  | 'walkSpeed'
  | 'worldbuilde';

export declare type MinecraftArmorTextureTypes =
  | 'none'
  | 'elytra'
  | 'turtle'
  | 'gold'
  | 'leather'
  | 'chain'
  | 'iron'
  | 'diamond'
  | 'netherite';

export declare type MinecraftBiomeTags =
  | 'animal'
  | 'beach'
  | 'birch'
  | 'cold'
  | 'dark_oak'
  | 'deep'
  | 'desert'
  | 'edge'
  | 'extreme_hills'
  | 'flower_forest'
  | 'forest'
  | 'frozen'
  | 'hills'
  | 'ice'
  | 'ice_plains'
  | 'jungle'
  | 'lakes'
  | 'lukewarm'
  | 'mega'
  | 'mesa'
  | 'monster'
  | 'mooshroom_island'
  | 'mountain'
  | 'mutated'
  | 'nether'
  | 'ocean'
  | 'plains'
  | 'plateau'
  | 'river'
  | 'roofed'
  | 'savanna'
  | 'shore'
  | 'stone'
  | 'swamp'
  | 'taiga'
  | 'the_end'
  | 'warm';

export declare type MinecraftBiomes =
  | 'beach'
  | 'desert'
  | 'extreme_hills'
  | 'flat'
  | 'forest'
  | 'ice'
  | 'jungle'
  | 'mesa'
  | 'mushroom_island'
  | 'ocean'
  | 'plain'
  | 'river'
  | 'savanna'
  | 'stone_beach'
  | 'swamp'
  | 'taiga'
  | 'the_end'
  | 'the_neth';

export declare type BlockFaces = 'up' | 'down' | 'north' | 'south' | 'east' | 'west' | 'side' | 'all';

export declare type MinecraftBlocks =
  | 'minecraft:acacia_button'
  | 'minecraft:acacia_door'
  | 'minecraft:acacia_fence_gate'
  | 'minecraft:acacia_pressure_plate'
  | 'minecraft:acacia_stairs'
  | 'minecraft:acacia_standing_sign'
  | 'minecraft:acacia_trapdoor'
  | 'minecraft:acacia_wall_sign'
  | 'minecraft:activator_rail'
  | 'minecraft:air'
  | 'minecraft:allow'
  | 'minecraft:amethyst_block'
  | 'minecraft:amethyst_cluster'
  | 'minecraft:ancient_debris'
  | 'minecraft:andesite_stairs'
  | 'minecraft:anvil'
  | 'minecraft:azalea'
  | 'minecraft:azalea_leaves'
  | 'minecraft:azalea_leaves_flowered'
  | 'minecraft:bamboo'
  | 'minecraft:bamboo_sapling'
  | 'minecraft:barrel'
  | 'minecraft:barrier'
  | 'minecraft:basalt'
  | 'minecraft:beacon'
  | 'minecraft:bed'
  | 'minecraft:bedrock'
  | 'minecraft:bee_nest'
  | 'minecraft:beehive'
  | 'minecraft:beetroot'
  | 'minecraft:bell'
  | 'minecraft:big_dripleaf'
  | 'minecraft:birch_button'
  | 'minecraft:birch_door'
  | 'minecraft:birch_fence_gate'
  | 'minecraft:birch_pressure_plate'
  | 'minecraft:birch_stairs'
  | 'minecraft:birch_standing_sign'
  | 'minecraft:birch_trapdoor'
  | 'minecraft:birch_wall_sign'
  | 'minecraft:black_candle'
  | 'minecraft:black_candle_cake'
  | 'minecraft:black_glazed_terracotta'
  | 'minecraft:blackstone'
  | 'minecraft:blackstone_double_slab'
  | 'minecraft:blackstone_slab'
  | 'minecraft:blackstone_stairs'
  | 'minecraft:blackstone_wall'
  | 'minecraft:blast_furnace'
  | 'minecraft:blue_candle'
  | 'minecraft:blue_candle_cake'
  | 'minecraft:blue_glazed_terracotta'
  | 'minecraft:blue_ice'
  | 'minecraft:bone_block'
  | 'minecraft:bookshelf'
  | 'minecraft:border_block'
  | 'minecraft:brewing_stand'
  | 'minecraft:brick_block'
  | 'minecraft:brick_stairs'
  | 'minecraft:brown_candle'
  | 'minecraft:brown_candle_cake'
  | 'minecraft:brown_glazed_terracotta'
  | 'minecraft:brown_mushroom'
  | 'minecraft:brown_mushroom_block'
  | 'minecraft:bubble_column'
  | 'minecraft:budding_amethyst'
  | 'minecraft:cactus'
  | 'minecraft:cake'
  | 'minecraft:calcite'
  | 'minecraft:camera'
  | 'minecraft:campfire'
  | 'minecraft:candle'
  | 'minecraft:candle_cake'
  | 'minecraft:carpet'
  | 'minecraft:carrots'
  | 'minecraft:cartography_table'
  | 'minecraft:carved_pumpkin'
  | 'minecraft:cauldron'
  | 'minecraft:cave_vines'
  | 'minecraft:cave_vines_body_with_berries'
  | 'minecraft:cave_vines_head_with_berries'
  | 'minecraft:chain'
  | 'minecraft:chain_command_block'
  | 'minecraft:chemical_heat'
  | 'minecraft:chemistry_table'
  | 'minecraft:chest'
  | 'minecraft:chiseled_deepslate'
  | 'minecraft:chiseled_nether_bricks'
  | 'minecraft:chiseled_polished_blackstone'
  | 'minecraft:chorus_flower'
  | 'minecraft:chorus_plant'
  | 'minecraft:clay'
  | 'minecraft:client_request_placeholder_block'
  | 'minecraft:coal_block'
  | 'minecraft:coal_ore'
  | 'minecraft:cobbled_deepslate'
  | 'minecraft:cobbled_deepslate_double_slab'
  | 'minecraft:cobbled_deepslate_slab'
  | 'minecraft:cobbled_deepslate_stairs'
  | 'minecraft:cobbled_deepslate_wall'
  | 'minecraft:cobblestone'
  | 'minecraft:cobblestone_wall'
  | 'minecraft:cocoa'
  | 'minecraft:colored_torch_bp'
  | 'minecraft:colored_torch_rg'
  | 'minecraft:command_block'
  | 'minecraft:composter'
  | 'minecraft:concrete'
  | 'minecraft:concretePowder'
  | 'minecraft:conduit'
  | 'minecraft:copper_block'
  | 'minecraft:copper_ore'
  | 'minecraft:coral'
  | 'minecraft:coral_block'
  | 'minecraft:coral_fan'
  | 'minecraft:coral_fan_dead'
  | 'minecraft:coral_fan_hang'
  | 'minecraft:coral_fan_hang2'
  | 'minecraft:coral_fan_hang3'
  | 'minecraft:cracked_deepslate_bricks'
  | 'minecraft:cracked_deepslate_tiles'
  | 'minecraft:cracked_nether_bricks'
  | 'minecraft:cracked_polished_blackstone_bricks'
  | 'minecraft:crafting_table'
  | 'minecraft:crimson_button'
  | 'minecraft:crimson_door'
  | 'minecraft:crimson_double_slab'
  | 'minecraft:crimson_fence'
  | 'minecraft:crimson_fence_gate'
  | 'minecraft:crimson_fungus'
  | 'minecraft:crimson_hyphae'
  | 'minecraft:crimson_nylium'
  | 'minecraft:crimson_planks'
  | 'minecraft:crimson_pressure_plate'
  | 'minecraft:crimson_roots'
  | 'minecraft:crimson_slab'
  | 'minecraft:crimson_stairs'
  | 'minecraft:crimson_standing_sign'
  | 'minecraft:crimson_stem'
  | 'minecraft:crimson_trapdoor'
  | 'minecraft:crimson_wall_sign'
  | 'minecraft:crying_obsidian'
  | 'minecraft:cut_copper'
  | 'minecraft:cut_copper_slab'
  | 'minecraft:cut_copper_stairs'
  | 'minecraft:cyan_candle'
  | 'minecraft:cyan_candle_cake'
  | 'minecraft:cyan_glazed_terracotta'
  | 'minecraft:dark_oak_button'
  | 'minecraft:dark_oak_door'
  | 'minecraft:dark_oak_fence_gate'
  | 'minecraft:dark_oak_pressure_plate'
  | 'minecraft:dark_oak_stairs'
  | 'minecraft:dark_oak_trapdoor'
  | 'minecraft:dark_prismarine_stairs'
  | 'minecraft:darkoak_standing_sign'
  | 'minecraft:darkoak_wall_sign'
  | 'minecraft:daylight_detector'
  | 'minecraft:daylight_detector_inverted'
  | 'minecraft:deadbush'
  | 'minecraft:deepslate'
  | 'minecraft:deepslate_brick_double_slab'
  | 'minecraft:deepslate_brick_slab'
  | 'minecraft:deepslate_brick_stairs'
  | 'minecraft:deepslate_brick_wall'
  | 'minecraft:deepslate_bricks'
  | 'minecraft:deepslate_coal_ore'
  | 'minecraft:deepslate_copper_ore'
  | 'minecraft:deepslate_diamond_ore'
  | 'minecraft:deepslate_emerald_ore'
  | 'minecraft:deepslate_gold_ore'
  | 'minecraft:deepslate_iron_ore'
  | 'minecraft:deepslate_lapis_ore'
  | 'minecraft:deepslate_redstone_ore'
  | 'minecraft:deepslate_tile_double_slab'
  | 'minecraft:deepslate_tile_slab'
  | 'minecraft:deepslate_tile_stairs'
  | 'minecraft:deepslate_tile_wall'
  | 'minecraft:deepslate_tiles'
  | 'minecraft:deny'
  | 'minecraft:detector_rail'
  | 'minecraft:diamond_block'
  | 'minecraft:diamond_ore'
  | 'minecraft:diorite_stairs'
  | 'minecraft:dirt'
  | 'minecraft:dirt_with_roots'
  | 'minecraft:dispenser'
  | 'minecraft:double_cut_copper_slab'
  | 'minecraft:double_plant'
  | 'minecraft:double_stone_slab'
  | 'minecraft:double_stone_slab2'
  | 'minecraft:double_stone_slab3'
  | 'minecraft:double_stone_slab4'
  | 'minecraft:double_wooden_slab'
  | 'minecraft:dragon_egg'
  | 'minecraft:dried_kelp_block'
  | 'minecraft:dripstone_block'
  | 'minecraft:dropper'
  | 'minecraft:element_0'
  | 'minecraft:element_1'
  | 'minecraft:element_10'
  | 'minecraft:element_100'
  | 'minecraft:element_101'
  | 'minecraft:element_102'
  | 'minecraft:element_103'
  | 'minecraft:element_104'
  | 'minecraft:element_105'
  | 'minecraft:element_106'
  | 'minecraft:element_107'
  | 'minecraft:element_108'
  | 'minecraft:element_109'
  | 'minecraft:element_11'
  | 'minecraft:element_110'
  | 'minecraft:element_111'
  | 'minecraft:element_112'
  | 'minecraft:element_113'
  | 'minecraft:element_114'
  | 'minecraft:element_115'
  | 'minecraft:element_116'
  | 'minecraft:element_117'
  | 'minecraft:element_118'
  | 'minecraft:element_12'
  | 'minecraft:element_13'
  | 'minecraft:element_14'
  | 'minecraft:element_15'
  | 'minecraft:element_16'
  | 'minecraft:element_17'
  | 'minecraft:element_18'
  | 'minecraft:element_19'
  | 'minecraft:element_2'
  | 'minecraft:element_20'
  | 'minecraft:element_21'
  | 'minecraft:element_22'
  | 'minecraft:element_23'
  | 'minecraft:element_24'
  | 'minecraft:element_25'
  | 'minecraft:element_26'
  | 'minecraft:element_27'
  | 'minecraft:element_28'
  | 'minecraft:element_29'
  | 'minecraft:element_3'
  | 'minecraft:element_30'
  | 'minecraft:element_31'
  | 'minecraft:element_32'
  | 'minecraft:element_33'
  | 'minecraft:element_34'
  | 'minecraft:element_35'
  | 'minecraft:element_36'
  | 'minecraft:element_37'
  | 'minecraft:element_38'
  | 'minecraft:element_39'
  | 'minecraft:element_4'
  | 'minecraft:element_40'
  | 'minecraft:element_41'
  | 'minecraft:element_42'
  | 'minecraft:element_43'
  | 'minecraft:element_44'
  | 'minecraft:element_45'
  | 'minecraft:element_46'
  | 'minecraft:element_47'
  | 'minecraft:element_48'
  | 'minecraft:element_49'
  | 'minecraft:element_5'
  | 'minecraft:element_50'
  | 'minecraft:element_51'
  | 'minecraft:element_52'
  | 'minecraft:element_53'
  | 'minecraft:element_54'
  | 'minecraft:element_55'
  | 'minecraft:element_56'
  | 'minecraft:element_57'
  | 'minecraft:element_58'
  | 'minecraft:element_59'
  | 'minecraft:element_6'
  | 'minecraft:element_60'
  | 'minecraft:element_61'
  | 'minecraft:element_62'
  | 'minecraft:element_63'
  | 'minecraft:element_64'
  | 'minecraft:element_65'
  | 'minecraft:element_66'
  | 'minecraft:element_67'
  | 'minecraft:element_68'
  | 'minecraft:element_69'
  | 'minecraft:element_7'
  | 'minecraft:element_70'
  | 'minecraft:element_71'
  | 'minecraft:element_72'
  | 'minecraft:element_73'
  | 'minecraft:element_74'
  | 'minecraft:element_75'
  | 'minecraft:element_76'
  | 'minecraft:element_77'
  | 'minecraft:element_78'
  | 'minecraft:element_79'
  | 'minecraft:element_8'
  | 'minecraft:element_80'
  | 'minecraft:element_81'
  | 'minecraft:element_82'
  | 'minecraft:element_83'
  | 'minecraft:element_84'
  | 'minecraft:element_85'
  | 'minecraft:element_86'
  | 'minecraft:element_87'
  | 'minecraft:element_88'
  | 'minecraft:element_89'
  | 'minecraft:element_9'
  | 'minecraft:element_90'
  | 'minecraft:element_91'
  | 'minecraft:element_92'
  | 'minecraft:element_93'
  | 'minecraft:element_94'
  | 'minecraft:element_95'
  | 'minecraft:element_96'
  | 'minecraft:element_97'
  | 'minecraft:element_98'
  | 'minecraft:element_99'
  | 'minecraft:emerald_block'
  | 'minecraft:emerald_ore'
  | 'minecraft:enchanting_table'
  | 'minecraft:end_brick_stairs'
  | 'minecraft:end_bricks'
  | 'minecraft:end_gateway'
  | 'minecraft:end_portal'
  | 'minecraft:end_portal_frame'
  | 'minecraft:end_rod'
  | 'minecraft:end_stone'
  | 'minecraft:ender_chest'
  | 'minecraft:exposed_copper'
  | 'minecraft:exposed_cut_copper'
  | 'minecraft:exposed_cut_copper_slab'
  | 'minecraft:exposed_cut_copper_stairs'
  | 'minecraft:exposed_double_cut_copper_slab'
  | 'minecraft:farmland'
  | 'minecraft:fence'
  | 'minecraft:fence_gate'
  | 'minecraft:fire'
  | 'minecraft:fletching_table'
  | 'minecraft:flower_pot'
  | 'minecraft:flowering_azalea'
  | 'minecraft:flowing_lava'
  | 'minecraft:flowing_water'
  | 'minecraft:frame'
  | 'minecraft:frog_egg'
  | 'minecraft:frosted_ice'
  | 'minecraft:furnace'
  | 'minecraft:gilded_blackstone'
  | 'minecraft:glass'
  | 'minecraft:glass_pane'
  | 'minecraft:glow_frame'
  | 'minecraft:glow_lichen'
  | 'minecraft:glowingobsidian'
  | 'minecraft:glowstone'
  | 'minecraft:gold_block'
  | 'minecraft:gold_ore'
  | 'minecraft:golden_rail'
  | 'minecraft:granite_stairs'
  | 'minecraft:grass'
  | 'minecraft:grass_path'
  | 'minecraft:gravel'
  | 'minecraft:gray_candle'
  | 'minecraft:gray_candle_cake'
  | 'minecraft:gray_glazed_terracotta'
  | 'minecraft:green_candle'
  | 'minecraft:green_candle_cake'
  | 'minecraft:green_glazed_terracotta'
  | 'minecraft:grindstone'
  | 'minecraft:hanging_roots'
  | 'minecraft:hard_glass'
  | 'minecraft:hard_glass_pane'
  | 'minecraft:hard_stained_glass'
  | 'minecraft:hard_stained_glass_pane'
  | 'minecraft:hardened_clay'
  | 'minecraft:hay_block'
  | 'minecraft:heavy_weighted_pressure_plate'
  | 'minecraft:honey_block'
  | 'minecraft:honeycomb_block'
  | 'minecraft:hopper'
  | 'minecraft:ice'
  | 'minecraft:infested_deepslate'
  | 'minecraft:info_update'
  | 'minecraft:info_update2'
  | 'minecraft:invisibleBedrock'
  | 'minecraft:iron_bars'
  | 'minecraft:iron_block'
  | 'minecraft:iron_door'
  | 'minecraft:iron_ore'
  | 'minecraft:iron_trapdoor'
  | 'minecraft:jigsaw'
  | 'minecraft:jukebox'
  | 'minecraft:jungle_button'
  | 'minecraft:jungle_door'
  | 'minecraft:jungle_fence_gate'
  | 'minecraft:jungle_pressure_plate'
  | 'minecraft:jungle_stairs'
  | 'minecraft:jungle_standing_sign'
  | 'minecraft:jungle_trapdoor'
  | 'minecraft:jungle_wall_sign'
  | 'minecraft:kelp'
  | 'minecraft:ladder'
  | 'minecraft:lantern'
  | 'minecraft:lapis_block'
  | 'minecraft:lapis_ore'
  | 'minecraft:large_amethyst_bud'
  | 'minecraft:lava'
  | 'minecraft:lava_cauldron'
  | 'minecraft:leaves'
  | 'minecraft:leaves2'
  | 'minecraft:lectern'
  | 'minecraft:lever'
  | 'minecraft:light_block'
  | 'minecraft:light_blue_candle'
  | 'minecraft:light_blue_candle_cake'
  | 'minecraft:light_blue_glazed_terracotta'
  | 'minecraft:light_gray_candle'
  | 'minecraft:light_gray_candle_cake'
  | 'minecraft:light_weighted_pressure_plate'
  | 'minecraft:lightning_rod'
  | 'minecraft:lime_candle'
  | 'minecraft:lime_candle_cake'
  | 'minecraft:lime_glazed_terracotta'
  | 'minecraft:lit_blast_furnace'
  | 'minecraft:lit_deepslate_redstone_ore'
  | 'minecraft:lit_furnace'
  | 'minecraft:lit_pumpkin'
  | 'minecraft:lit_redstone_lamp'
  | 'minecraft:lit_redstone_ore'
  | 'minecraft:lit_smoker'
  | 'minecraft:lodestone'
  | 'minecraft:log'
  | 'minecraft:log2'
  | 'minecraft:loom'
  | 'minecraft:magenta_candle'
  | 'minecraft:magenta_candle_cake'
  | 'minecraft:magenta_glazed_terracotta'
  | 'minecraft:magma'
  | 'minecraft:medium_amethyst_bud'
  | 'minecraft:melon_block'
  | 'minecraft:melon_stem'
  | 'minecraft:mob_spawner'
  | 'minecraft:monster_egg'
  | 'minecraft:moss_block'
  | 'minecraft:moss_carpet'
  | 'minecraft:mossy_cobblestone'
  | 'minecraft:mossy_cobblestone_stairs'
  | 'minecraft:mossy_stone_brick_stairs'
  | 'minecraft:movingBlock'
  | 'minecraft:mycelium'
  | 'minecraft:mysterious_frame'
  | 'minecraft:mysterious_frame_slot'
  | 'minecraft:nether_brick'
  | 'minecraft:nether_brick_fence'
  | 'minecraft:nether_brick_stairs'
  | 'minecraft:nether_gold_ore'
  | 'minecraft:nether_sprouts'
  | 'minecraft:nether_wart'
  | 'minecraft:nether_wart_block'
  | 'minecraft:netherite_block'
  | 'minecraft:netherrack'
  | 'minecraft:netherreactor'
  | 'minecraft:normal_stone_stairs'
  | 'minecraft:noteblock'
  | 'minecraft:oak_stairs'
  | 'minecraft:observer'
  | 'minecraft:obsidian'
  | 'minecraft:ochre_froglight'
  | 'minecraft:orange_candle'
  | 'minecraft:orange_candle_cake'
  | 'minecraft:orange_glazed_terracotta'
  | 'minecraft:oxidized_copper'
  | 'minecraft:oxidized_cut_copper'
  | 'minecraft:oxidized_cut_copper_slab'
  | 'minecraft:oxidized_cut_copper_stairs'
  | 'minecraft:oxidized_double_cut_copper_slab'
  | 'minecraft:packed_ice'
  | 'minecraft:pearlescent_froglight'
  | 'minecraft:pink_candle'
  | 'minecraft:pink_candle_cake'
  | 'minecraft:pink_glazed_terracotta'
  | 'minecraft:piston'
  | 'minecraft:pistonArmCollision'
  | 'minecraft:planks'
  | 'minecraft:podzol'
  | 'minecraft:pointed_dripstone'
  | 'minecraft:polished_andesite_stairs'
  | 'minecraft:polished_basalt'
  | 'minecraft:polished_blackstone'
  | 'minecraft:polished_blackstone_brick_double_slab'
  | 'minecraft:polished_blackstone_brick_slab'
  | 'minecraft:polished_blackstone_brick_stairs'
  | 'minecraft:polished_blackstone_brick_wall'
  | 'minecraft:polished_blackstone_bricks'
  | 'minecraft:polished_blackstone_button'
  | 'minecraft:polished_blackstone_double_slab'
  | 'minecraft:polished_blackstone_pressure_plate'
  | 'minecraft:polished_blackstone_slab'
  | 'minecraft:polished_blackstone_stairs'
  | 'minecraft:polished_blackstone_wall'
  | 'minecraft:polished_deepslate'
  | 'minecraft:polished_deepslate_double_slab'
  | 'minecraft:polished_deepslate_slab'
  | 'minecraft:polished_deepslate_stairs'
  | 'minecraft:polished_deepslate_wall'
  | 'minecraft:polished_diorite_stairs'
  | 'minecraft:polished_granite_stairs'
  | 'minecraft:portal'
  | 'minecraft:potatoes'
  | 'minecraft:powder_snow'
  | 'minecraft:powered_comparator'
  | 'minecraft:powered_repeater'
  | 'minecraft:prismarine'
  | 'minecraft:prismarine_bricks_stairs'
  | 'minecraft:prismarine_stairs'
  | 'minecraft:pumpkin'
  | 'minecraft:pumpkin_stem'
  | 'minecraft:purple_candle'
  | 'minecraft:purple_candle_cake'
  | 'minecraft:purple_glazed_terracotta'
  | 'minecraft:purpur_block'
  | 'minecraft:purpur_stairs'
  | 'minecraft:quartz_block'
  | 'minecraft:quartz_bricks'
  | 'minecraft:quartz_ore'
  | 'minecraft:quartz_stairs'
  | 'minecraft:rail'
  | 'minecraft:raw_copper_block'
  | 'minecraft:raw_gold_block'
  | 'minecraft:raw_iron_block'
  | 'minecraft:red_candle'
  | 'minecraft:red_candle_cake'
  | 'minecraft:red_flower'
  | 'minecraft:red_glazed_terracotta'
  | 'minecraft:red_mushroom'
  | 'minecraft:red_mushroom_block'
  | 'minecraft:red_nether_brick'
  | 'minecraft:red_nether_brick_stairs'
  | 'minecraft:red_sandstone'
  | 'minecraft:red_sandstone_stairs'
  | 'minecraft:redstone_block'
  | 'minecraft:redstone_lamp'
  | 'minecraft:redstone_ore'
  | 'minecraft:redstone_torch'
  | 'minecraft:redstone_wire'
  | 'minecraft:reeds'
  | 'minecraft:repeating_command_block'
  | 'minecraft:reserved6'
  | 'minecraft:respawn_anchor'
  | 'minecraft:sand'
  | 'minecraft:sandstone'
  | 'minecraft:sandstone_stairs'
  | 'minecraft:sapling'
  | 'minecraft:scaffolding'
  | 'minecraft:sculk'
  | 'minecraft:sculk_catalyst'
  | 'minecraft:sculk_sensor'
  | 'minecraft:sculk_shrieker'
  | 'minecraft:sculk_vein'
  | 'minecraft:seaLantern'
  | 'minecraft:sea_pickle'
  | 'minecraft:seagrass'
  | 'minecraft:shroomlight'
  | 'minecraft:shulker_box'
  | 'minecraft:silver_glazed_terracotta'
  | 'minecraft:skull'
  | 'minecraft:slime'
  | 'minecraft:small_amethyst_bud'
  | 'minecraft:small_dripleaf_block'
  | 'minecraft:smithing_table'
  | 'minecraft:smoker'
  | 'minecraft:smooth_basalt'
  | 'minecraft:smooth_quartz_stairs'
  | 'minecraft:smooth_red_sandstone_stairs'
  | 'minecraft:smooth_sandstone_stairs'
  | 'minecraft:smooth_stone'
  | 'minecraft:snow'
  | 'minecraft:snow_layer'
  | 'minecraft:soul_campfire'
  | 'minecraft:soul_fire'
  | 'minecraft:soul_lantern'
  | 'minecraft:soul_sand'
  | 'minecraft:soul_soil'
  | 'minecraft:soul_torch'
  | 'minecraft:sponge'
  | 'minecraft:spore_blossom'
  | 'minecraft:spruce_button'
  | 'minecraft:spruce_door'
  | 'minecraft:spruce_fence_gate'
  | 'minecraft:spruce_pressure_plate'
  | 'minecraft:spruce_stairs'
  | 'minecraft:spruce_standing_sign'
  | 'minecraft:spruce_trapdoor'
  | 'minecraft:spruce_wall_sign'
  | 'minecraft:stained_glass'
  | 'minecraft:stained_glass_pane'
  | 'minecraft:stained_hardened_clay'
  | 'minecraft:standing_banner'
  | 'minecraft:standing_sign'
  | 'minecraft:stickyPistonArmCollision'
  | 'minecraft:sticky_piston'
  | 'minecraft:stone'
  | 'minecraft:stone_brick_stairs'
  | 'minecraft:stone_button'
  | 'minecraft:stone_pressure_plate'
  | 'minecraft:stone_slab'
  | 'minecraft:stone_slab2'
  | 'minecraft:stone_slab3'
  | 'minecraft:stone_slab4'
  | 'minecraft:stone_stairs'
  | 'minecraft:stonebrick'
  | 'minecraft:stonecutter'
  | 'minecraft:stonecutter_block'
  | 'minecraft:stripped_acacia_log'
  | 'minecraft:stripped_birch_log'
  | 'minecraft:stripped_crimson_hyphae'
  | 'minecraft:stripped_crimson_stem'
  | 'minecraft:stripped_dark_oak_log'
  | 'minecraft:stripped_jungle_log'
  | 'minecraft:stripped_oak_log'
  | 'minecraft:stripped_spruce_log'
  | 'minecraft:stripped_warped_hyphae'
  | 'minecraft:stripped_warped_stem'
  | 'minecraft:structure_block'
  | 'minecraft:structure_void'
  | 'minecraft:sweet_berry_bush'
  | 'minecraft:tallgrass'
  | 'minecraft:target'
  | 'minecraft:tinted_glass'
  | 'minecraft:tnt'
  | 'minecraft:torch'
  | 'minecraft:trapdoor'
  | 'minecraft:trapped_chest'
  | 'minecraft:tripWire'
  | 'minecraft:tripwire_hook'
  | 'minecraft:tuff'
  | 'minecraft:turtle_egg'
  | 'minecraft:twisting_vines'
  | 'minecraft:underwater_torch'
  | 'minecraft:undyed_shulker_box'
  | 'minecraft:unknown'
  | 'minecraft:unlit_redstone_torch'
  | 'minecraft:unpowered_comparator'
  | 'minecraft:unpowered_repeater'
  | 'minecraft:verdant_froglight'
  | 'minecraft:vine'
  | 'minecraft:wall_banner'
  | 'minecraft:wall_sign'
  | 'minecraft:warped_button'
  | 'minecraft:warped_door'
  | 'minecraft:warped_double_slab'
  | 'minecraft:warped_fence'
  | 'minecraft:warped_fence_gate'
  | 'minecraft:warped_fungus'
  | 'minecraft:warped_hyphae'
  | 'minecraft:warped_nylium'
  | 'minecraft:warped_planks'
  | 'minecraft:warped_pressure_plate'
  | 'minecraft:warped_roots'
  | 'minecraft:warped_slab'
  | 'minecraft:warped_stairs'
  | 'minecraft:warped_standing_sign'
  | 'minecraft:warped_stem'
  | 'minecraft:warped_trapdoor'
  | 'minecraft:warped_wall_sign'
  | 'minecraft:warped_wart_block'
  | 'minecraft:water'
  | 'minecraft:waterlily'
  | 'minecraft:waxed_copper'
  | 'minecraft:waxed_cut_copper'
  | 'minecraft:waxed_cut_copper_slab'
  | 'minecraft:waxed_cut_copper_stairs'
  | 'minecraft:waxed_double_cut_copper_slab'
  | 'minecraft:waxed_exposed_copper'
  | 'minecraft:waxed_exposed_cut_copper'
  | 'minecraft:waxed_exposed_cut_copper_slab'
  | 'minecraft:waxed_exposed_cut_copper_stairs'
  | 'minecraft:waxed_exposed_double_cut_copper_slab'
  | 'minecraft:waxed_oxidized_copper'
  | 'minecraft:waxed_oxidized_cut_copper'
  | 'minecraft:waxed_oxidized_cut_copper_slab'
  | 'minecraft:waxed_oxidized_cut_copper_stairs'
  | 'minecraft:waxed_oxidized_double_cut_copper_slab'
  | 'minecraft:waxed_weathered_copper'
  | 'minecraft:waxed_weathered_cut_copper'
  | 'minecraft:waxed_weathered_cut_copper_slab'
  | 'minecraft:waxed_weathered_cut_copper_stairs'
  | 'minecraft:waxed_weathered_double_cut_copper_slab'
  | 'minecraft:weathered_copper'
  | 'minecraft:weathered_cut_copper'
  | 'minecraft:weathered_cut_copper_slab'
  | 'minecraft:weathered_cut_copper_stairs'
  | 'minecraft:weathered_double_cut_copper_slab'
  | 'minecraft:web'
  | 'minecraft:weeping_vines'
  | 'minecraft:wheat'
  | 'minecraft:white_candle'
  | 'minecraft:white_candle_cake'
  | 'minecraft:white_glazed_terracotta'
  | 'minecraft:wither_rose'
  | 'minecraft:wood'
  | 'minecraft:wooden_button'
  | 'minecraft:wooden_door'
  | 'minecraft:wooden_pressure_plate'
  | 'minecraft:wooden_slab'
  | 'minecraft:wool'
  | 'minecraft:yellow_candle'
  | 'minecraft:yellow_candle_cake'
  | 'minecraft:yellow_flower'
  | 'minecraft:yellow_glazed_terracotta';

export declare type MinecraftCategories = 'construction' | 'equipment' | 'items' | 'nature';

export declare type MinecraftConditionsType =
  | EntityProperties
  | HasMarkVariant
  | KilledByPlayer
  | KilledByPlayerOrPets
  | RandomChance
  | RandomChanceWithLooting
  | RandomDifficultyChance
  | RandomRegionalDifficultyChance;

export declare type MinecraftContainer =
  | 'horse'
  | 'minecart_chest'
  | 'minecart_hopper'
  | 'inventory'
  | 'container'
  | 'hopper';

export declare type MinecraftCreativeCategories =
  | 'itemGroup.name.anvil'
  | 'itemGroup.name.arrow'
  | 'itemGroup.name.axe'
  | 'itemGroup.name.banner'
  | 'itemGroup.name.banner_pattern'
  | 'itemGroup.name.bed'
  | 'itemGroup.name.boat'
  | 'itemGroup.name.boots'
  | 'itemGroup.name.buttons'
  | 'itemGroup.name.chalkboard'
  | 'itemGroup.name.chest'
  | 'itemGroup.name.chestplate'
  | 'itemGroup.name.concrete'
  | 'itemGroup.name.concretePowder'
  | 'itemGroup.name.cookedFood'
  | 'itemGroup.name.coral'
  | 'itemGroup.name.coral_decorations'
  | 'itemGroup.name.crop'
  | 'itemGroup.name.door'
  | 'itemGroup.name.dye'
  | 'itemGroup.name.enchantedBook'
  | 'itemGroup.name.fence'
  | 'itemGroup.name.fenceGate'
  | 'itemGroup.name.firework'
  | 'itemGroup.name.fireworkStars'
  | 'itemGroup.name.flower'
  | 'itemGroup.name.glass'
  | 'itemGroup.name.glassPane'
  | 'itemGroup.name.glazedTerracotta'
  | 'itemGroup.name.grass'
  | 'itemGroup.name.helmet'
  | 'itemGroup.name.hoe'
  | 'itemGroup.name.horseArmor'
  | 'itemGroup.name.leaves'
  | 'itemGroup.name.leggings'
  | 'itemGroup.name.lingeringPotion'
  | 'itemGroup.name.log'
  | 'itemGroup.name.minecart'
  | 'itemGroup.name.miscFood'
  | 'itemGroup.name.mobEgg'
  | 'itemGroup.name.monsterStoneEgg'
  | 'itemGroup.name.mushroom'
  | 'itemGroup.name.netherWartBlock'
  | 'itemGroup.name.ore'
  | 'itemGroup.name.permission'
  | 'itemGroup.name.pickaxe'
  | 'itemGroup.name.planks'
  | 'itemGroup.name.potion'
  | 'itemGroup.name.pressurePlate'
  | 'itemGroup.name.rail'
  | 'itemGroup.name.rawFood'
  | 'itemGroup.name.record'
  | 'itemGroup.name.sandstone'
  | 'itemGroup.name.sapling'
  | 'itemGroup.name.seed'
  | 'itemGroup.name.shovel'
  | 'itemGroup.name.shulkerBox'
  | 'itemGroup.name.sign'
  | 'itemGroup.name.skull'
  | 'itemGroup.name.slab'
  | 'itemGroup.name.splashPotion'
  | 'itemGroup.name.stainedClay'
  | 'itemGroup.name.stairs'
  | 'itemGroup.name.stone'
  | 'itemGroup.name.stoneBrick'
  | 'itemGroup.name.sword'
  | 'itemGroup.name.trapdoor'
  | 'itemGroup.name.walls'
  | 'itemGroup.name.wood'
  | 'itemGroup.name.wool'
  | 'itemGroup.name.woolCarpet';

export declare type MinecraftDamageSource =
  | 'all'
  | 'anvil'
  | 'block_explosion'
  | 'charging'
  | 'contact'
  | 'drowning'
  | 'entity_attack'
  | 'entity_explosion'
  | 'fall'
  | 'falling_block'
  | 'fatal'
  | 'fire'
  | 'fire_tick'
  | 'fireworks'
  | 'fly_into_wall'
  | 'freezing'
  | 'lava'
  | 'lightning'
  | 'magic'
  | 'magma'
  | 'none'
  | 'override'
  | 'piston'
  | 'projectile'
  | 'stalactite'
  | 'stalagmite'
  | 'starve'
  | 'suffocation'
  | 'suicide'
  | 'temperature'
  | 'thorns'
  | 'void'
  | 'wither';

export declare type MinecraftDifficulty = 'easy' | 'hard' | 'normal' | 'peaceful';

export declare type MinecraftDomains = 'any' | 'armor' | 'feet' | 'hand' | 'head' | 'leg' | 'tors';

export declare type MinecraftDyeColors =
  | 'black'
  | 'blue'
  | 'brown'
  | 'cyan'
  | 'gray'
  | 'green'
  | 'light_blue'
  | 'light_gray'
  | 'lime'
  | 'magenta'
  | 'orange'
  | 'pink'
  | 'purple'
  | 'red'
  | 'white'
  | 'yellow';

export declare type MinecraftEffects =
  | 'absorption'
  | 'unluck'
  | 'bad_omen'
  | 'blindness'
  | 'conduit_power'
  | 'dolphins_grace'
  | 'fire_resistance'
  | 'glowing'
  | 'haste'
  | 'health_boost'
  | 'hero_of_the_village'
  | 'hunger'
  | 'instant_damage'
  | 'instant_health'
  | 'invisibility'
  | 'jump_boost'
  | 'levitation'
  | 'luck'
  | 'mining_fatigue'
  | 'nausea'
  | 'night_vision'
  | 'poison'
  | 'regeneration'
  | 'resistance'
  | 'saturation'
  | 'slow_falling'
  | 'slowness'
  | 'speed'
  | 'strength'
  | 'water_breathing'
  | 'weakness'
  | 'wither';

export declare type MinecraftEnchantments =
  | 'aqua_affinity'
  | 'bane_of_arthropods'
  | 'binding'
  | 'blast_protection'
  | 'channeling'
  | 'curse_of_vanishing'
  | 'depth_strider'
  | 'efficiency'
  | 'feather_falling'
  | 'fire_aspect'
  | 'fire_protection'
  | 'flame'
  | 'fortune'
  | 'frost_walker'
  | 'impaling'
  | 'infinity'
  | 'knockback'
  | 'looting'
  | 'loyalty'
  | 'luck_of_the_sea'
  | 'lure'
  | 'mending'
  | 'multishot'
  | 'piercing'
  | 'power'
  | 'projectile_protection'
  | 'protection'
  | 'punch'
  | 'quick_charge'
  | 'respiration'
  | 'riptide'
  | 'sharpness'
  | 'silk_touch'
  | 'smite'
  | 'soul_speed'
  | 'thorns'
  | 'unbreaking';

export declare type MinecraftEntities =
  | 'agent'
  | 'allay'
  | 'area_effect_cloud'
  | 'armor_stand'
  | 'arrow'
  | 'axolotl'
  | 'balloon'
  | 'bat'
  | 'bee'
  | 'blaze'
  | 'boat'
  | 'cat'
  | 'cave_spider'
  | 'chalkboard'
  | 'chest_minecart'
  | 'chicken'
  | 'cod'
  | 'command_block_minecart'
  | 'cow'
  | 'creeper'
  | 'dolphin'
  | 'donkey'
  | 'dragon_fireball'
  | 'drowned'
  | 'egg'
  | 'elder_guardian'
  | 'elder_guardian_ghost'
  | 'ender_crystal'
  | 'ender_dragon'
  | 'ender_pearl'
  | 'enderman'
  | 'endermite'
  | 'evocation_fang'
  | 'evocation_illager'
  | 'eye_of_ender_signal'
  | 'falling_block'
  | 'fireball'
  | 'firefly'
  | 'fireworks_rocket'
  | 'fishing_hook'
  | 'fox'
  | 'frog'
  | 'ghast'
  | 'glow_squid'
  | 'goat'
  | 'guardian'
  | 'hoglin'
  | 'hopper_minecart'
  | 'horse'
  | 'husk'
  | 'ice_bomb'
  | 'iron_golem'
  | 'item'
  | 'leash_knot'
  | 'lightning_bolt'
  | 'lingering_potion'
  | 'llama'
  | 'llama_spit'
  | 'magma_cube'
  | 'minecart'
  | 'mooshroom'
  | 'moving_block'
  | 'mule'
  | 'npc'
  | 'ocelot'
  | 'painting'
  | 'panda'
  | 'parrot'
  | 'phantom'
  | 'pig'
  | 'piglin'
  | 'piglin_brute'
  | 'pillager'
  | 'player'
  | 'polar_bear'
  | 'pufferfish'
  | 'rabbit'
  | 'ravager'
  | 'salmon'
  | 'sheep'
  | 'shield'
  | 'shulker'
  | 'shulker_bullet'
  | 'silverfish'
  | 'skeleton'
  | 'skeleton_horse'
  | 'slime'
  | 'small_fireball'
  | 'snow_golem'
  | 'snowball'
  | 'spider'
  | 'splash_potion'
  | 'squid'
  | 'stray'
  | 'strider'
  | 'tadpole'
  | 'thrown_trident'
  | 'tnt'
  | 'tnt_minecart'
  | 'tripod_camera'
  | 'tropicalfish'
  | 'turtle'
  | 'vex'
  | 'villager'
  | 'vindicator'
  | 'wandering_trader'
  | 'witch'
  | 'wither'
  | 'wither_skeleton'
  | 'wither_skull'
  | 'wither_skull_dangerous'
  | 'wolf'
  | 'xp_bottle'
  | 'xp_orb'
  | 'zoglin'
  | 'zombie'
  | 'zombie_horse'
  | 'zombie_pigman'
  | 'zombie_villager';

export declare type MinecraftEntriesType = EmptyType | ItemType | LootTableType;

export declare type MinecraftFilters = MinecraftFiltersOf | MinecraftFiltersType;

export declare type MinecraftFiltersType =
  | ClockTime
  | DistanceToNearestPlayer
  | HasAbility
  | HasBiomeTag
  | HasComponent
  | HasContainerOpen
  | HasDamage
  | HasEquipment
  | HasMobEffect
  | HasNametag
  | HasRangedWeapon
  | HasTag
  | HasTarget
  | HasTradeSupply
  | HourlyClockTime
  | InactivityTimer
  | InBlock
  | InCaravan
  | InClouds
  | InContactWithWater
  | InLava
  | InNether
  | InWater
  | InWaterOrRain
  | IsAltitude
  | IsAvoidingMobs
  | IsBiome
  | IsBlock
  | IsBrightness
  | IsClimbing
  | IsColor
  | IsDaytime
  | IsDifficulty
  | IsFamily
  | IsGameRule
  | IsHumid
  | IsImmobile
  | IsInVillage
  | IsLeashed
  | IsLeashedTo
  | IsMarkVariant
  | IsMissingHealth
  | IsMoving
  | IsOwner
  | IsPersistent
  | IsRiding
  | IsSkingId
  | IsSleeping
  | IsSneaking
  | IsSnowCovered
  | IsTarget
  | IsTemperatureType
  | IsTemperatureValue
  | IsUnderground
  | IsUnderwater
  | IsVariant
  | IsVisible
  | IsWeather
  | LightLevel
  | MoonIntensity
  | MoonPhase
  | OnGround
  | OnLadder
  | RandomChance
  | RiderCount
  | SurfaceMob
  | Trusts
  | Weather
  | WeatherAtPosition;

export declare type MinecraftFunctionsType =
  | EnchantBookForTrading
  | EnchantRandomGear
  | EnchantRandomly
  | EnchantWithLevels
  | ExplorationMap
  | FillContainer
  | FurnaceSmelt
  | LootingEnchant
  | RandomAuxValue
  | RandomBlockState
  | RandomDye
  | SetActorId
  | SetBannerDetails
  | SetBookContents
  | SetCount
  | SetDamage
  | SetData
  | SetDataFromColorIndex
  | SetLore
  | SetName
  | SpecificEnchants
  | TraderMaterialType;

export declare type MinecraftFurnaceRecipeTags = 'furnace' | 'blast_furnace' | 'smoker' | 'campfire' | 'soul_campfire';

export declare type MinecraftItems =
  | 'minecraft:acacia_boat'
  | 'minecraft:acacia_button'
  | 'minecraft:acacia_door'
  | 'minecraft:acacia_fence_gate'
  | 'minecraft:acacia_pressure_plate'
  | 'minecraft:acacia_sign'
  | 'minecraft:acacia_stairs'
  | 'minecraft:acacia_standing_sign'
  | 'minecraft:acacia_trapdoor'
  | 'minecraft:acacia_wall_sign'
  | 'minecraft:activator_rail'
  | 'minecraft:agent_spawn_egg'
  | 'minecraft:air'
  | 'minecraft:allay_spawn_egg'
  | 'minecraft:allow'
  | 'minecraft:amethyst_block'
  | 'minecraft:amethyst_cluster'
  | 'minecraft:amethyst_shard'
  | 'minecraft:ancient_debris'
  | 'minecraft:andesite_stairs'
  | 'minecraft:anvil'
  | 'minecraft:apple'
  | 'minecraft:armor_stand'
  | 'minecraft:arrow'
  | 'minecraft:axolotl_bucket'
  | 'minecraft:axolotl_spawn_egg'
  | 'minecraft:azalea'
  | 'minecraft:azalea_leaves'
  | 'minecraft:azalea_leaves_flowered'
  | 'minecraft:baked_potato'
  | 'minecraft:balloon'
  | 'minecraft:bamboo'
  | 'minecraft:bamboo_sapling'
  | 'minecraft:banner'
  | 'minecraft:banner_pattern'
  | 'minecraft:barrel'
  | 'minecraft:barrier'
  | 'minecraft:basalt'
  | 'minecraft:bat_spawn_egg'
  | 'minecraft:beacon'
  | 'minecraft:bed'
  | 'minecraft:bedrock'
  | 'minecraft:bee_nest'
  | 'minecraft:bee_spawn_egg'
  | 'minecraft:beef'
  | 'minecraft:beehive'
  | 'minecraft:beetroot'
  | 'minecraft:beetroot_seeds'
  | 'minecraft:beetroot_soup'
  | 'minecraft:bell'
  | 'minecraft:big_dripleaf'
  | 'minecraft:birch_boat'
  | 'minecraft:birch_button'
  | 'minecraft:birch_door'
  | 'minecraft:birch_fence_gate'
  | 'minecraft:birch_pressure_plate'
  | 'minecraft:birch_sign'
  | 'minecraft:birch_stairs'
  | 'minecraft:birch_standing_sign'
  | 'minecraft:birch_trapdoor'
  | 'minecraft:birch_wall_sign'
  | 'minecraft:black_candle'
  | 'minecraft:black_candle_cake'
  | 'minecraft:black_dye'
  | 'minecraft:black_glazed_terracotta'
  | 'minecraft:blackstone'
  | 'minecraft:blackstone_double_slab'
  | 'minecraft:blackstone_slab'
  | 'minecraft:blackstone_stairs'
  | 'minecraft:blackstone_wall'
  | 'minecraft:blast_furnace'
  | 'minecraft:blaze_powder'
  | 'minecraft:blaze_rod'
  | 'minecraft:blaze_spawn_egg'
  | 'minecraft:bleach'
  | 'minecraft:blue_candle'
  | 'minecraft:blue_candle_cake'
  | 'minecraft:blue_dye'
  | 'minecraft:blue_glazed_terracotta'
  | 'minecraft:blue_ice'
  | 'minecraft:boat'
  | 'minecraft:bone'
  | 'minecraft:bone_block'
  | 'minecraft:bone_meal'
  | 'minecraft:book'
  | 'minecraft:bookshelf'
  | 'minecraft:border_block'
  | 'minecraft:bordure_indented_banner_pattern'
  | 'minecraft:bow'
  | 'minecraft:bowl'
  | 'minecraft:bread'
  | 'minecraft:brewing_stand'
  | 'minecraft:brewingstandblock'
  | 'minecraft:brick'
  | 'minecraft:brick_block'
  | 'minecraft:brick_stairs'
  | 'minecraft:brown_candle'
  | 'minecraft:brown_candle_cake'
  | 'minecraft:brown_dye'
  | 'minecraft:brown_glazed_terracotta'
  | 'minecraft:brown_mushroom'
  | 'minecraft:brown_mushroom_block'
  | 'minecraft:bubble_column'
  | 'minecraft:bucket'
  | 'minecraft:budding_amethyst'
  | 'minecraft:cactus'
  | 'minecraft:cake'
  | 'minecraft:calcite'
  | 'minecraft:camera'
  | 'minecraft:campfire'
  | 'minecraft:candle'
  | 'minecraft:candle_cake'
  | 'minecraft:carpet'
  | 'minecraft:carrot'
  | 'minecraft:carrot_on_a_stick'
  | 'minecraft:carrots'
  | 'minecraft:cartography_table'
  | 'minecraft:carved_pumpkin'
  | 'minecraft:cat_spawn_egg'
  | 'minecraft:cauldron'
  | 'minecraft:cave_spider_spawn_egg'
  | 'minecraft:cave_vines'
  | 'minecraft:cave_vines_body_with_berries'
  | 'minecraft:cave_vines_head_with_berries'
  | 'minecraft:chain'
  | 'minecraft:chain_command_block'
  | 'minecraft:chainmail_boots'
  | 'minecraft:chainmail_chestplate'
  | 'minecraft:chainmail_helmet'
  | 'minecraft:chainmail_leggings'
  | 'minecraft:charcoal'
  | 'minecraft:chemical_heat'
  | 'minecraft:chemistry_table'
  | 'minecraft:chest'
  | 'minecraft:chest_minecart'
  | 'minecraft:chicken'
  | 'minecraft:chicken_spawn_egg'
  | 'minecraft:chiseled_deepslate'
  | 'minecraft:chiseled_nether_bricks'
  | 'minecraft:chiseled_polished_blackstone'
  | 'minecraft:chorus_flower'
  | 'minecraft:chorus_fruit'
  | 'minecraft:chorus_plant'
  | 'minecraft:clay'
  | 'minecraft:clay_ball'
  | 'minecraft:client_request_placeholder_block'
  | 'minecraft:clock'
  | 'minecraft:coal'
  | 'minecraft:coal_block'
  | 'minecraft:coal_ore'
  | 'minecraft:cobbled_deepslate'
  | 'minecraft:cobbled_deepslate_double_slab'
  | 'minecraft:cobbled_deepslate_slab'
  | 'minecraft:cobbled_deepslate_stairs'
  | 'minecraft:cobbled_deepslate_wall'
  | 'minecraft:cobblestone'
  | 'minecraft:cobblestone_wall'
  | 'minecraft:cocoa'
  | 'minecraft:cocoa_beans'
  | 'minecraft:cod'
  | 'minecraft:cod_bucket'
  | 'minecraft:cod_spawn_egg'
  | 'minecraft:colored_torch_bp'
  | 'minecraft:colored_torch_rg'
  | 'minecraft:command_block'
  | 'minecraft:command_block_minecart'
  | 'minecraft:comparator'
  | 'minecraft:compass'
  | 'minecraft:composter'
  | 'minecraft:compound'
  | 'minecraft:concrete'
  | 'minecraft:concrete_powder'
  | 'minecraft:conduit'
  | 'minecraft:cooked_beef'
  | 'minecraft:cooked_chicken'
  | 'minecraft:cooked_cod'
  | 'minecraft:cooked_mutton'
  | 'minecraft:cooked_porkchop'
  | 'minecraft:cooked_rabbit'
  | 'minecraft:cooked_salmon'
  | 'minecraft:cookie'
  | 'minecraft:copper_block'
  | 'minecraft:copper_ingot'
  | 'minecraft:copper_ore'
  | 'minecraft:coral'
  | 'minecraft:coral_block'
  | 'minecraft:coral_fan'
  | 'minecraft:coral_fan_dead'
  | 'minecraft:coral_fan_hang'
  | 'minecraft:coral_fan_hang2'
  | 'minecraft:coral_fan_hang3'
  | 'minecraft:cow_spawn_egg'
  | 'minecraft:cracked_deepslate_bricks'
  | 'minecraft:cracked_deepslate_tiles'
  | 'minecraft:cracked_nether_bricks'
  | 'minecraft:cracked_polished_blackstone_bricks'
  | 'minecraft:crafting_table'
  | 'minecraft:creeper_banner_pattern'
  | 'minecraft:creeper_spawn_egg'
  | 'minecraft:crimson_button'
  | 'minecraft:crimson_door'
  | 'minecraft:crimson_double_slab'
  | 'minecraft:crimson_fence'
  | 'minecraft:crimson_fence_gate'
  | 'minecraft:crimson_fungus'
  | 'minecraft:crimson_hyphae'
  | 'minecraft:crimson_nylium'
  | 'minecraft:crimson_planks'
  | 'minecraft:crimson_pressure_plate'
  | 'minecraft:crimson_roots'
  | 'minecraft:crimson_sign'
  | 'minecraft:crimson_slab'
  | 'minecraft:crimson_stairs'
  | 'minecraft:crimson_standing_sign'
  | 'minecraft:crimson_stem'
  | 'minecraft:crimson_trapdoor'
  | 'minecraft:crimson_wall_sign'
  | 'minecraft:crossbow'
  | 'minecraft:crying_obsidian'
  | 'minecraft:cut_copper'
  | 'minecraft:cut_copper_slab'
  | 'minecraft:cut_copper_stairs'
  | 'minecraft:cyan_candle'
  | 'minecraft:cyan_candle_cake'
  | 'minecraft:cyan_dye'
  | 'minecraft:cyan_glazed_terracotta'
  | 'minecraft:dark_oak_boat'
  | 'minecraft:dark_oak_button'
  | 'minecraft:dark_oak_door'
  | 'minecraft:dark_oak_fence_gate'
  | 'minecraft:dark_oak_pressure_plate'
  | 'minecraft:dark_oak_sign'
  | 'minecraft:dark_oak_stairs'
  | 'minecraft:dark_oak_trapdoor'
  | 'minecraft:dark_prismarine_stairs'
  | 'minecraft:darkoak_standing_sign'
  | 'minecraft:darkoak_wall_sign'
  | 'minecraft:daylight_detector'
  | 'minecraft:daylight_detector_inverted'
  | 'minecraft:deadbush'
  | 'minecraft:debug_stick'
  | 'minecraft:deepslate'
  | 'minecraft:deepslate_brick_double_slab'
  | 'minecraft:deepslate_brick_slab'
  | 'minecraft:deepslate_brick_stairs'
  | 'minecraft:deepslate_brick_wall'
  | 'minecraft:deepslate_bricks'
  | 'minecraft:deepslate_coal_ore'
  | 'minecraft:deepslate_copper_ore'
  | 'minecraft:deepslate_diamond_ore'
  | 'minecraft:deepslate_emerald_ore'
  | 'minecraft:deepslate_gold_ore'
  | 'minecraft:deepslate_iron_ore'
  | 'minecraft:deepslate_lapis_ore'
  | 'minecraft:deepslate_redstone_ore'
  | 'minecraft:deepslate_tile_double_slab'
  | 'minecraft:deepslate_tile_slab'
  | 'minecraft:deepslate_tile_stairs'
  | 'minecraft:deepslate_tile_wall'
  | 'minecraft:deepslate_tiles'
  | 'minecraft:deny'
  | 'minecraft:detector_rail'
  | 'minecraft:diamond'
  | 'minecraft:diamond_axe'
  | 'minecraft:diamond_block'
  | 'minecraft:diamond_boots'
  | 'minecraft:diamond_chestplate'
  | 'minecraft:diamond_helmet'
  | 'minecraft:diamond_hoe'
  | 'minecraft:diamond_horse_armor'
  | 'minecraft:diamond_leggings'
  | 'minecraft:diamond_ore'
  | 'minecraft:diamond_pickaxe'
  | 'minecraft:diamond_shovel'
  | 'minecraft:diamond_sword'
  | 'minecraft:diorite_stairs'
  | 'minecraft:dirt'
  | 'minecraft:dirt_with_roots'
  | 'minecraft:dispenser'
  | 'minecraft:dolphin_spawn_egg'
  | 'minecraft:donkey_spawn_egg'
  | 'minecraft:double_cut_copper_slab'
  | 'minecraft:double_plant'
  | 'minecraft:double_stone_slab'
  | 'minecraft:double_stone_slab2'
  | 'minecraft:double_stone_slab3'
  | 'minecraft:double_stone_slab4'
  | 'minecraft:double_wooden_slab'
  | 'minecraft:dragon_breath'
  | 'minecraft:dragon_egg'
  | 'minecraft:dried_kelp'
  | 'minecraft:dried_kelp_block'
  | 'minecraft:dripstone_block'
  | 'minecraft:dropper'
  | 'minecraft:drowned_spawn_egg'
  | 'minecraft:dye'
  | 'minecraft:egg'
  | 'minecraft:elder_guardian_spawn_egg'
  | 'minecraft:element_0'
  | 'minecraft:element_1'
  | 'minecraft:element_10'
  | 'minecraft:element_100'
  | 'minecraft:element_101'
  | 'minecraft:element_102'
  | 'minecraft:element_103'
  | 'minecraft:element_104'
  | 'minecraft:element_105'
  | 'minecraft:element_106'
  | 'minecraft:element_107'
  | 'minecraft:element_108'
  | 'minecraft:element_109'
  | 'minecraft:element_11'
  | 'minecraft:element_110'
  | 'minecraft:element_111'
  | 'minecraft:element_112'
  | 'minecraft:element_113'
  | 'minecraft:element_114'
  | 'minecraft:element_115'
  | 'minecraft:element_116'
  | 'minecraft:element_117'
  | 'minecraft:element_118'
  | 'minecraft:element_12'
  | 'minecraft:element_13'
  | 'minecraft:element_14'
  | 'minecraft:element_15'
  | 'minecraft:element_16'
  | 'minecraft:element_17'
  | 'minecraft:element_18'
  | 'minecraft:element_19'
  | 'minecraft:element_2'
  | 'minecraft:element_20'
  | 'minecraft:element_21'
  | 'minecraft:element_22'
  | 'minecraft:element_23'
  | 'minecraft:element_24'
  | 'minecraft:element_25'
  | 'minecraft:element_26'
  | 'minecraft:element_27'
  | 'minecraft:element_28'
  | 'minecraft:element_29'
  | 'minecraft:element_3'
  | 'minecraft:element_30'
  | 'minecraft:element_31'
  | 'minecraft:element_32'
  | 'minecraft:element_33'
  | 'minecraft:element_34'
  | 'minecraft:element_35'
  | 'minecraft:element_36'
  | 'minecraft:element_37'
  | 'minecraft:element_38'
  | 'minecraft:element_39'
  | 'minecraft:element_4'
  | 'minecraft:element_40'
  | 'minecraft:element_41'
  | 'minecraft:element_42'
  | 'minecraft:element_43'
  | 'minecraft:element_44'
  | 'minecraft:element_45'
  | 'minecraft:element_46'
  | 'minecraft:element_47'
  | 'minecraft:element_48'
  | 'minecraft:element_49'
  | 'minecraft:element_5'
  | 'minecraft:element_50'
  | 'minecraft:element_51'
  | 'minecraft:element_52'
  | 'minecraft:element_53'
  | 'minecraft:element_54'
  | 'minecraft:element_55'
  | 'minecraft:element_56'
  | 'minecraft:element_57'
  | 'minecraft:element_58'
  | 'minecraft:element_59'
  | 'minecraft:element_6'
  | 'minecraft:element_60'
  | 'minecraft:element_61'
  | 'minecraft:element_62'
  | 'minecraft:element_63'
  | 'minecraft:element_64'
  | 'minecraft:element_65'
  | 'minecraft:element_66'
  | 'minecraft:element_67'
  | 'minecraft:element_68'
  | 'minecraft:element_69'
  | 'minecraft:element_7'
  | 'minecraft:element_70'
  | 'minecraft:element_71'
  | 'minecraft:element_72'
  | 'minecraft:element_73'
  | 'minecraft:element_74'
  | 'minecraft:element_75'
  | 'minecraft:element_76'
  | 'minecraft:element_77'
  | 'minecraft:element_78'
  | 'minecraft:element_79'
  | 'minecraft:element_8'
  | 'minecraft:element_80'
  | 'minecraft:element_81'
  | 'minecraft:element_82'
  | 'minecraft:element_83'
  | 'minecraft:element_84'
  | 'minecraft:element_85'
  | 'minecraft:element_86'
  | 'minecraft:element_87'
  | 'minecraft:element_88'
  | 'minecraft:element_89'
  | 'minecraft:element_9'
  | 'minecraft:element_90'
  | 'minecraft:element_91'
  | 'minecraft:element_92'
  | 'minecraft:element_93'
  | 'minecraft:element_94'
  | 'minecraft:element_95'
  | 'minecraft:element_96'
  | 'minecraft:element_97'
  | 'minecraft:element_98'
  | 'minecraft:element_99'
  | 'minecraft:elytra'
  | 'minecraft:emerald'
  | 'minecraft:emerald_block'
  | 'minecraft:emerald_ore'
  | 'minecraft:empty_map'
  | 'minecraft:enchanted_book'
  | 'minecraft:enchanted_golden_apple'
  | 'minecraft:enchanting_table'
  | 'minecraft:end_brick_stairs'
  | 'minecraft:end_bricks'
  | 'minecraft:end_crystal'
  | 'minecraft:end_gateway'
  | 'minecraft:end_portal'
  | 'minecraft:end_portal_frame'
  | 'minecraft:end_rod'
  | 'minecraft:end_stone'
  | 'minecraft:ender_chest'
  | 'minecraft:ender_eye'
  | 'minecraft:ender_pearl'
  | 'minecraft:enderman_spawn_egg'
  | 'minecraft:endermite_spawn_egg'
  | 'minecraft:evoker_spawn_egg'
  | 'minecraft:experience_bottle'
  | 'minecraft:exposed_copper'
  | 'minecraft:exposed_cut_copper'
  | 'minecraft:exposed_cut_copper_slab'
  | 'minecraft:exposed_cut_copper_stairs'
  | 'minecraft:exposed_double_cut_copper_slab'
  | 'minecraft:farmland'
  | 'minecraft:feather'
  | 'minecraft:fence'
  | 'minecraft:fence_gate'
  | 'minecraft:fermented_spider_eye'
  | 'minecraft:field_masoned_banner_pattern'
  | 'minecraft:filled_map'
  | 'minecraft:fire'
  | 'minecraft:fire_charge'
  | 'minecraft:firefly_spawn_egg'
  | 'minecraft:firework_rocket'
  | 'minecraft:firework_star'
  | 'minecraft:fishing_rod'
  | 'minecraft:fletching_table'
  | 'minecraft:flint'
  | 'minecraft:flint_and_steel'
  | 'minecraft:flower_banner_pattern'
  | 'minecraft:flower_pot'
  | 'minecraft:flowering_azalea'
  | 'minecraft:flowing_lava'
  | 'minecraft:flowing_water'
  | 'minecraft:fox_spawn_egg'
  | 'minecraft:frame'
  | 'minecraft:frog_egg'
  | 'minecraft:frog_spawn_egg'
  | 'minecraft:frosted_ice'
  | 'minecraft:furnace'
  | 'minecraft:ghast_spawn_egg'
  | 'minecraft:ghast_tear'
  | 'minecraft:gilded_blackstone'
  | 'minecraft:glass'
  | 'minecraft:glass_bottle'
  | 'minecraft:glass_pane'
  | 'minecraft:glistering_melon_slice'
  | 'minecraft:globe_banner_pattern'
  | 'minecraft:glow_frame'
  | 'minecraft:glow_ink_sac'
  | 'minecraft:glow_lichen'
  | 'minecraft:glow_squid_spawn_egg'
  | 'minecraft:glow_stick'
  | 'minecraft:glowingobsidian'
  | 'minecraft:glowstone'
  | 'minecraft:glowstone_dust'
  | 'minecraft:goat_horn'
  | 'minecraft:goat_spawn_egg'
  | 'minecraft:gold_block'
  | 'minecraft:gold_ingot'
  | 'minecraft:gold_nugget'
  | 'minecraft:gold_ore'
  | 'minecraft:golden_apple'
  | 'minecraft:golden_axe'
  | 'minecraft:golden_boots'
  | 'minecraft:golden_carrot'
  | 'minecraft:golden_chestplate'
  | 'minecraft:golden_helmet'
  | 'minecraft:golden_hoe'
  | 'minecraft:golden_horse_armor'
  | 'minecraft:golden_leggings'
  | 'minecraft:golden_pickaxe'
  | 'minecraft:golden_rail'
  | 'minecraft:golden_shovel'
  | 'minecraft:golden_sword'
  | 'minecraft:granite_stairs'
  | 'minecraft:grass'
  | 'minecraft:grass_path'
  | 'minecraft:gravel'
  | 'minecraft:gray_candle'
  | 'minecraft:gray_candle_cake'
  | 'minecraft:gray_dye'
  | 'minecraft:gray_glazed_terracotta'
  | 'minecraft:green_candle'
  | 'minecraft:green_candle_cake'
  | 'minecraft:green_dye'
  | 'minecraft:green_glazed_terracotta'
  | 'minecraft:grindstone'
  | 'minecraft:guardian_spawn_egg'
  | 'minecraft:gunpowder'
  | 'minecraft:hanging_roots'
  | 'minecraft:hard_glass'
  | 'minecraft:hard_glass_pane'
  | 'minecraft:hard_stained_glass'
  | 'minecraft:hard_stained_glass_pane'
  | 'minecraft:hardened_clay'
  | 'minecraft:hay_block'
  | 'minecraft:heart_of_the_sea'
  | 'minecraft:heavy_weighted_pressure_plate'
  | 'minecraft:hoglin_spawn_egg'
  | 'minecraft:honey_block'
  | 'minecraft:honey_bottle'
  | 'minecraft:honeycomb'
  | 'minecraft:honeycomb_block'
  | 'minecraft:hopper'
  | 'minecraft:hopper_minecart'
  | 'minecraft:horse_spawn_egg'
  | 'minecraft:husk_spawn_egg'
  | 'minecraft:ice'
  | 'minecraft:ice_bomb'
  | 'minecraft:infested_deepslate'
  | 'minecraft:info_update'
  | 'minecraft:info_update2'
  | 'minecraft:ink_sac'
  | 'minecraft:invisiblebedrock'
  | 'minecraft:iron_axe'
  | 'minecraft:iron_bars'
  | 'minecraft:iron_block'
  | 'minecraft:iron_boots'
  | 'minecraft:iron_chestplate'
  | 'minecraft:iron_door'
  | 'minecraft:iron_helmet'
  | 'minecraft:iron_hoe'
  | 'minecraft:iron_horse_armor'
  | 'minecraft:iron_ingot'
  | 'minecraft:iron_leggings'
  | 'minecraft:iron_nugget'
  | 'minecraft:iron_ore'
  | 'minecraft:iron_pickaxe'
  | 'minecraft:iron_shovel'
  | 'minecraft:iron_sword'
  | 'minecraft:iron_trapdoor'
  | 'minecraft:item.acacia_door'
  | 'minecraft:item.bed'
  | 'minecraft:item.beetroot'
  | 'minecraft:item.birch_door'
  | 'minecraft:item.cake'
  | 'minecraft:item.camera'
  | 'minecraft:item.campfire'
  | 'minecraft:item.cauldron'
  | 'minecraft:item.chain'
  | 'minecraft:item.crimson_door'
  | 'minecraft:item.dark_oak_door'
  | 'minecraft:item.flower_pot'
  | 'minecraft:item.frame'
  | 'minecraft:item.glow_frame'
  | 'minecraft:item.hopper'
  | 'minecraft:item.iron_door'
  | 'minecraft:item.jungle_door'
  | 'minecraft:item.kelp'
  | 'minecraft:item.nether_sprouts'
  | 'minecraft:item.nether_wart'
  | 'minecraft:item.reeds'
  | 'minecraft:item.skull'
  | 'minecraft:item.soul_campfire'
  | 'minecraft:item.spruce_door'
  | 'minecraft:item.warped_door'
  | 'minecraft:item.wheat'
  | 'minecraft:item.wooden_door'
  | 'minecraft:jigsaw'
  | 'minecraft:jukebox'
  | 'minecraft:jungle_boat'
  | 'minecraft:jungle_button'
  | 'minecraft:jungle_door'
  | 'minecraft:jungle_fence_gate'
  | 'minecraft:jungle_pressure_plate'
  | 'minecraft:jungle_sign'
  | 'minecraft:jungle_stairs'
  | 'minecraft:jungle_standing_sign'
  | 'minecraft:jungle_trapdoor'
  | 'minecraft:jungle_wall_sign'
  | 'minecraft:kelp'
  | 'minecraft:ladder'
  | 'minecraft:lantern'
  | 'minecraft:lapis_block'
  | 'minecraft:lapis_lazuli'
  | 'minecraft:lapis_ore'
  | 'minecraft:large_amethyst_bud'
  | 'minecraft:lava'
  | 'minecraft:lava_bucket'
  | 'minecraft:lava_cauldron'
  | 'minecraft:lead'
  | 'minecraft:leather'
  | 'minecraft:leather_boots'
  | 'minecraft:leather_chestplate'
  | 'minecraft:leather_helmet'
  | 'minecraft:leather_horse_armor'
  | 'minecraft:leather_leggings'
  | 'minecraft:leaves'
  | 'minecraft:leaves2'
  | 'minecraft:lectern'
  | 'minecraft:lever'
  | 'minecraft:light_block'
  | 'minecraft:light_blue_candle'
  | 'minecraft:light_blue_candle_cake'
  | 'minecraft:light_blue_dye'
  | 'minecraft:light_blue_glazed_terracotta'
  | 'minecraft:light_gray_candle'
  | 'minecraft:light_gray_candle_cake'
  | 'minecraft:light_gray_dye'
  | 'minecraft:light_weighted_pressure_plate'
  | 'minecraft:lightning_rod'
  | 'minecraft:lime_candle'
  | 'minecraft:lime_candle_cake'
  | 'minecraft:lime_dye'
  | 'minecraft:lime_glazed_terracotta'
  | 'minecraft:lingering_potion'
  | 'minecraft:lit_blast_furnace'
  | 'minecraft:lit_deepslate_redstone_ore'
  | 'minecraft:lit_furnace'
  | 'minecraft:lit_pumpkin'
  | 'minecraft:lit_redstone_lamp'
  | 'minecraft:lit_redstone_ore'
  | 'minecraft:lit_smoker'
  | 'minecraft:llama_spawn_egg'
  | 'minecraft:lodestone'
  | 'minecraft:lodestone_compass'
  | 'minecraft:log'
  | 'minecraft:log2'
  | 'minecraft:loom'
  | 'minecraft:magenta_candle'
  | 'minecraft:magenta_candle_cake'
  | 'minecraft:magenta_dye'
  | 'minecraft:magenta_glazed_terracotta'
  | 'minecraft:magma'
  | 'minecraft:magma_cream'
  | 'minecraft:magma_cube_spawn_egg'
  | 'minecraft:medicine'
  | 'minecraft:medium_amethyst_bud'
  | 'minecraft:melon_block'
  | 'minecraft:melon_seeds'
  | 'minecraft:melon_slice'
  | 'minecraft:melon_stem'
  | 'minecraft:milk_bucket'
  | 'minecraft:minecart'
  | 'minecraft:mob_spawner'
  | 'minecraft:mojang_banner_pattern'
  | 'minecraft:monster_egg'
  | 'minecraft:mooshroom_spawn_egg'
  | 'minecraft:moss_block'
  | 'minecraft:moss_carpet'
  | 'minecraft:mossy_cobblestone'
  | 'minecraft:mossy_cobblestone_stairs'
  | 'minecraft:mossy_stone_brick_stairs'
  | 'minecraft:movingblock'
  | 'minecraft:mule_spawn_egg'
  | 'minecraft:mushroom_stew'
  | 'minecraft:music_disc_11'
  | 'minecraft:music_disc_13'
  | 'minecraft:music_disc_blocks'
  | 'minecraft:music_disc_cat'
  | 'minecraft:music_disc_chirp'
  | 'minecraft:music_disc_far'
  | 'minecraft:music_disc_mall'
  | 'minecraft:music_disc_mellohi'
  | 'minecraft:music_disc_otherside'
  | 'minecraft:music_disc_pigstep'
  | 'minecraft:music_disc_stal'
  | 'minecraft:music_disc_strad'
  | 'minecraft:music_disc_wait'
  | 'minecraft:music_disc_ward'
  | 'minecraft:mutton'
  | 'minecraft:mycelium'
  | 'minecraft:mysterious_frame'
  | 'minecraft:mysterious_frame_slot'
  | 'minecraft:name_tag'
  | 'minecraft:nautilus_shell'
  | 'minecraft:nether_brick'
  | 'minecraft:nether_brick_fence'
  | 'minecraft:nether_brick_stairs'
  | 'minecraft:nether_gold_ore'
  | 'minecraft:nether_sprouts'
  | 'minecraft:nether_star'
  | 'minecraft:nether_wart'
  | 'minecraft:nether_wart_block'
  | 'minecraft:netherbrick'
  | 'minecraft:netherite_axe'
  | 'minecraft:netherite_block'
  | 'minecraft:netherite_boots'
  | 'minecraft:netherite_chestplate'
  | 'minecraft:netherite_helmet'
  | 'minecraft:netherite_hoe'
  | 'minecraft:netherite_ingot'
  | 'minecraft:netherite_leggings'
  | 'minecraft:netherite_pickaxe'
  | 'minecraft:netherite_scrap'
  | 'minecraft:netherite_shovel'
  | 'minecraft:netherite_sword'
  | 'minecraft:netherrack'
  | 'minecraft:netherreactor'
  | 'minecraft:normal_stone_stairs'
  | 'minecraft:noteblock'
  | 'minecraft:npc_spawn_egg'
  | 'minecraft:oak_boat'
  | 'minecraft:oak_sign'
  | 'minecraft:oak_stairs'
  | 'minecraft:observer'
  | 'minecraft:obsidian'
  | 'minecraft:ocelot_spawn_egg'
  | 'minecraft:ochre_froglight'
  | 'minecraft:orange_candle'
  | 'minecraft:orange_candle_cake'
  | 'minecraft:orange_dye'
  | 'minecraft:orange_glazed_terracotta'
  | 'minecraft:oxidized_copper'
  | 'minecraft:oxidized_cut_copper'
  | 'minecraft:oxidized_cut_copper_slab'
  | 'minecraft:oxidized_cut_copper_stairs'
  | 'minecraft:oxidized_double_cut_copper_slab'
  | 'minecraft:packed_ice'
  | 'minecraft:painting'
  | 'minecraft:panda_spawn_egg'
  | 'minecraft:paper'
  | 'minecraft:parrot_spawn_egg'
  | 'minecraft:pearlescent_froglight'
  | 'minecraft:phantom_membrane'
  | 'minecraft:phantom_spawn_egg'
  | 'minecraft:pig_spawn_egg'
  | 'minecraft:piglin_banner_pattern'
  | 'minecraft:piglin_brute_spawn_egg'
  | 'minecraft:piglin_spawn_egg'
  | 'minecraft:pillager_spawn_egg'
  | 'minecraft:pink_candle'
  | 'minecraft:pink_candle_cake'
  | 'minecraft:pink_dye'
  | 'minecraft:pink_glazed_terracotta'
  | 'minecraft:piston'
  | 'minecraft:pistonarmcollision'
  | 'minecraft:planks'
  | 'minecraft:podzol'
  | 'minecraft:pointed_dripstone'
  | 'minecraft:poisonous_potato'
  | 'minecraft:polar_bear_spawn_egg'
  | 'minecraft:polished_andesite_stairs'
  | 'minecraft:polished_basalt'
  | 'minecraft:polished_blackstone'
  | 'minecraft:polished_blackstone_brick_double_slab'
  | 'minecraft:polished_blackstone_brick_slab'
  | 'minecraft:polished_blackstone_brick_stairs'
  | 'minecraft:polished_blackstone_brick_wall'
  | 'minecraft:polished_blackstone_bricks'
  | 'minecraft:polished_blackstone_button'
  | 'minecraft:polished_blackstone_double_slab'
  | 'minecraft:polished_blackstone_pressure_plate'
  | 'minecraft:polished_blackstone_slab'
  | 'minecraft:polished_blackstone_stairs'
  | 'minecraft:polished_blackstone_wall'
  | 'minecraft:polished_deepslate'
  | 'minecraft:polished_deepslate_double_slab'
  | 'minecraft:polished_deepslate_slab'
  | 'minecraft:polished_deepslate_stairs'
  | 'minecraft:polished_deepslate_wall'
  | 'minecraft:polished_diorite_stairs'
  | 'minecraft:polished_granite_stairs'
  | 'minecraft:popped_chorus_fruit'
  | 'minecraft:porkchop'
  | 'minecraft:portal'
  | 'minecraft:potato'
  | 'minecraft:potatoes'
  | 'minecraft:potion'
  | 'minecraft:powder_snow'
  | 'minecraft:powder_snow_bucket'
  | 'minecraft:powered_comparator'
  | 'minecraft:powered_repeater'
  | 'minecraft:prismarine'
  | 'minecraft:prismarine_bricks_stairs'
  | 'minecraft:prismarine_crystals'
  | 'minecraft:prismarine_shard'
  | 'minecraft:prismarine_stairs'
  | 'minecraft:pufferfish'
  | 'minecraft:pufferfish_bucket'
  | 'minecraft:pufferfish_spawn_egg'
  | 'minecraft:pumpkin'
  | 'minecraft:pumpkin_pie'
  | 'minecraft:pumpkin_seeds'
  | 'minecraft:pumpkin_stem'
  | 'minecraft:purple_candle'
  | 'minecraft:purple_candle_cake'
  | 'minecraft:purple_dye'
  | 'minecraft:purple_glazed_terracotta'
  | 'minecraft:purpur_block'
  | 'minecraft:purpur_stairs'
  | 'minecraft:quartz'
  | 'minecraft:quartz_block'
  | 'minecraft:quartz_bricks'
  | 'minecraft:quartz_ore'
  | 'minecraft:quartz_stairs'
  | 'minecraft:rabbit'
  | 'minecraft:rabbit_foot'
  | 'minecraft:rabbit_hide'
  | 'minecraft:rabbit_spawn_egg'
  | 'minecraft:rabbit_stew'
  | 'minecraft:rail'
  | 'minecraft:rapid_fertilizer'
  | 'minecraft:ravager_spawn_egg'
  | 'minecraft:raw_copper'
  | 'minecraft:raw_copper_block'
  | 'minecraft:raw_gold'
  | 'minecraft:raw_gold_block'
  | 'minecraft:raw_iron'
  | 'minecraft:raw_iron_block'
  | 'minecraft:real_double_stone_slab'
  | 'minecraft:real_double_stone_slab2'
  | 'minecraft:real_double_stone_slab3'
  | 'minecraft:real_double_stone_slab4'
  | 'minecraft:red_candle'
  | 'minecraft:red_candle_cake'
  | 'minecraft:red_dye'
  | 'minecraft:red_flower'
  | 'minecraft:red_glazed_terracotta'
  | 'minecraft:red_mushroom'
  | 'minecraft:red_mushroom_block'
  | 'minecraft:red_nether_brick'
  | 'minecraft:red_nether_brick_stairs'
  | 'minecraft:red_sandstone'
  | 'minecraft:red_sandstone_stairs'
  | 'minecraft:redstone'
  | 'minecraft:redstone_block'
  | 'minecraft:redstone_lamp'
  | 'minecraft:redstone_ore'
  | 'minecraft:redstone_torch'
  | 'minecraft:redstone_wire'
  | 'minecraft:repeater'
  | 'minecraft:repeating_command_block'
  | 'minecraft:reserved6'
  | 'minecraft:respawn_anchor'
  | 'minecraft:rotten_flesh'
  | 'minecraft:saddle'
  | 'minecraft:salmon'
  | 'minecraft:salmon_bucket'
  | 'minecraft:salmon_spawn_egg'
  | 'minecraft:sand'
  | 'minecraft:sandstone'
  | 'minecraft:sandstone_stairs'
  | 'minecraft:sapling'
  | 'minecraft:scaffolding'
  | 'minecraft:sculk'
  | 'minecraft:sculk_catalyst'
  | 'minecraft:sculk_sensor'
  | 'minecraft:sculk_shrieker'
  | 'minecraft:sculk_vein'
  | 'minecraft:scute'
  | 'minecraft:sea_pickle'
  | 'minecraft:seagrass'
  | 'minecraft:sealantern'
  | 'minecraft:shears'
  | 'minecraft:sheep_spawn_egg'
  | 'minecraft:shield'
  | 'minecraft:shroomlight'
  | 'minecraft:shulker_box'
  | 'minecraft:shulker_shell'
  | 'minecraft:shulker_spawn_egg'
  | 'minecraft:silver_glazed_terracotta'
  | 'minecraft:silverfish_spawn_egg'
  | 'minecraft:skeleton_horse_spawn_egg'
  | 'minecraft:skeleton_spawn_egg'
  | 'minecraft:skull'
  | 'minecraft:skull_banner_pattern'
  | 'minecraft:slime'
  | 'minecraft:slime_ball'
  | 'minecraft:slime_spawn_egg'
  | 'minecraft:small_amethyst_bud'
  | 'minecraft:small_dripleaf_block'
  | 'minecraft:smithing_table'
  | 'minecraft:smoker'
  | 'minecraft:smooth_basalt'
  | 'minecraft:smooth_quartz_stairs'
  | 'minecraft:smooth_red_sandstone_stairs'
  | 'minecraft:smooth_sandstone_stairs'
  | 'minecraft:smooth_stone'
  | 'minecraft:snow'
  | 'minecraft:snow_layer'
  | 'minecraft:snowball'
  | 'minecraft:soul_campfire'
  | 'minecraft:soul_fire'
  | 'minecraft:soul_lantern'
  | 'minecraft:soul_sand'
  | 'minecraft:soul_soil'
  | 'minecraft:soul_torch'
  | 'minecraft:sparkler'
  | 'minecraft:spawn_egg'
  | 'minecraft:spider_eye'
  | 'minecraft:spider_spawn_egg'
  | 'minecraft:splash_potion'
  | 'minecraft:sponge'
  | 'minecraft:spore_blossom'
  | 'minecraft:spruce_boat'
  | 'minecraft:spruce_button'
  | 'minecraft:spruce_door'
  | 'minecraft:spruce_fence_gate'
  | 'minecraft:spruce_pressure_plate'
  | 'minecraft:spruce_sign'
  | 'minecraft:spruce_stairs'
  | 'minecraft:spruce_standing_sign'
  | 'minecraft:spruce_trapdoor'
  | 'minecraft:spruce_wall_sign'
  | 'minecraft:spyglass'
  | 'minecraft:squid_spawn_egg'
  | 'minecraft:stained_glass'
  | 'minecraft:stained_glass_pane'
  | 'minecraft:stained_hardened_clay'
  | 'minecraft:standing_banner'
  | 'minecraft:standing_sign'
  | 'minecraft:stick'
  | 'minecraft:sticky_piston'
  | 'minecraft:stickypistonarmcollision'
  | 'minecraft:stone'
  | 'minecraft:stone_axe'
  | 'minecraft:stone_brick_stairs'
  | 'minecraft:stone_button'
  | 'minecraft:stone_hoe'
  | 'minecraft:stone_pickaxe'
  | 'minecraft:stone_pressure_plate'
  | 'minecraft:stone_shovel'
  | 'minecraft:stone_stairs'
  | 'minecraft:stone_sword'
  | 'minecraft:stonebrick'
  | 'minecraft:stonecutter'
  | 'minecraft:stonecutter_block'
  | 'minecraft:stray_spawn_egg'
  | 'minecraft:strider_spawn_egg'
  | 'minecraft:string'
  | 'minecraft:stripped_acacia_log'
  | 'minecraft:stripped_birch_log'
  | 'minecraft:stripped_crimson_hyphae'
  | 'minecraft:stripped_crimson_stem'
  | 'minecraft:stripped_dark_oak_log'
  | 'minecraft:stripped_jungle_log'
  | 'minecraft:stripped_oak_log'
  | 'minecraft:stripped_spruce_log'
  | 'minecraft:stripped_warped_hyphae'
  | 'minecraft:stripped_warped_stem'
  | 'minecraft:structure_block'
  | 'minecraft:structure_void'
  | 'minecraft:sugar'
  | 'minecraft:sugar_cane'
  | 'minecraft:suspicious_stew'
  | 'minecraft:sweet_berries'
  | 'minecraft:sweet_berry_bush'
  | 'minecraft:tadpole_bucket'
  | 'minecraft:tadpole_spawn_egg'
  | 'minecraft:tallgrass'
  | 'minecraft:target'
  | 'minecraft:tinted_glass'
  | 'minecraft:tnt'
  | 'minecraft:tnt_minecart'
  | 'minecraft:torch'
  | 'minecraft:totem_of_undying'
  | 'minecraft:trapdoor'
  | 'minecraft:trapped_chest'
  | 'minecraft:trident'
  | 'minecraft:tripwire'
  | 'minecraft:tripwire_hook'
  | 'minecraft:tropical_fish'
  | 'minecraft:tropical_fish_bucket'
  | 'minecraft:tropical_fish_spawn_egg'
  | 'minecraft:tuff'
  | 'minecraft:turtle_egg'
  | 'minecraft:turtle_helmet'
  | 'minecraft:turtle_spawn_egg'
  | 'minecraft:twisting_vines'
  | 'minecraft:underwater_torch'
  | 'minecraft:undyed_shulker_box'
  | 'minecraft:unknown'
  | 'minecraft:unlit_redstone_torch'
  | 'minecraft:unpowered_comparator'
  | 'minecraft:unpowered_repeater'
  | 'minecraft:verdant_froglight'
  | 'minecraft:vex_spawn_egg'
  | 'minecraft:villager_spawn_egg'
  | 'minecraft:vindicator_spawn_egg'
  | 'minecraft:vine'
  | 'minecraft:wall_banner'
  | 'minecraft:wall_sign'
  | 'minecraft:wandering_trader_spawn_egg'
  | 'minecraft:warped_button'
  | 'minecraft:warped_door'
  | 'minecraft:warped_double_slab'
  | 'minecraft:warped_fence'
  | 'minecraft:warped_fence_gate'
  | 'minecraft:warped_fungus'
  | 'minecraft:warped_fungus_on_a_stick'
  | 'minecraft:warped_hyphae'
  | 'minecraft:warped_nylium'
  | 'minecraft:warped_planks'
  | 'minecraft:warped_pressure_plate'
  | 'minecraft:warped_roots'
  | 'minecraft:warped_sign'
  | 'minecraft:warped_slab'
  | 'minecraft:warped_stairs'
  | 'minecraft:warped_standing_sign'
  | 'minecraft:warped_stem'
  | 'minecraft:warped_trapdoor'
  | 'minecraft:warped_wall_sign'
  | 'minecraft:warped_wart_block'
  | 'minecraft:water'
  | 'minecraft:water_bucket'
  | 'minecraft:waterlily'
  | 'minecraft:waxed_copper'
  | 'minecraft:waxed_cut_copper'
  | 'minecraft:waxed_cut_copper_slab'
  | 'minecraft:waxed_cut_copper_stairs'
  | 'minecraft:waxed_double_cut_copper_slab'
  | 'minecraft:waxed_exposed_copper'
  | 'minecraft:waxed_exposed_cut_copper'
  | 'minecraft:waxed_exposed_cut_copper_slab'
  | 'minecraft:waxed_exposed_cut_copper_stairs'
  | 'minecraft:waxed_exposed_double_cut_copper_slab'
  | 'minecraft:waxed_oxidized_copper'
  | 'minecraft:waxed_oxidized_cut_copper'
  | 'minecraft:waxed_oxidized_cut_copper_slab'
  | 'minecraft:waxed_oxidized_cut_copper_stairs'
  | 'minecraft:waxed_oxidized_double_cut_copper_slab'
  | 'minecraft:waxed_weathered_copper'
  | 'minecraft:waxed_weathered_cut_copper'
  | 'minecraft:waxed_weathered_cut_copper_slab'
  | 'minecraft:waxed_weathered_cut_copper_stairs'
  | 'minecraft:waxed_weathered_double_cut_copper_slab'
  | 'minecraft:weathered_copper'
  | 'minecraft:weathered_cut_copper'
  | 'minecraft:weathered_cut_copper_slab'
  | 'minecraft:weathered_cut_copper_stairs'
  | 'minecraft:weathered_double_cut_copper_slab'
  | 'minecraft:web'
  | 'minecraft:weeping_vines'
  | 'minecraft:wheat'
  | 'minecraft:wheat_seeds'
  | 'minecraft:white_candle'
  | 'minecraft:white_candle_cake'
  | 'minecraft:white_dye'
  | 'minecraft:white_glazed_terracotta'
  | 'minecraft:witch_spawn_egg'
  | 'minecraft:wither_rose'
  | 'minecraft:wither_skeleton_spawn_egg'
  | 'minecraft:wolf_spawn_egg'
  | 'minecraft:wood'
  | 'minecraft:wooden_axe'
  | 'minecraft:wooden_button'
  | 'minecraft:wooden_door'
  | 'minecraft:wooden_hoe'
  | 'minecraft:wooden_pickaxe'
  | 'minecraft:wooden_pressure_plate'
  | 'minecraft:wooden_shovel'
  | 'minecraft:wooden_slab'
  | 'minecraft:wooden_sword'
  | 'minecraft:wool'
  | 'minecraft:writable_book'
  | 'minecraft:written_book'
  | 'minecraft:yellow_candle'
  | 'minecraft:yellow_candle_cake'
  | 'minecraft:yellow_dye'
  | 'minecraft:yellow_flower'
  | 'minecraft:yellow_glazed_terracotta'
  | 'minecraft:zoglin_spawn_egg'
  | 'minecraft:zombie_horse_spawn_egg'
  | 'minecraft:zombie_pigman_spawn_egg'
  | 'minecraft:zombie_spawn_egg'
  | 'minecraft:zombie_villager_spawn_egg';

export declare type MinecraftLanguages =
  | 'en_US'
  | 'en_GB'
  | 'de_DE'
  | 'es_ES'
  | 'es_MX'
  | 'fr_FR'
  | 'fr_CA'
  | 'it_IT'
  | 'ja_JP'
  | 'ko_KR'
  | 'pt_BR'
  | 'pt_PT'
  | 'ru_RU'
  | 'zh_CN'
  | 'zh_TW'
  | 'nl_NL'
  | 'bg_BG'
  | 'cs_CZ'
  | 'da_DK'
  | 'el_GR'
  | 'fi_FI'
  | 'hu_HU'
  | 'id_ID'
  | 'nb_NO'
  | 'pl_PL'
  | 'sk_SK'
  | 'sv_SE'
  | 'tr_TR'
  | 'uk_UA';

export declare type MinecraftManifests = 'resources' | 'data' | 'client_data' | 'interface' | 'world_template';

export declare type MinecraftMusicEvents =
  | 'music.menu'
  | 'music.game'
  | 'music.game.creative'
  | 'music.game.credits'
  | 'music.game.end'
  | 'music.game.endboss'
  | 'music.game.nether'
  | 'music.game.nether_wastes'
  | 'music.game.crimson_forest'
  | 'music.game.dripstone_caves'
  | 'music.game.frozen_peaks'
  | 'music.game.grove'
  | 'music.game.jagged_peaks'
  | 'music.game.lush_caves'
  | 'music.game.meadow'
  | 'music.game.snowy_slopes'
  | 'music.game.soulsand_valley'
  | 'music.game.stony_peaks'
  | 'music.game.water';

export declare type MinecraftOperators = '!=' | '<' | '<=' | '<>' | '=' | '==' | '>' | '>=' | 'equals' | 'not';

export declare type MinecraftShapes = 'circle' | 'line';

export declare type MinecraftSlots =
  | 'none'
  | 'slot.armor'
  | 'slot.armor.chest'
  | 'slot.armor.feet'
  | 'slot.armor.head'
  | 'slot.armor.legs'
  | 'slot.chest'
  | 'slot.enderchest'
  | 'slot.hotbar'
  | 'slot.inventory'
  | 'slot.saddle'
  | 'slot.equippable'
  | 'slot.weapon.mainhand'
  | 'slot.weapond.offhand';

export declare type MinecraftSoundCategories =
  | 'ambient'
  | 'block'
  | 'bottle'
  | 'bucket'
  | 'hostile'
  | 'music'
  | 'neutral'
  | 'player'
  | 'record'
  | 'ui'
  | 'weather';

export declare type MinecraftStructures =
  | 'buriedtreasure'
  | 'endcity'
  | 'fortress'
  | 'mansion'
  | 'mineshaft'
  | 'monument'
  | 'pillageroutpost'
  | 'ruins'
  | 'shipwreck'
  | 'stronghold'
  | 'temple'
  | 'village';

export declare type MinecraftSubjects =
  | 'block'
  | 'damager'
  | 'item'
  | 'other'
  | 'parent'
  | 'player'
  | 'self'
  | 'target';

export declare type MinecraftTemperatures = 'cold' | 'mild' | 'ocean' | 'warm';

export declare class Tick implements SchemaBase {
  values?: string[];
  get path(): string;
}

export declare class AnimationController {
  [property_name: string]: AnimationControllerProperties;
}

export interface AnimationControllerProperties {
  initial_state?: string | 'default';
  states?: States;
}
export interface States {
  [property_name: string]: StatesProperty;
}

export declare class AnimationControllersSchema implements SchemaBase {
  format_version: string | '1.10.0';
  'animation_controllers': AnimationController;
  get path(): string;
}

export interface StatesProperty {
  animations?: string[] | MinecraftQueryAnimation[];
  transitions?: string[] | MinecraftQueryAnimation[];
  on_entry?: string[];
  on_exit?: string[];
}

export declare class Animation {
  [property_name: string]: AnimationsProperty;
}

export interface AnimationsProperty {
  loop: boolean;
  timeline: Timeline;
  animation_length: number;
}
export interface Timeline {
  [property_name: string]: string[];
}

export declare class AnimationsSchema implements SchemaBase {
  format_version: string | '1.10.0';
  'animations': Animation;
  get path(): string;
}

export declare class Block {
  description: BlockDescription;
  permutations?: BlockPermutations[];
  components?: BlockComponents;
  events?: BlockEvents;
}

export interface BlockDescription {
  identifier: string;
  is_experimental?: boolean;
  register_to_creative_menu?: boolean;
  properties?: BlockProperties;
}
interface BlockProperties {
  [property_name: string]: number[] | boolean[];
}
export interface BlockComponents extends BlockExperimentalComponents {
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
  ['minecraft:map_color']?: string;
  ['minecraft:onlypistonpush']?: boolean;
  ['minecraft:placement_filter']?: PlacementFilter;
  ['minecraft:preventsjumping']?: boolean;
  ['minecraft:random_ticking']?: OnTick;
  ['minecraft:rotation']?: [number, number, number];
  ['minecraft:ticking']?: Ticking;
  ['minecraft:unwalkable']?: boolean;
  ['minecraft:on_fall_on']?: OnFallOn;
  ['minecraft:on_interact']?: MinecraftTriggerConditioning;
  ['minecraft:on_placed']?: MinecraftTriggerConditioning;
  ['minecraft:on_player_destroyed']?: MinecraftTriggerConditioning;
  ['minecraft:on_player_placing']?: MinecraftTriggerConditioning;
  ['minecraft:on_step_off']?: MinecraftTriggerConditioning;
  ['minecraft:on_step_on']?: MinecraftTriggerConditioning;
}
export interface BlockExperimentalComponents {
  ['minecraft:aim_collision']?: boolean | MinecraftCollision;
  ['minecraft:block_collision']?: boolean | MinecraftCollision;
  ['minecraft:breathability']?: 'solid' | 'air';
  ['minecraft:display_name']?: string;
  ['minecraft:geometry']?: string;
  ['minecraft:material_instances']?: MaterialInstances;
  ['minecraft:part_visibility']?: any;
  ['minecraft:unit_cube']?: any;
}
export interface BlockPermutations {
  components?: BlockComponents;
  conditions?: [];
}
export interface BlockEvents {
  [property_name: string]: BlockEventsReponse;
}
interface BlockEventsReponse {
  sequence?: BlockEventsReponse[];
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

export declare class BlocksSchema implements SchemaBase {
  format_version: string | '1.18.0';
  'minecraft:block': Block;
  get path(): string;
}

export interface CraftingTable {
  crafting_tags?: string[];
  custom_description?: string;
}

export interface Flammable {
  burn_odds?: number;
  flame_odds?: number;
}

export interface MaterialInstances {
  [property_name: string]: {
    ambient_occlusion?: boolean;
    face_dimming?: boolean;
    render_method?: 'opaque' | 'double_sided' | 'blend' | 'alpha_test';
    texture?: string;
  };
}

export interface OnFallOn extends MinecraftTriggerConditioning {
  min_fall_distance: number;
}

export interface OnTick {
  on_tick?: {
    condition?: string;
    event?: string;
    target?: MinecraftSubjects;
    range?: [number, number];
  };
}

export interface PlacementFilter {
  allowed_faces?: BlockFaces[] | string;
  block_filter?: MinecraftBlocks[] | string;
}

export interface Ticking extends OnTick {
  looping?: boolean;
  range?: [number, number];
}

export interface AddMobEffect extends MinecraftTarget {
  amplifier?: number;
  duration?: number;
  effect?: string;
}

export interface Damage extends MinecraftTarget {
  amount?: number;
  type?: 'all';
}

export interface PlayEffect extends MinecraftTarget {
  data?: number;
  effect?: string;
}

export interface PlaySound extends MinecraftTarget {
  sound?: string;
}

export interface RemoveMobEffect {
  effect?: string;
}

export interface RunCommand extends MinecraftTarget {
  command?: string[];
}

export interface SetBlock {
  block_type?: string;
}

export interface SetBlockAtPos extends SetBlock {
  block_offset?: [number, number, number];
}

export interface SetBlockProperty {
  [property_name: string]: string;
}

export interface SpawnLoot {
  table?: string;
}

export interface Teleport extends MinecraftTarget {
  avoid_water?: boolean;
  destination?: [number, number, number];
  land_on_block?: boolean;
  max_range?: [number, number, number];
}

export interface TransformItem {
  transform?: string;
}

export declare class Entity {
  description: EntityDescription;
  component_groups?: ComponentGroups;
  components?: EntityComponents;
  events?: EntityEvents;
}

export interface EntityDescription {
  identifier: string;
  is_spawnable?: boolean;
  is_summonable?: boolean;
  is_experimental?: boolean;
  runtime_identifier?: string;
  animations?: AnimationProperties;
  scripts?: ScriptProperties;
}
export interface AnimationProperties {
  [property_name: string]: string;
}
export interface ScriptProperties {
  animate: string[];
}
export interface ComponentGroups {
  [property_name: string]: EntityComponents;
}
export interface EntityComponents {
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
export interface EntityEvents {
  ['minecraft:entity_born']?: EntityEventsReponse;
  ['minecraft:entity_spawned']?: EntityEventsReponse;
  ['minecraft:entity_transformed']?: EntityEventsReponse;
  ['minecraft:on_prime']?: EntityEventsReponse;
  [property_name: string]: EntityEventsReponse;
}
interface EntityEventsReponse extends EventsComponentGroupsController {
  filters?: MinecraftFilters;
  randomize?: EntityEventsRandomize[];
  sequence?: EntityEventsReponse[];
  trigger?: MinecraftTriggerFiltered;
}
interface EntityEventsRandomize extends EventsComponentGroupsController {
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

export declare class EntitiesSchema implements SchemaBase {
  format_version: string | '1.18.0';
  'minecraft:entity': Entity;
  get path(): string;
}

export interface Addrider {
  entity_type: string;
  spawn_event?: string;
}

export interface AdmireItem {
  cooldown_after_being_attacked?: number;
  duration?: number;
}

export interface Ageable {
  drop_items?: string[];
  duration?: number;
  feed_items?: string[];
  grow_up?: string;
  transform_to_item?: string;
}

export interface AmbientSoundInterval {
  event_name?: string;
  range?: number;
  value?: number;
}

export interface Angry {
  angry_sound?: string;
  broadcast_anger?: boolean;
  broadcast_anger_on_attack?: boolean;
  broadcast_anger_on_being_attacked?: boolean;
  broadcast_filters?: MinecraftFilters;
  broadcast_range?: number;
  broadcast_targets?: string[];
  calm_event?: string;
  duration?: number;
  duration_delta?: number;
  filters?: MinecraftFilters;
  sound_interval?: [number, number];
}

export interface AnnotationBreakDoor {
  break_time?: number;
  min_difficulty?: MinecraftDifficulty;
}

export interface AreaAttack {
  cause?: string;
  damage_per_tick?: number;
  damage_range?: number;
  entity_filter?: MinecraftFilters;
}

export interface Attack {
  damage?: [number, number];
  effect_duration?: number;
  effect_name?: string;
}

export interface AttackCooldown {
  attack_cooldown_complete_event?: string;
  attack_cooldown_time: [number, number];
}

export interface Barter {
  barter_table?: string;
  cooldown_after_being_attacked?: number;
}

export interface BehaviorAdmireItem {
  admire_item_sound?: string;
  sound_interval?: [number, number];
}

export interface BehaviorAttackableTarget {
  attack_interval?: number;
  attack_interval_min?: number;
  attack_owner?: boolean;
  entity_types?: MinecraftEntityTypes;
  must_reach?: boolean;
  must_see?: boolean;
  must_see_forget_duration?: number;
  persist_time?: number;
  reselect_targets?: boolean;
  scan_interval?: number;
  set_persistent?: boolean;
  target_invisible_multiplier?: number;
  target_search_height?: number;
  target_sneak_visibility_multiplier?: number;
  within_radius?: number;
}

export interface BehaviorBeg {
  items?: string[];
  look_distance?: number;
  look_time?: [number, number];
}

export interface BehaviorBreed {
  speed_multiplier?: number;
}

export interface BehaviorDefendTrustedTarget {
  aggro_sound?: string;
  attack_interval?: number;
  entity_types?: MinecraftEntityTypes[];
  must_see?: boolean;
  must_see_distance?: number;
  within_radius?: number;
}

export interface BehaviorDrinkPotion {
  potions?: Potions[];
  speed_modifier?: number;
}
interface Potions {
  chance?: number;
  filters?: MinecraftFilters;
  id?: number;
}

export interface BehaviorEatCarriedItem {
  delay_before_eating?: number;
}

export interface BehaviorExploreOutskirts {
  explore_dist?: number;
  speed_multiplier?: number;
  wait_time?: number;
}

export interface BehaviorFindCover {
  cooldown_time?: number;
  speed_multiplier?: number;
}

export interface BehaviorFindMount {
  avoid_water?: boolean;
  mount_distance?: number;
  start_delay?: number;
  target_needed?: boolean;
  within_radius?: number;
}

export interface BehaviorFindUnderwaterTreasure {
  search_range?: number;
  speed_multiplier?: number;
  stop_distance?: number;
}

export interface BehaviorFleeSun {
  speed_multiplier?: number;
}

export interface BehaviorFloatWander {
  float_duration?: [number, number];
  must_reach?: boolean;
  random_reselect?: boolean;
  xz_dist?: number;
  y_dist?: number;
  y_offset?: number;
}

export interface BehaviorFollow {
  search_range?: number;
  speed_multiplier?: number;
  stop_distance?: number;
}

export interface BehaviorFollowCaravan {
  entity_count?: number;
  entity_types?: MinecraftEntities[];
  speed_multiplier?: number;
}

export interface BehaviorFollowParent {
  speed_multiplier?: number;
}

export interface BehaviorFollowTargetCaptain {
  follow_distance?: number;
  within_radius?: number;
}

export interface BehaviorGoHome {
  goal_radius?: number;
  interval?: number;
  on_home?: string;
  speed_multiplier?: number;
}

export interface BehaviorHide {
  duration?: number;
  poi_type?: string;
  speed_multiplier?: number;
  timeout_cooldown?: number;
}

export interface BehaviorHoldGround {
  broadcast?: boolean;
  broadcast_range?: number;
  min_radius?: number;
  within_radius_event?: string;
}

export interface BehaviorHurtByTarget {
  alert_same_type?: boolean;
  entity_types?: MinecraftEntities[];
  hurt_owner?: boolean;
}

export interface BehaviorHurtTarget {
  entity_types?: MinecraftEntityTypes;
}

export interface BehaviorInspectBookshelf {
  goal_radius?: number;
  search_count?: number;
  search_height?: number;
  search_range?: number;
  speed_multiplier?: number;
}

export interface BehaviorKnockbackRoar {
  trigger?: any;
  attack_time?: number;
  cooldown_time?: number;
  duration?: number;
  knockback_damage?: number;
  knockback_horizontal_strength?: number;
  knockback_range?: number;
  knockback_vertical_strength?: number;
}

export interface BehaviorLayDown {
  interval?: number;
  random_stop_interval?: number;
}

export interface BehaviorLayEgg {
  allow_laying_from_below?: boolean;
  egg_type?: string;
  goal_radius?: number;
  lay_egg_sound?: string;
  lay_seconds?: number;
  on_lay?: MinecraftTriggerFiltered;
  search_height?: number;
  search_range?: number;
  speed_multiplier?: number;
  target_blocks?: string[];
  target_materials_above_block?: string[];
  use_default_animation?: boolean;
}

export interface BehaviorLeapAtTarget {
  must_be_on_ground?: boolean;
  set_persistent?: boolean;
  yd?: number;
}

export interface BehaviorLook {
  angle_of_view_horizontal?: number;
  angle_of_view_vertical?: number;
  filters?: MinecraftFilters;
  look_distance?: number;
  look_time?: [number, number];
  probability?: number;
}

export interface BehaviorMingle {
  cooldown_time?: number;
  duration?: number;
  mingle_distance?: number;
  mingle_partner_type?: string[];
  speed_multiplier?: number;
}

export interface BehaviorMountPathing {
  speed_multiplier?: number;
  target_dist?: number;
  track_target?: boolean;
}

export interface BehaviorMove {
  goal_radius?: number;
  search_count?: number;
  search_height?: number;
  search_range?: number;
  speed_multiplier?: number;
}

export interface BehaviorMoveThroughVillage {
  only_at_night?: boolean;
  speed_multiplier?: number;
}

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

export interface BehaviorMoveToLiquid extends BehaviorMove {
  material_type?: MaterialType[];
}
export declare type MaterialType = 'Any' | 'Water' | 'Lava';

export interface BehaviorMoveToPoi {
  poi_type?: string;
  speed_multiplier?: number;
}

export interface BehaviorMoveToRandomBlock {
  block_distance?: number;
  within_radius?: number;
}

export interface BehaviorMoveToVillage {
  cooldown_time?: number;
  goal_radius?: number;
  search_range?: number;
  speed_multiplier?: number;
}

export interface BehaviorMoveTowardsTarget {
  within_radius?: number;
}

export interface BehaviorNap {
  cooldown_max?: number;
  cooldown_min?: number;
  mob_detect_dist?: number;
  mob_detect_height?: number;
}

export interface BehaviorOcelotSitOnBlock {
  speed_multiplier?: number;
}

export interface BehaviorOpenDoor {
  close_door_after?: boolean;
}

export interface BehaviorPanic {
  damage_sources?: string[];
  force?: boolean;
  ignore_mob_damage?: boolean;
  prefer_water?: boolean;
  speed_multiplier?: number;
}

export interface BehaviorPetSleepWithOwner {
  goal_radius?: number;
  search_height?: number;
  search_range?: number;
  speed_multiplier?: number;
}

export interface BehaviorPickupItems {
  can_pickup_any_item?: boolean;
  can_pickup_to_hand_or_equipment?: boolean;
  excluded_items?: string[];
  goal_radius?: number;
  max_dist?: number;
  pickup_based_on_chance?: boolean;
  speed_multiplier?: number;
  track_target?: boolean;
}

export interface BehaviorPlay {
  speed_multiplier?: number;
}

export interface BehaviorRaidGarden {
  blocks?: string[];
  eat_delay?: number;
  full_delay?: number;
  goal_radius?: number;
  initial_eat_delay?: number;
  max_to_eat?: number;
  search_range?: number;
  speed_multiplier?: number;
}

export interface BehaviorRandomBreach {
  cooldown_time?: number;
  interval?: number;
  speed_multiplir?: number;
  xz_dist?: number;
  y_dist?: number;
}

export interface BehaviorRandomFly {
  can_land_on_trees?: boolean;
  xz_dist?: number;
  y_dist?: number;
}

export interface BehaviorRandomHover {
  hover_height?: [number, number];
  interval?: number;
  speed_multiplier?: number;
  xz_dist?: number;
  y_dist?: number;
  y_offset?: number;
}

export interface BehaviorRandomLookAround {
  look_time?: [number, number];
}

export interface BehaviorRandomLookAroundAndSit {
  max_look_count?: number;
  max_look_time?: number;
  min_look_count?: number;
  min_look_time?: number;
  probability?: number;
}

export interface BehaviorRandomSitting {
  cooldown_time?: number;
  min_sit_time?: number;
  start_chance?: number;
  stop_chance?: number;
}

export interface BehaviorRandomStroll {
  interval?: number;
  speed_multiplier?: number;
  xz_dist?: number;
  y_dist?: number;
}

export interface BehaviorRandomSwim {
  avoid_surface?: boolean;
  interval?: number;
  speed_multiplier?: number;
  xz_dist?: number;
  y_dist?: number;
}

export interface BehaviorRiseToLiquidLevel {
  liquid_y_offset?: number;
  rise_delta?: number;
  sink_delta?: number;
}

export interface BehaviorRoll {
  probability?: number;
}

export interface BehaviorRunAroundLikeCrazy {
  speed_multiplier?: number;
}

export interface BehaviorScared {
  sound_interval?: number;
}

export interface BehaviorSendEvent {
  cast_duration?: number;
  look_at_target?: boolean;
  sequence?: Sequence[];
}
interface Sequence {
  base_delay?: number;
  event?: string;
  sound_event?: string;
}

export interface BehaviorShareItems {
  entity_types?: MinecraftEntityTypes;
  goal_radius?: number;
  max_dist?: number;
  speed_multiplier?: number;
}

export interface BehaviorSkeletonHorseTrap {
  duration?: number;
  within_radius?: number;
}

export interface BehaviorSleep {
  cooldown_time?: number;
  sleep_collider_height?: number;
  sleep_collider_width?: number;
  sleep_y_offset?: number;
  speed_multiplier?: number;
  timeout_cooldown?: number;
}

export interface BehaviorSlimeAttack {
  set_persistent?: boolean;
}

export interface BehaviorSnacking {
  items?: string[];
  snacking_cooldown?: number;
  snacking_cooldown_min?: number;
  snacking_stop_chance?: number;
}

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

export interface BehaviorStalkAndPounceOnTarget {
  interest_time?: number;
  leap_distance?: number;
  leap_height?: number;
  max_stalk_dist?: number;
  pounce_max_dist?: number;
  set_persistent?: boolean;
  stalk_speed?: number;
  strike_dist?: number;
  stuck_time?: number;
}

export interface BehaviorStompTurtleEgg {
  goal_radius?: number;
  interval?: number;
  search_height?: number;
  search_range?: number;
  speed_multiplier?: number;
}

export interface BehaviorStrollTowardsVillage {
  cooldown_time?: number;
  goal_radius?: number;
  search_range?: number;
  speed_multiplier?: number;
  start_chance?: number;
}

export interface BehaviorSummonEntity {
  summon_choices?: SummonChoices[];
}
interface SummonChoices {
  cast_duration?: number;
  cooldown_time?: number;
  do_casting?: boolean;
  filters?: MinecraftFilters;
  max_activation_range?: number;
  min_activation_range?: number;
  particle_color?: number;
  sequence?: Sequence[];
  start_sound_event?: string;
  weight?: number;
}
interface Sequence {
  base_delay?: number;
  delay_per_summon?: number;
  entity_lifespan?: number;
  entity_type?: string;
  num_entities_spawned?: number;
  shape?: MinecraftShapes;
  size?: number;
  sound_event?: string;
  summon_cap?: number;
  summon_cap_radius?: number;
  target?: MinecraftSubjects;
}

export interface BehaviorSwell {
  start_distance?: number;
  stop_distance?: number;
}

export interface BehaviorTempt {
  can_get_scared?: boolean;
  can_tempt_verticlly?: boolean;
  can_tempt_while_ridden?: boolean;
  items?: string[];
  sound_interval?: [number, number];
  speed_multiplier?: number;
  tempt_sound?: string;
  whithin_radius?: number;
}

export interface BehaviorTradeInterest {
  carried_item_switch_time?: number;
  cooldown?: number;
  interest_time?: number;
  remove_item_time?: number;
  whitin_radius?: number;
}

export interface BehaviorVexCopyOwnerTarget {
  entity_types?: MinecraftEntityTypes;
}

export interface BehaviorWitherTargetHighestDamage {
  entity_types?: MinecraftEntityTypes;
}

export interface BehaviorWork {
  active_time?: number;
  can_work_in_rain?: boolean;
  goal_cooldown?: number;
  on_arrival?: string;
  sound_delay_max?: number;
  sound_delay_min?: number;
  speed_multiplier?: number;
  work_in_rain_tolerance?: number;
}

export interface BlockSensor {
  on_break?: string[];
  sensor_radius?: number;
}

export interface Boostable {
  boost_items?: BoostItems[];
  duration?: number;
  speed_multiplier?: number;
}
interface BoostItems {
  damage?: number;
  item?: string;
  replace_item?: string;
}

export interface Boss {
  hud_range?: number;
  name?: string;
  should_darken_sky?: boolean;
}

export interface BreakBlocks {
  breakable_blocks?: string[];
}

export interface Breathable {
  breathe_blocks?: string[];
  breathes_air?: boolean;
  breathes_lava?: boolean;
  breathes_solids?: boolean;
  breathes_water?: boolean;
  generates_bubbles?: boolean;
  inhale_time?: number;
  non_breathe_blocks?: string[];
  suffocate_time?: number;
  total_supply?: number;
}

export interface Breedable {
  allow_sitting?: boolean;
  blend_attributes?: boolean;
  breed_cooldown?: number;
  breed_items?: string[];
  breeds_with?: BreedsWith[];
  causes_pregnancy?: boolean;
  deny_parents_variant?: DenyParentsVariant;
  environment_requirements?: EnvironmentRequirements;
  extra_baby_chance?: number;
  inherit_tamed?: boolean;
  love_filters?: MinecraftFilters;
  mutation_factor?: MutationFactor;
  require_full_health?: boolean;
  require_tame?: boolean;
  transform_to_item?: string;
}
interface BreedsWith {
  baby_type?: string;
  breed_event?: string;
  mate_type?: string;
}
interface DenyParentsVariant {
  chance?: number;
  max_variant?: number;
  min_variant?: number;
}
interface EnvironmentRequirements {
  count?: number;
  radius?: number;
}
interface MutationFactor {
  color?: number;
  extra_variant?: number;
  variant?: number;
}

export interface Bribeable {
  bribe_cooldown?: number;
  bribe_items?: string[];
}

export interface Buoyant {
  apply_gravity?: boolean;
  base_bouyancy?: number;
  big_wave_probability?: number;
  big_wave_speed?: number;
  drag_down_on_buoyancy_removed?: number;
  liquid_blocks?: string[];
  simulate_waves?: boolean;
}

export interface CelebrateHunt {
  broadcast?: boolean;
  celeberation_targets?: MinecraftFilters;
  celebrate_sound?: number;
  duration?: number;
  radius?: number;
  sound_interval?: [number, number];
}

export interface CollisionBox {
  height?: number;
  width?: number;
}

export interface Color {
  value?: number;
}

export interface CombatRegeneration {
  apply_to_family?: boolean;
  apply_to_self?: boolean;
  regeneration_duration?: number;
}

export interface ConditionalBandwidthOptimization {
  conditional_values?: ConditionalValues[];
  default_values?: DefaultValues;
}
interface ConditionalValues extends DefaultValues {
  max_dropped_ticks?: number;
}
interface DefaultValues {
  max_optimized_distance?: number;
  use_motion_prediction_hints?: boolean;
}

export interface CustomHitTest {
  hitboxes?: Hitboxes[];
}
interface Hitboxes {
  width?: number;
  height?: number;
  pivot?: [number, number, number];
}

export interface DamageOverTime {
  damage_per_hurt?: number;
  time_between_hurt?: number;
}

export interface DamageSensor {
  triggers?: Triggers[];
}
interface Triggers {
  cause?: MinecraftDamageSource;
  damage_modifier?: number;
  damage_multiplier?: number;
  deals_damage?: boolean;
  on_damage?: OnDamage;
  on_damage_sound_event?: string;
}
interface OnDamage {
  filters?: MinecraftFilters;
  target?: MinecraftTarget;
  event?: string;
}

export interface DefaultLookAngle {
  value?: number;
}

export interface Despawn {
  despawn_from_chance?: boolean;
  despawn_from_distance?: DespawnFromDistance;
  despawn_from_inactivity?: boolean;
  despawn_from_simulation_edge?: boolean;
  filters?: MinecraftFilters;
  min_range_inactivity_timer?: number;
  min_range_random_chance?: number;
  remove_child_entities?: boolean;
}
interface DespawnFromDistance {
  max_distance?: number;
  min_distance?: number;
}

export interface DryingOutTimer {
  dried_out_event?: string;
  recover_after_dried_out_event?: string;
  stopped_drying_out_event?: string;
  total_time?: number;
  water_bottle_refill_time?: number;
}

export interface EconomyTradeTable {
  convert_trades_economy?: boolean;
  cured_discount?: [number, number];
  display_name?: string;
  hero_demand_discount?: number;
  max_cured_discount?: [number, number];
  max_nearby_cured_discount?: number;
  nearby_cured_discount?: number;
  new_screen?: boolean;
  persist_trades?: boolean;
  show_trade_screen?: boolean;
  table?: string;
  use_legacy_price_formula?: boolean;
}

export interface EntitySensor {
  event?: string;
  event_filters?: MinecraftFilters;
  maximum_count?: number;
  minimum_count?: number;
  relative_range?: boolean;
  require_all?: boolean;
  sensor_range?: number;
}

export interface EnvironmentSensor {
  triggers?: Trigger[];
}
interface Trigger {
  filters?: MinecraftFilters;
  event?: string;
}

export interface Equipment {
  slot_drop_chance?: number[];
  table?: string;
}

export interface Equippable {
  slots?: Slots[];
}
interface Slots {
  accepted_items?: string[];
  interact_text?: string;
  item?: string;
  on_equipe?: string;
  on_unequip?: string;
  slot?: number;
}

export interface ExperienceReward {
  on_bred?: string;
  on_death?: number;
}

export interface Explode {
  breaks_blocks?: boolean;
  causes_fire?: boolean;
  destroy_affected_by_griefing?: boolean;
  fire_affected_by_griefing?: boolean;
  fuse_length?: [number, number];
  fuse_lit?: boolean;
  max_resistance?: number;
  power?: number;
}

export interface Flocking {
  block_distance?: number;
  block_weight?: number;
  breach_influence?: number;
  cohesion_threshold?: number;
  goal_weight?: number;
  high_flock_limit?: number;
  in_water?: boolean;
  influence_radius?: number;
  inner_cohesion_threshold?: number;
  loner_chance?: number;
  low_flock_limit?: number;
  match_variants?: boolean;
  max_height?: number;
  min_height?: number;
  separation_threshold?: number;
  separation_weight?: number;
  use_center_of_mass?: boolean;
}

export interface FlyingSpeed {
  value?: number;
}

export interface FrictionModifier {
  value?: number;
}

export interface Genetics {
  genes?: Genes[];
  mutation_rate?: number;
}
interface Genes {
  allele_range?: AlleleRange;
  genetic_variants?: GeneticVariants[];
  mutation_rate?: number;
  name?: string;
}
interface AlleleRange {
  range_max?: number;
  range_min?: number;
}
interface GeneticVariants {
  birth_event?: string;
  both_allele?: number;
  either_allele?: number;
  hidden_allele?: number;
  main_allele?: number;
}

export interface Giveable {
  cooldown?: number;
  items?: string[];
  on_give?: string;
}

export interface GroundOffset {
  value?: number;
}

export interface GroupSize {
  filters?: MinecraftFilters;
  radius?: number;
}

export interface GrowsCrop {
  chance?: number;
  charges?: number;
}

export interface Healable {
  filters?: MinecraftFilters;
  force_use?: boolean;
  items?: Items[];
}
interface Items {
  heal_amount?: number;
  item?: string;
}

export interface Home {
  home_block_list?: string[];
  restriction_radius?: number;
}

export interface HurtOnCondition {
  damage_conditions?: DamageCondition[];
}
interface DamageCondition {
  damage_per_tick?: number;
  filters?: MinecraftFilters;
}

export interface InsideBlockNotifier {
  block_list?: string[];
}

export interface Insomnia {
  days_until_insomnia?: number;
}

export interface InstantDespawn {
  remove_child_entities?: boolean;
}

export interface Interact {
  add_items?: AddItems;
  cooldown?: number;
  cooldown_after_being_attacked?: number;
  health_amount?: number;
  hurt_item?: number;
  interact_text?: string;
  on_interact?: OnInteract;
  particle_on_start?: ParticleOnStart;
  play_sounds?: string;
  spawn_entities?: string[] | string;
  spawn_items?: AddItems;
  swing?: boolean;
  transform_to_item?: string;
  use_item?: boolean;
}
interface AddItems {
  table?: string;
}
interface OnInteract {
  filters?: MinecraftFilters;
  event?: string;
  target?: MinecraftSubjects;
}
interface ParticleOnStart {
  particle_type?: string;
  particle_y_offset?: number;
  particle_offset_towards_interactor?: boolean;
}

export interface Inventory {
  additional_slots_per_strength?: number;
  can_be_siphoned_from?: boolean;
  container_type?: MinecraftContainer;
}

export interface IsDyeable {
  interact_text?: string;
}

export interface ItemControllable {
  control_items?: string[];
}

export interface JumpStatic {
  jump_power?: number;
}

export interface Leashable {
  can_be_stolen?: boolean;
  hard_distance?: number;
  max_distance?: number;
  on_leash?: string;
  on_unleash?: string;
  soft_distance?: number;
}

export interface LookAt {
  allow_invulnerable?: boolean;
  filters?: MinecraftFilters;
  look_cooldown?: [number, number];
  look_event?: string;
  search_radius?: number;
  set_target?: boolean;
}

export interface Loot {
  table?: string;
}

export interface MarkVariant {
  value?: number;
}

export interface MobEffect {
  effect_range?: number;
  effect_time?: number;
  entity_filter?: MinecraftFilters;
  mob_effect?: string;
}

export interface Movement {
  max_turn?: number;
}

export interface MovementJump extends Movement {
  jump_delay?: [number, number];
}

export interface MovementSway extends Movement {
  sway_amplitude?: number;
  sway_frequency?: number;
}

export interface Nameable {
  allow_name_tag_renaming?: boolean;
  always_show?: boolean;
  default_trigger?: string;
  name_actions?: NameActions;
}
interface NameActions {
  name_filter?: string;
  on_named?: string;
}

export interface Navigation {
  avoid_damage_blocks?: boolean;
  avoid_portals?: boolean;
  avoid_sun?: boolean;
  avoid_water?: boolean;
  blocks_to_avoid?: string[];
  can_breach?: boolean;
  can_break_doors?: boolean;
  can_jump?: boolean;
  can_open_doors?: boolean;
  can_open_iron_doors?: boolean;
  can_pass_doors?: boolean;
  can_path_from_air?: boolean;
  can_path_from_lava?: boolean;
  can_path_over_water?: boolean;
  can_sink?: boolean;
  can_swim?: boolean;
  can_walk?: boolean;
  can_walk_in_lava?: boolean;
  is_amphibious?: boolean;
}

export interface Peek {
  on_close?: string;
  on_open?: string;
  on_target_open?: string;
}

export interface Physics {
  has_collision?: boolean;
  has_gravity?: boolean;
}

export interface PreferredPath {
  default_block_cost?: number;
  jump_cost?: number;
  max_fall_blocks?: number;
  preferred_path_blocks?: string[];
}

export interface Projectile {
  angle_offset?: number;
  catch_fire?: boolean;
  crit_particle_on_hurt?: boolean;
  destroy_on_hurt?: boolean;
  filter?: string;
  fire_affected_by_griefing?: boolean;
  gravity?: number;
  hit_sound?: string;
  homing?: boolean;
  inertia?: number;
  is_dangerous?: boolean;
  knockback?: boolean;
  lightning?: boolean;
  liquid_inertia?: number;
  multiple_targets?: boolean;
  offset?: [number, number, number];
  on_fire_time?: number;
  particle?: string;
  potion_effect?: number;
  power?: number;
  reflect_on_hurt?: boolean;
  semi_random_diff_damage?: boolean;
  shoot_sound?: string;
  shoot_target?: boolean;
  should_bounce?: boolean;
  splash_potion?: boolean;
  splash_range?: number;
  uncertainty_base?: number;
  uncertainty_multiplier?: number;
}

export interface PushThrough {
  value?: number;
}

export interface Pushable {
  is_pushable?: boolean;
  is_pushable_by_piston?: boolean;
}

export interface RaidTrigger {
  triggered_event?: string;
}

export interface RailMovement {
  max_speed?: number;
}

export interface RailSensor {
  check_block_types?: boolean;
  eject_on_activate?: boolean;
  eject_on_deactivate?: boolean;
  on_activate?: string;
  on_deactivate?: string;
  tick_command_block_on_activate?: boolean;
  tick_command_block_on_deactivate?: boolean;
}

export interface RavagerBlocked {
  knockback_strength?: number;
  reaction_choices?: string[];
}

export interface Rideable {
  controlling_seat?: number;
  crouching_skip_interact?: boolean;
  family_types?: string[];
  interact_text?: string;
  priority?: number;
  pull_in_entities?: boolean;
  rider_can_interact?: boolean;
  seat_count?: number;
  seats?: Seats[];
}
interface Seats {
  lock_rider_rotation?: number;
  max_rider_count?: number;
  min_rider_count?: number;
  position?: [number, number, number];
  rotate_rider_by?: string;
}

export interface Scale {
  value?: number;
}

export interface ScaleByAge {
  end_scale?: number;
  start_scale?: number;
}

export interface Scheduler {
  scheduled_events?: [];
}

export interface Shareables {
  all_items?: boolean;
  all_items_max_amount?: number;
  all_items_surplus_amount?: number;
  all_items_want_amount?: number;
  items?: Items[];
}
interface Items {
  admire?: boolean;
  barter?: boolean;
  consume_item?: boolean;
  craft_into?: string;
  item?: string;
  max_amount?: number;
  pickup_limit?: number;
  priority?: number;
  stored_in_inventory?: boolean;
  surplus_amount?: number;
  want_amount?: number;
}

export interface Shooter {
  aux_val?: number;
  def?: string;
}

export interface Sittable {
  sit_event?: string;
  stand_event?: string;
}

export interface SkinId {
  value?: number;
}

export interface SoundVolume {
  value?: number;
}

export interface SpawnEntity {
  filters?: MinecraftFilters;
  max_wait_time?: number;
  min_wait_time?: number;
  num_to_spawn?: number;
  should_leash?: boolean;
  single_use?: boolean;
  spawn_entity?: string;
  spawn_event?: string;
  spawn_item?: string;
  spawn_method?: string;
  spawn_sound?: string;
}

export interface SpellEffects {
  add_effects?: AddEffects[];
  remove_effects?: string;
}
interface AddEffects {
  effect?: string;
}

export interface Strength {
  max?: number;
  value?: number;
}

export interface TameMount {
  attempt_temper_mod?: number;
  autoRejectItems?: AutoRejectItems[];
  feed_items?: FeedItems;
  feed_text?: string;
  max_temper?: number;
  min_temper?: number;
  ride_text?: string;
  tame_event?: string;
}
interface AutoRejectItems {
  item?: string;
}
interface FeedItems extends AutoRejectItems {
  temper_mod?: number;
}

export interface Tameable {
  probability?: number;
  tame_event?: string;
  tame_items?: string[];
}

export interface TargetNearbySensor {
  inside_range?: number;
  must_see?: boolean;
  on_inside_range?: string;
  on_outside_range?: string;
  on_vision_lost_inside_range?: string;
  outside_range?: number;
}

export interface Teleport {
  dark_teleport_chance?: number;
  light_teleport_chance?: number;
  max_random_teleport_time?: number;
  min_random_teleport_time?: number;
  random_teleport_cube?: [number, number, number];
  random_teleports?: boolean;
  target_distance?: number;
  target_teleport_chance?: number;
}

export interface TickWorld {
  distance_to_players?: number;
  never_despawn?: boolean;
  radius?: number;
}

export interface Timer {
  looping?: boolean;
  randomInterval?: boolean;
  random_time_choices?: number[];
  time?: [number, number, number];
  time_down_event?: string;
}

export interface TradeTable {
  convert_trades_economy?: boolean;
  display_name?: string;
  new_screen?: boolean;
  persist_trades?: boolean;
  table?: string;
}

export interface Trail {
  block_type?: string;
  spawn_filter?: MinecraftFilters;
  spawn_offset: [number, number, number];
}

export interface Transformation {
  add?: Add;
  begin_transform_sound?: string;
  delay?: Delay;
  drop_equipment?: boolean;
  drop_inventory?: boolean;
  into?: string;
  keep_level?: boolean;
  keep_owner?: boolean;
  preserve_equipment?: boolean;
  transformation_sound?: string;
}
interface Add {
  component_groups?: ComponentGroups;
}
interface Delay {
  block_assist_chance?: number;
  block_chance?: number;
  block_max?: number;
  block_radius?: number;
  block_types?: string[];
  value?: number;
}

export interface Trusting {
  probability?: number;
  trust_event?: string;
  trust_items?: string[];
}

export interface TypeFamily {
  family?: string[];
}

export interface Variant {
  value?: number;
}

export interface WalkAnimationSpeed {
  value?: number;
}

export interface WaterMovement {
  drag_factor?: number;
}

export declare class Item {
  description: ItemDescription;
  components?: ItemComponents;
}

export interface ItemDescription {
  identifier: string;
  category: MinecraftCategories;
  is_experimental?: boolean;
}
export interface ItemComponents {
  ['minecraft:armor']?: Armor;
  ['minecraft:block_placer']?: BlockPlacer;
  ['minecraft:cooldown']?: Cooldown;
  ['minecraft:digger']?: Digger;
  ['minecraft:display_name']?: DisplayName;
  ['minecraft:durability']?: Durability;
  ['minecraft:dye_powder']?: DyePowder;
  ['minecraft:entity_placer']?: EntityPlacer;
  ['minecraft:food']?: Food;
  ['minecraft:fuel']?: Fuel;
  ['minecraft:icon']?: Icon;
  ['minecraft:knockback_resistance']?: KnockbackResistance;
  ['minecraft:on_use']?: OnUse;
  ['minecraft:on_use_on']?: OnUseOn;
  ['minecraft:projectile']?: Projectile;
  ['minecraft:render_offsets']?: RenderOffsets;
  ['minecraft:repairable']?: Repairable;
  ['minecraft:shooter']?: Shooter;
  ['minecraft:throwable']?: Throwable;
  ['minecraft:weapon']?: Weapon;
  ['minecraft:wearable']?: Wearable;
}

export declare class ItemsSchema implements SchemaBase {
  format_version: string | '1.18.0';
  'minecraft:item': Item;
  get path(): string;
}

export interface Armor {
  protection?: number;
  texture_type?: MinecraftArmorTextureTypes;
}

export interface BlockPlacer {
  block?: MinecraftBlocks | string;
  use_on?: MinecraftBlocks[] | string[];
}

export interface Cooldown {
  category?: string;
  duration?: number;
}

export interface Digger {
  destroy_speeds?: DestroySpeed[];
  use_efficiency?: boolean;
  on_dig?: MinecraftTrigger;
}
interface DestroySpeed {
  block: string | MinecraftBlocks;
  speed: number;
}

export interface DisplayName {
  value?: string;
}

export interface Durability {
  max_durability?: number;
  damage_chance?: {
    min?: number;
    max?: number;
  };
}

export interface DyePowder {
  color?: MinecraftDyeColors;
}

export interface EntityPlacer {
  dispense_on?: string[] | MinecraftBlocks[];
  entity?: MinecraftEntities | string;
  use_on?: MinecraftBlocks[] | string[];
}

export interface Food {
  can_always_eat?: boolean;
  nutrition?: number;
  saturation_modifier?: number;
  using_converts_to?: MinecraftItems | string;
  on_consume?: MinecraftTrigger;
}

export interface Fuel {
  duration?: number;
}

export interface Icon {
  legacy_id?: string;
  texture?: string;
}

export interface KnockbackResistance {
  protection?: number;
}

export interface OnUse {
  on_use?: MinecraftTriggerConditioning;
}

export interface OnUseOn {
  on_use_on?: MinecraftTrigger;
}

export interface Projectile {
  projectile_entity?: MinecraftEntities | string;
  minimum_critical_power?: number;
}

export interface RenderOffsets {
  main_hand?: HandRenderOffsets;
  off_hand?: HandRenderOffsets;
}
interface HandRenderOffsets {
  first_person?: {
    position?: [number, number, number];
    rotation?: [number, number, number];
    scale?: [number, number, number];
  };
  third_person?: {
    position?: [number, number, number];
    rotation?: [number, number, number];
    scale?: [number, number, number];
  };
}

export interface Repairable {
  repair_items?: MinecraftItems[] | string[];
  on_repaired?: MinecraftTriggerConditioning;
}

export interface Shooter {
  ammunition?: MinecraftItems[] | string[];
  charge_on_draw?: boolean;
  max_draw_duration?: number;
  max_launch_power?: number;
  launch_power_scale?: number;
  scale_power_by_draw_duration?: boolean;
}

export interface Throwable {
  do_swing_animation?: boolean;
  max_draw_duration?: number;
  min_draw_duration?: number;
  max_launch_power?: number;
  launch_power_scale?: number;
  scale_power_by_draw_duration?: boolean;
}

export interface Weapon {
  on_hit_block?: MinecraftTriggerConditioning;
  on_hurt_entity?: MinecraftTriggerConditioning;
  on_not_hurt_entity?: MinecraftTriggerConditioning;
}

export interface Wearable {
  slot?: MinecraftSlots;
}

export interface LootTablePool {
  rools?: number;
  conditions?: MinecraftConditionsType[];
  entries?: MinecraftEntriesType[];
}

export declare class LootTablesSchema implements SchemaBase {
  pools?: LootTablePool[];
  get path(): string;
}

export interface RecipeBrewing {
  description?: Description;
  input?: string;
  output?: string;
  reagent?: string;
  tags?: ['brewing_stand'];
}

export interface RecipeFurnace {
  description?: Description;
  input?: string;
  output?: string;
  tags?: MinecraftFurnaceRecipeTags[];
}

export interface Description {
  identifier: string;
}

export interface RecipeShape {
  description?: Description;
  tags?: ['crafting_table'];
  pattern?: string[];
  key?: RecipeKey;
  result?: RecipeResult;
  group?: string;
  priority?: number;
}

export declare class RecipesSchema implements SchemaBase {
  format_version: string | '1.18.10';
  ['minecraft:recipe_shaped']?: RecipeShape;
  ['minecraft:recipe_shapeless']?: RecipeShape;
  ['minecraft:recipe_brewing_container']?: RecipeBrewing;
  ['minecraft:recipe_brewing_mix']?: RecipeBrewing;
  ['minecraft:recipe_furnace']?: RecipeFurnace;
  get path(): string;
}

export interface RecipeKey {
  [property_name: string]: MinecraftRecipeItemProperties;
}

export interface RecipeResult {
  item?: string;
  data?: number;
  count?: number;
}

export declare type Languages = Array<MinecraftLanguages>;
export declare const path: string;

export declare class ManifestSchema implements SchemaBase {
  format_version: 2;
  header: Header;
  modules: Modules[];
  dependencies?: Dependencies[];
  metadata?: Metadata;
  capabilities?: Capabilities;
  get path(): string;
}

export declare type UUID = string;

export declare class Capabilities {
  chemistry: boolean;
  experimental_custom_ui: boolean;
  raytraced: boolean;
}

export declare class Dependencies {
  uuid: UUID;
  version: [number, number, number];
}

export interface Header {
  name: string | 'pack.name';
  description: string | 'pack.description';
  version: [number, number, number] | [1, 0, 0];
  base_game_version?: [number, number, number] | [1, 18, 0];
  min_engine_version?: [number, number, number] | [1, 16, 0];
  lock_template_options?: boolean;
  uuid: UUID;
}

export declare class Metadata {
  authors: string[];
  license: string;
  url: string;
}

export interface Modules {
  description?: string;
  type: MinecraftManifests;
  version: [number, number, number];
  uuid: UUID;
}

export declare type FlipbookTextures = Array<MinecraftFlipbookTexture>;
export declare const path: string;

export declare class ItemTextureSchema implements SchemaBase {
  resource_pack_name: string | 'pack.name';
  texture_name: 'atlas.items';
  texture_data: MinecraftTextureData;
  get path(): string;
}

export declare type LanguageNames = Array<[MinecraftLanguages, string]>;
export declare const path: string;

export declare class SplashesSchema implements SchemaBase {
  splashes: string[];
  get path(): string;
}

export declare class TerrainTextureSchema implements SchemaBase {
  resource_pack_name: string | 'pack.name';
  texture_name: 'atlas.terrain';
  num_mip_levels: number | 4;
  padding: number | 8;
  texture_data: MinecraftTextureData;
  get path(): string;
}

export interface BlockTexture {
  textures: string | Textures;
}
export interface Textures {
  up?: string;
  down?: string;
  east?: string;
  west?: string;
  north?: string;
  south?: string;
  side?: string;
}

export declare class BlocksTextureSchema implements SchemaBase {
  [property_name: string]: BlockTexture;
  get path(): string | any;
}

export interface ClientEntity {
  description: ClientEntityProperties;
}

export interface ClientEntityProperties {
  identifier?: string;
  render_controllers?: RenderController[];
  enable_attachables?: boolean;
  hide_armor?: boolean;
  min_engine_version?: string;
  sound_effects?: SoundEffects;
  particle_emitters?: ParticleEmitters;
  queryable_geometry?: string;
  materials?: Materials;
  geometry?: Geometry;
  particle_effects?: ParticleEffects;
  textures?: ClientTextures;
  animations?: Animations;
  scripts?: ClientScripts;
  spawn_egg?: SpawnEgg;
}

export declare class ClientEntitySchema implements SchemaBase {
  format_version?: string | '1.10.0';
  ['minecraft:client_entity']?: ClientEntity;
  get path(): string;
}

export interface Animations {
  [property_name: string]: string;
}

export interface ClientScripts {
  pre_animation?: string[];
  initialize?: string[];
  parent_setup?: string;
  scale?: string;
  scalex?: string;
  scaley?: string;
  scalez?: string;
  should_update_bones_and_effects_offscreen?: string | boolean;
  should_update_effects_offscreen?: string | boolean;
  variables?: MinecraftClientVariables;
  animate?: string[];
}

export interface ClientTextures {
  [property_name: string]: string;
}

export interface Geometry {
  [property_name: string]: string;
}

export interface Materials {
  [property_name: string]: string;
}

export interface ParticleEffects {
  [property_name: string]: string;
}

export interface ParticleEmitters {
  [property_name: string]: string;
}

export declare type RenderController = string;

export interface SoundEffects {
  [property_name: string]: string;
}

export interface SpawnEgg {
  base_color?: string;
  overlay_color?: string;
  texture_index?: number;
  texture?: string;
}

export interface MusicDefinition {
  event_name?: MinecraftMusicEvents;
  max_delay?: number;
  min_delay?: number;
}

export declare class MusicDefinitionsSchema implements SchemaBase {
  [property_name: string]: MusicDefinition;
  get path(): string | any;
}

export declare class SoundDefinitionsSchema implements SchemaBase {
  format_version?: string | '1.14.0';
  sound_definitions?: SoundDefinition;
  __use_legacy_max_distance?: boolean;
  get path(): string;
}

export interface SoundDefinition {
  [property_name: string]: SoundDefinitionProperties;
}

export interface SoundDefinitionProperties {
  category?: MinecraftSoundCategories;
  sounds?: SoundDefinitionProperty[];
  max_distance?: number;
  __use_legacy_max_distance?: boolean;
}

export interface SoundDefinitionProperty extends MinecraftSound {
  is3D?: boolean;
  name?: string;
  weight?: number;
  load_on_low_memory?: boolean;
  stream?: boolean;
}

export declare class SoundsSchema implements SchemaBase {
  block_sounds?: BlockSounds;
  entity_sounds?: EntitySounds;
  individual_event_sounds?: IndividualEventSounds;
  interactive_sounds?: InteractiveSounds;
  get path(): string;
}

export interface BlockSounds {
  [property_name: string]: BlockSoundsProperty;
}
export interface EntitySounds {
  [property_name: string]: EntitySoundsProperty;
}
export interface IndividualEventSounds {
  events?: IndividualEventSoundEvents;
}
export interface InteractiveSounds {
  [property_name: string]: InteractiveSoundsProperty;
}

export interface BlockSoundsProperty extends MinecraftSound {
  events?: BlockSoundEvents;
}
export interface BlockSoundEvents {
  default?: MinecraftSoundEvent;
  break?: MinecraftSoundEvent;
  hit?: MinecraftSoundEvent;
  place?: MinecraftSoundEvent;
  ['item.use.on']?: MinecraftSoundEvent;
  ['power.off']?: MinecraftSoundEvent;
  ['power.on']?: MinecraftSoundEvent;
}

export interface EntitySoundsProperty extends MinecraftSound {
  events?: EntitySoundEvents;
}
export interface EntitySoundEvents {
  ambient?: MinecraftSoundEvent;
  hurt?: MinecraftSoundEvent;
  death?: MinecraftSoundEvent;
  step?: MinecraftSoundEvent;
  ['fall.big']?: MinecraftSoundEvent;
  ['fall.small']?: MinecraftSoundEvent;
  splash?: MinecraftSoundEvent;
  ashootttack?: MinecraftSoundEvent;
}

export interface IndividualEventSoundEvents {
  ['ambient.basalt_deltas.additions']?: MinecraftSoundEvent;
  ['ambient.basalt_deltas.loop']?: MinecraftSoundEvent;
  ['ambient.basalt_deltas.mood']?: MinecraftSoundEvent;
  ['ambient.candle']?: MinecraftSoundEvent;
  ['ambient.cave']?: MinecraftSoundEvent;
  ['ambient.crimson_forest.additions']?: MinecraftSoundEvent;
  ['ambient.crimson_forest.loop']?: MinecraftSoundEvent;
  ['ambient.crimson_forest.mood']?: MinecraftSoundEvent;
  ['ambient.nether_wastes.additions']?: MinecraftSoundEvent;
  ['ambient.nether_wastes.loop']?: MinecraftSoundEvent;
  ['ambient.nether_wastes.mood']?: MinecraftSoundEvent;
  ['ambient.soulsand_valley.additions']?: MinecraftSoundEvent;
  ['ambient.soulsand_valley.loop']?: MinecraftSoundEvent;
  ['ambient.soulsand_valley.mood']?: MinecraftSoundEvent;
  ['ambient.warped_forest.additions']?: MinecraftSoundEvent;
  ['ambient.warped_forest.loop']?: MinecraftSoundEvent;
  ['ambient.warped_forest.mood']?: MinecraftSoundEvent;
  ['armor.equip_chain']?: MinecraftSoundEvent;
  ['armor.equip_diamond']?: MinecraftSoundEvent;
  ['armor.equip_elytra']?: MinecraftSoundEvent;
  ['armor.equip_generic']?: MinecraftSoundEvent;
  ['armor.equip_gold']?: MinecraftSoundEvent;
  ['armor.equip_iron']?: MinecraftSoundEvent;
  ['armor.equip_leather']?: MinecraftSoundEvent;
  ['armor.equip_netherite']?: MinecraftSoundEvent;
  ['attach']?: MinecraftSoundEvent;
  ['beacon.activate']?: MinecraftSoundEvent;
  ['beacon.ambient']?: MinecraftSoundEvent;
  ['beacon.deactivate']?: MinecraftSoundEvent;
  ['beacon.power']?: MinecraftSoundEvent;
  ['blast']?: MinecraftSoundEvent;
  ['block.bamboo_sapling.place']?: MinecraftSoundEvent;
  ['block.barrel.close']?: MinecraftSoundEvent;
  ['block.barrel.open']?: MinecraftSoundEvent;
  ['block.beehive.drip']?: MinecraftSoundEvent;
  ['block.beehive.enter']?: MinecraftSoundEvent;
  ['block.beehive.exit']?: MinecraftSoundEvent;
  ['block.beehive.shear']?: MinecraftSoundEvent;
  ['block.beehive.work']?: MinecraftSoundEvent;
  ['block.bell.hit']?: MinecraftSoundEvent;
  ['block.blastfurnace.fire_crackle']?: MinecraftSoundEvent;
  ['block.campfire.crackle']?: MinecraftSoundEvent;
  ['block.cartography_table.use']?: MinecraftSoundEvent;
  ['block.click']?: MinecraftSoundEvent;
  ['block.click.fail']?: MinecraftSoundEvent;
  ['block.composter.empty']?: MinecraftSoundEvent;
  ['block.composter.fill']?: MinecraftSoundEvent;
  ['block.composter.fill_success']?: MinecraftSoundEvent;
  ['block.composter.ready']?: MinecraftSoundEvent;
  ['block.end_portal.spawn']?: MinecraftSoundEvent;
  ['block.end_portal_frame.fill']?: MinecraftSoundEvent;
  ['block.fletching_table.use']?: MinecraftSoundEvent;
  ['block.furnace.lit']?: MinecraftSoundEvent;
  ['block.grindstone.use']?: MinecraftSoundEvent;
  ['block.loom.use']?: MinecraftSoundEvent;
  ['block.scaffolding.climb']?: MinecraftSoundEvent;
  ['block.smithing_table.use']?: MinecraftSoundEvent;
  ['block.smoker.smoke']?: MinecraftSoundEvent;
  ['block.stonecutter.use']?: MinecraftSoundEvent;
  ['block.sweet_berry_bush.hurt']?: MinecraftSoundEvent;
  ['block.sweet_berry_bush.pick']?: MinecraftSoundEvent;
  ['block.turtle_egg.attack']?: MinecraftSoundEvent;
  ['block.turtle_egg.break']?: MinecraftSoundEvent;
  ['block.turtle_egg.crack']?: MinecraftSoundEvent;
  ['block.turtle_egg.hatch']?: MinecraftSoundEvent;
  ['bottle.dragonbreath']?: MinecraftSoundEvent;
  ['bow']?: MinecraftSoundEvent;
  ['bow.hit']?: MinecraftSoundEvent;
  ['break']?: MinecraftSoundEvent;
  ['bubble.down']?: MinecraftSoundEvent;
  ['bubble.downinside']?: MinecraftSoundEvent;
  ['bubble.pop']?: MinecraftSoundEvent;
  ['bubble.up']?: MinecraftSoundEvent;
  ['bubble.upinside']?: MinecraftSoundEvent;
  ['bucket.empty.fish']?: MinecraftSoundEvent;
  ['bucket.empty.lava']?: MinecraftSoundEvent;
  ['bucket.empty.powder_snow']?: MinecraftSoundEvent;
  ['bucket.empty.water']?: MinecraftSoundEvent;
  ['bucket.fill.fish']?: MinecraftSoundEvent;
  ['bucket.fill.lava']?: MinecraftSoundEvent;
  ['bucket.fill.powder_snow']?: MinecraftSoundEvent;
  ['bucket.fill.water']?: MinecraftSoundEvent;
  ['bullet.hit']?: MinecraftSoundEvent;
  ['burp']?: MinecraftSoundEvent;
  ['cake.add_candle']?: MinecraftSoundEvent;
  ['camera.take_picture']?: MinecraftSoundEvent;
  ['cauldron_drip.lava.pointed_dripstone']?: MinecraftSoundEvent;
  ['cauldron_drip.water.pointed_dripstone']?: MinecraftSoundEvent;
  ['chest.closed']?: MinecraftSoundEvent;
  ['chest.open']?: MinecraftSoundEvent;
  ['chime.amethyst_block']?: MinecraftSoundEvent;
  ['chorusdeath']?: MinecraftSoundEvent;
  ['chorusgrow']?: MinecraftSoundEvent;
  ['conduit.activate']?: MinecraftSoundEvent;
  ['conduit.ambient']?: MinecraftSoundEvent;
  ['conduit.attack']?: MinecraftSoundEvent;
  ['conduit.deactivate']?: MinecraftSoundEvent;
  ['conduit.short']?: MinecraftSoundEvent;
  ['convert_mooshroom']?: MinecraftSoundEvent;
  ['convert_to_drowned']?: MinecraftSoundEvent;
  ['convert_to_stray']?: MinecraftSoundEvent;
  ['converted_to_zombified']?: MinecraftSoundEvent;
  ['copper.wax.off']?: MinecraftSoundEvent;
  ['copper.wax.on']?: MinecraftSoundEvent;
  ['crossbow.loading.end']?: MinecraftSoundEvent;
  ['crossbow.loading.middle']?: MinecraftSoundEvent;
  ['crossbow.loading.start']?: MinecraftSoundEvent;
  ['crossbow.quick_charge.end']?: MinecraftSoundEvent;
  ['crossbow.quick_charge.middle']?: MinecraftSoundEvent;
  ['crossbow.quick_charge.start']?: MinecraftSoundEvent;
  ['crossbow.shoot']?: MinecraftSoundEvent;
  ['deny']?: MinecraftSoundEvent;
  ['detach']?: MinecraftSoundEvent;
  ['drip.lava.pointed_dripstone']?: MinecraftSoundEvent;
  ['drip.water.pointed_dripstone']?: MinecraftSoundEvent;
  ['drop.slot']?: MinecraftSoundEvent;
  ['enderchest.closed']?: MinecraftSoundEvent;
  ['enderchest.open']?: MinecraftSoundEvent;
  ['explode']?: MinecraftSoundEvent;
  ['extinguish.candle']?: MinecraftSoundEvent;
  ['extinguish.fire']?: MinecraftSoundEvent;
  ['fire']?: MinecraftSoundEvent;
  ['fizz']?: MinecraftSoundEvent;
  ['glass']?: MinecraftSoundEvent;
  ['glow_squid.ink_squirt']?: MinecraftSoundEvent;
  ['ignite']?: MinecraftSoundEvent;
  ['item.bone_meal.use']?: MinecraftSoundEvent;
  ['item.book.put']?: MinecraftSoundEvent;
  ['item.shield.block']?: MinecraftSoundEvent;
  ['item.spyglass.stop_using']?: MinecraftSoundEvent;
  ['item.spyglass.use']?: MinecraftSoundEvent;
  ['item.trident.hit']?: MinecraftSoundEvent;
  ['item.trident.hit_ground']?: MinecraftSoundEvent;
  ['item.trident.return']?: MinecraftSoundEvent;
  ['item.trident.riptide_1']?: MinecraftSoundEvent;
  ['item.trident.riptide_2']?: MinecraftSoundEvent;
  ['item.trident.riptide_3']?: MinecraftSoundEvent;
  ['item.trident.throw']?: MinecraftSoundEvent;
  ['item.trident.thunder']?: MinecraftSoundEvent;
  ['jump_to_block']?: MinecraftSoundEvent;
  ['large.blast']?: MinecraftSoundEvent;
  ['launch']?: MinecraftSoundEvent;
  ['lava.pop']?: MinecraftSoundEvent;
  ['lay_egg']?: MinecraftSoundEvent;
  ['leashknot.break']?: MinecraftSoundEvent;
  ['leashknot.place']?: MinecraftSoundEvent;
  ['levelup']?: MinecraftSoundEvent;
  ['lodestone_compass.link_compass_to_lodestone']?: MinecraftSoundEvent;
  ['milk']?: MinecraftSoundEvent;
  ['milk.screamer']?: MinecraftSoundEvent;
  ['milk_suspiciously']?: MinecraftSoundEvent;
  ['mob.armor_stand.break']?: MinecraftSoundEvent;
  ['mob.armor_stand.hit']?: MinecraftSoundEvent;
  ['mob.armor_stand.land']?: MinecraftSoundEvent;
  ['mob.armor_stand.place']?: MinecraftSoundEvent;
  ['mob.player.hurt_drown']?: MinecraftSoundEvent;
  ['mob.player.hurt_freeze']?: MinecraftSoundEvent;
  ['mob.player.hurt_on_fire']?: MinecraftSoundEvent;
  ['note']?: MinecraftSoundEvent;
  ['particle.soul_escape.loud']?: MinecraftSoundEvent;
  ['particle.soul_escape.quiet']?: MinecraftSoundEvent;
  ['pick_berries.cave_vines']?: MinecraftSoundEvent;
  ['piston.in']?: MinecraftSoundEvent;
  ['piston.out']?: MinecraftSoundEvent;
  ['pop']?: MinecraftSoundEvent;
  ['portal']?: MinecraftSoundEvent;
  ['portal.travel']?: MinecraftSoundEvent;
  ['potion.brewed']?: MinecraftSoundEvent;
  ['power.off']?: MinecraftSoundEvent;
  ['power.on']?: MinecraftSoundEvent;
  ['pre_ram']?: MinecraftSoundEvent;
  ['pre_ram.screamer']?: MinecraftSoundEvent;
  ['raid.horn']?: MinecraftSoundEvent;
  ['ram_impact']?: MinecraftSoundEvent;
  ['ram_impact.screamer']?: MinecraftSoundEvent;
  ['random.anvil_use']?: MinecraftSoundEvent;
  ['record.11']?: MinecraftSoundEvent;
  ['record.13']?: MinecraftSoundEvent;
  ['record.blocks']?: MinecraftSoundEvent;
  ['record.cat']?: MinecraftSoundEvent;
  ['record.chirp']?: MinecraftSoundEvent;
  ['record.far']?: MinecraftSoundEvent;
  ['record.mall']?: MinecraftSoundEvent;
  ['record.mellohi']?: MinecraftSoundEvent;
  ['record.otherside']?: MinecraftSoundEvent;
  ['record.pigstep']?: MinecraftSoundEvent;
  ['record.stal']?: MinecraftSoundEvent;
  ['record.strad']?: MinecraftSoundEvent;
  ['record.wait']?: MinecraftSoundEvent;
  ['record.ward']?: MinecraftSoundEvent;
  ['remedy']?: MinecraftSoundEvent;
  ['respawn_anchor.charge']?: MinecraftSoundEvent;
  ['respawn_anchor.deplete']?: MinecraftSoundEvent;
  ['respawn_anchor.set_spawn']?: MinecraftSoundEvent;
  ['saddle']?: MinecraftSoundEvent;
  ['scrape']?: MinecraftSoundEvent;
  ['shear']?: MinecraftSoundEvent;
  ['shulkerbox.closed']?: MinecraftSoundEvent;
  ['shulkerbox.open']?: MinecraftSoundEvent;
  ['smithing_table.use']?: MinecraftSoundEvent;
  ['squid.ink_squirt']?: MinecraftSoundEvent;
  ['teleport']?: MinecraftSoundEvent;
  ['thorns']?: MinecraftSoundEvent;
  ['tilt_down.big_dripleaf']?: MinecraftSoundEvent;
  ['tilt_up.big_dripleaf']?: MinecraftSoundEvent;
  ['tripod']?: MinecraftSoundEvent;
  ['twinkle']?: MinecraftSoundEvent;
  ['ui.cartography_table.take_result']?: MinecraftSoundEvent;
  ['ui.loom.take_result']?: MinecraftSoundEvent;
  ['ui.stonecutter.take_result']?: MinecraftSoundEvent;
  ['unfect']?: MinecraftSoundEvent;
  ['water']?: MinecraftSoundEvent;
}

export interface InteractiveSoundsProperty extends MinecraftSound {
  events?: InteractiveSoundEvents;
}
export interface InteractiveSoundEvents {
  default?: MinecraftSoundEvent;
  fall?: MinecraftSoundEvent;
  jump?: MinecraftSoundEvent;
  land?: MinecraftSoundEvent;
  step?: MinecraftSoundEvent;
}

export interface SchemaBase {
  path: string;
}
export interface SchemaConfig {
  fileMatch?: string[];
  url?: string;
}

export declare class Utils {
  findSchemaConfig(schema_name: string): any;
}
export declare const _default: Utils;
export default _default;
