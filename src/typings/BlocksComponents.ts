export type BreathabilityType = 'solid' | 'air';

export interface IFlammable {
  burn_odds: number;
  flame_odds: number;
}

type MaterialInstancesRenderMethod = | 'alpha_test';

export interface IMaterialInstances {
  '*': {
    render_method: MaterialInstancesRenderMethod;
    texture: string;
  };
}

export interface ICollision {
  origin: [number, number, number];
  size: [number, number, number];
}

type PlacementFilterAllowedFaces = 'up' | 'down' | 'north' | 'south' | 'east' | 'west' | 'side' | 'all';

export interface IPlacementFilter {
  allowed_faces: PlacementFilterAllowedFaces;
  block_filter: string[];
}

type OnTickTarget = 'self';

interface IOnTick {
  event: string;
  target: OnTickTarget;
  condition: string;
  range: [number, number];
}

export interface IRandomTicking {
  on_tick: IOnTick;
}

export interface ITicking {
  on_tick: IOnTick;
  looping: boolean;
  range: [number, number];
}
