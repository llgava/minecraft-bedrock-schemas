import { MinecraftCategories } from '@minecraft/types/MinecraftCategories';
import { Armor } from './components/Armor';
import { BlockPlacer } from './components/BlockPlacer';
import { Cooldown } from './components/Cooldown';
import { Digger } from './components/Digger';
import { DisplayName } from './components/DisplayName';
import { Durability } from './components/Durability';
import { DyePowder } from './components/DyePowder';
import { EntityPlacer } from './components/EntityPlacer';
import { Food } from './components/Food';
import { Fuel } from './components/Fuel';
import { Icon } from './components/Icon';
import { KnockbackResistance } from './components/KnockbackResistance';
import { OnUse } from './components/OnUse';
import { OnUseOn } from './components/OnUseOn';
import { Projectile } from './components/Projectile';
import { RenderOffsets } from './components/RenderOffsets';
import { Repairable } from './components/Repairable';
import { Shooter } from './components/Shooter';
import { Throwable } from './components/Throwable';
import { Weapon } from './components/Weapon';
import { Wearable } from './components/Wearable';

export interface Description {
  /** @TJS-pattern ^(?:(?:(?!minecraft|minecon))+[a-z]*:[a-z_]*)+$ */
  identifier: string;
  category: MinecraftCategories;
  is_experimental?: boolean;
}

export interface Components {
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
