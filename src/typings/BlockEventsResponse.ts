/* type Effect =
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
  | 'wither'; */

export interface IAddMobEffect {
  amplifier: number;
  duration: number;
  effect: string;
  target: 'self';
}

export interface IDamage {
  amount: number;
  target: 'self';
  type: string;
}

export interface IDie { target: 'self'; }

export interface IPlayEffect {
  data: number;
  effect: string;
  target: 'self';
}

export interface IPlaySound {
  sound: string;
  target: 'self';
}

export interface IRemoveMobEffect {
  effect: string;
  target: 'self';
}

export interface IRunCommand {
  command: string | string[];
  target: 'self';
}

export interface ISetBlock { block_type: string; }

export interface ISetBlockAtPos {
  block_offset: [number, number, number];
  block_type: string;
}

export interface ISetBlockProperty { property: any; }

export interface ISpawnLoot { table: string; }

export interface ITeleport {
  avoid_water: boolean;
  destination: [number, number, number];
  land_on_block: boolean;
  max_range: [number, number, number];
  target: 'self';
}

export interface ITransformItem { transform: string; }
