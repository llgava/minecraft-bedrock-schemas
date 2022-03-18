import { MinecraftCategories } from '../../minecraft/types/MinecraftCategories';
import { MinecraftCreativeCategories } from '../../minecraft/types/MinecraftCreativeCategories';
import { Armor } from './Components/Armor';
import { BlockPlacer } from './Components/BlockPlacer';
import { Cooldown } from './Components/Cooldown';
import { Digger } from './Components/Digger';
import { DisplayName } from './Components/DisplayName';
import { Durability } from './Components/Durability';
import { DyePowder } from './Components/DyePowder';
import { EntityPlacer } from './Components/EntityPlacer';
import { Food } from './Components/Food';
import { Fuel } from './Components/Fuel';
import { Icon } from './Components/Icon';
import { KnockbackResistance } from './Components/KnockbackResistance';
import { OnUse } from './Components/OnUse';
import { OnUseOn } from './Components/OnUseOn';
import { Projectile } from './Components/Projectile';
import { RenderOffsets } from './Components/RenderOffsets';
import { Repairable } from './Components/Repairable';
import { Shooter } from './Components/Shooter';
import { Throwable } from './Components/Throwable';
import { Weapon } from './Components/Weapon';
import { Wearable } from './Components/Wearable';

export interface Description {
  /** @TJS-pattern ^(?:(?:(?!minecraft|minecon))+[a-z]*:[a-z_]*)+$ */
  identifier: string;
  category: MinecraftCategories;
  is_experimental?: boolean;
}

export interface Components {
  ['minecraft:armor']?: Armor;
  ['minecraft:block_placer']?: BlockPlacer;
  ['minecraft:can_destroy_in_creative']?: boolean;
  ['minecraft:cooldown']?: Cooldown;
  ['minecraft:creative_category']?: MinecraftCreativeCategories;
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
