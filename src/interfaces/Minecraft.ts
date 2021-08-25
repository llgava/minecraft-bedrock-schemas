export interface MinecraftTarget { target?: MinecraftSubjects; }

export interface MinecraftCondition {
  /** Conditions use Minecraft Queries. Read more about at: https://llgava.net/minecraft/queries  */
  condition?: string;
}

export type MinecraftBlocks =
  | 'minecraft:air'
  | 'minecraft:stone'
  | 'minecraft:grass';

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
