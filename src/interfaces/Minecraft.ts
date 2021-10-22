export interface MinecraftTarget { target?: MinecraftSubjects; }

export interface MinecraftCondition {
  /** Conditions use Minecraft Queries. Read more about at: https://llgava.net/minecraft/queries  */
  condition?: string;
}

/** This type are in development. (last update: 22/10) */
export type MinecraftBlocks =
  | 'minecraft:air'
  | 'minecraft:stone'
  | 'minecraft:grass';

/** This type are in development. (last update: 22/10) */
export type MinecraftEntities =
  | 'minecraft:zombie'
  | 'minecraft:creeper'
  | 'minecraft:skeleton';

export type MinecraftSlots =
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
  | 'slot.weapon.mainhand'
  | 'slot.weapond.offhand'
  | 'slot.'
  | 'slot.'
  | 'slot.'
  | 'slot.'

export type MinecraftItems =
  | 'minecraft:diamond_sword'
  | 'minecraft:bucket'
  | 'minecraft:redstone';

export type MinecraftDyeColors =
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

export type MinecraftSubjects =
  | 'block'
  | 'damager'
  | 'item'
  | 'other'
  | 'parent'
  | 'player'
  | 'self'
  | 'target';

export type MinecraftEffects =
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

export type MinecraftArmorTextureTypes =
  | 'leather'
  | 'chain'
  | 'diamond'
  | 'iron'
  | 'gold';

export type MinecraftCategories =
  | 'construction'
  | 'equipment'
  | 'items'
  | 'nature';

export type MinecraftCreativeCategories =
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
