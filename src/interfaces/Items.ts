import { MinecraftArmorTextureTypes, MinecraftBlocks, MinecraftCategories, MinecraftCreativeCategories, MinecraftDyeColors, MinecraftEntities, MinecraftItems, MinecraftSlots, MinecraftTarget } from './Minecraft';

export interface IItemsDescription {
  /** @TJS-pattern ^(?:(?:(?!minecraft|minecon)\w(?!minecon\w))+[a-z]*:[a-z_]*)+$ */
  identifier: string;
  category: MinecraftCategories;
  is_experimental?: boolean;
}

export interface IItemsComponents {
  ['minecraft:armor']?: IArmor;
  ['minecraft:block_placer']?: IBlockPlacer;
  ['minecraft:can_destroy_in_creative']?: boolean;
  ['minecraft:cooldown']?: ICooldown;
  ['minecraft:creative_category']?: ICreativeCategory;
  ['minecraft:digger']?: IDigger;
  ['minecraft:display_name']?: IDisplayName;
  ['minecraft:durability']?: IDurability;
  ['minecraft:dye_powder']?: IDyePowder;
  ['minecraft:entity_placer']?: IEntityPlacer;
  ['minecraft:food']?: IFood;
  ['minecraft:fuel']?: IFuel;
  ['minecraft:icon']?: IIcon;
  ['minecraft:knockback_resistance']?: IKnockbackResistance;
  ['minecraft:on_use']?: IOnUse;
  ['minecraft:on_use_on']?: IOnUseOn;
  ['minecraft:projectile']?: IProjectile;
  ['minecraft:render_offsets']?: IRenderOffsets;
  ['minecraft:repairable']?: IRepairable;
  ['minecraft:shooter']?: IShooter;
  ['minecraft:throwable']?: IThrowable;
  ['minecraft:weapon']?: IWeapon;
  ['minecraft:wearable']?: IWearable;
}

/* Items Components */
interface IArmor {
  protection?: number;
  texture_type?: MinecraftArmorTextureTypes;
}

interface IBlockPlacer {
  block?: MinecraftBlocks | string;
  use_on?: MinecraftBlocks[] | string[];
  use_block_description?: boolean;
}

interface ICooldown {
  category?: string;
  duration?: number;
}

interface ICreativeCategory { parent: MinecraftCreativeCategories; }

interface TriggerProperty extends MinecraftTarget { event?: string; }

interface TriggerPropertyConditioning extends TriggerProperty { conditions?: string; }

interface IDigger {
  destroy_speeds?: boolean;
  use_efficiency?: boolean;
  on_dig?: TriggerProperty;
}

interface IDisplayName { value?: string; }

interface IDurability {
  max_durability?: number;
  damage_chance?: {
    min?: number;
    max?: number;
  };
}

interface IDyePowder {
  color?: MinecraftDyeColors;
}

interface IEntityPlacer {
  dispense_on?: string[];
  entity?: MinecraftEntities | string;
  use_on?: MinecraftBlocks[] | string[];
}

/** Use my iFood code and get a discount 😀: XJVC4VHSE5 */
interface IFood {
  can_always_eat?: boolean;
  nutrition?: number;
  saturation_modifier?: number;
  using_converts_to?: MinecraftItems | string;
  on_consume?: TriggerProperty;
}

interface IFuel { duration?: number; }

interface IIcon {
  legacy_id?: string;
  frame?: number;
  texture?: string;
}

interface IKnockbackResistance { protection?: number; }

interface IOnUse { on_use?: TriggerPropertyConditioning; }

interface IOnUseOn { on_use_on?: TriggerProperty; }

interface IProjectile {
  projectile_entity?: MinecraftEntities | string;
  minimum_critical_power?: number;
}

interface IHandRenderOffsets {
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

interface IRenderOffsets {
  main_hand?: IHandRenderOffsets;
  off_hand?: IHandRenderOffsets;
}

interface IRepairable {
  repair_items?: MinecraftItems[] | string[];
  on_repaired?: TriggerPropertyConditioning;
}

interface IShooter {
  max_draw_duration?: number;
  charge_on_draw?: boolean;
  scale_power_by_draw_duration?: boolean;
  ammunition?: MinecraftItems[] | string[];
}

interface IThrowable {
  do_swing_animation?: boolean;
  max_draw_duration?: number;
  scale_power_by_draw_duration?: boolean;
  launch_power_scale?: number;
}

interface IWeapon {
  on_hurt_entity?: TriggerPropertyConditioning;
  on_not_hurt_entity?: TriggerPropertyConditioning;
  on_hit_block?: TriggerPropertyConditioning;
}

interface IWearable {
  slot?: MinecraftSlots;
  dispensable?: boolean;
}
