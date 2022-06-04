import { BehaviorMove } from './BehaviorMove';

export interface BehaviorMoveToLiquid extends BehaviorMove {
  material_type?: MaterialType[];
}

type MaterialType = 'Any' | 'Water' | 'Lava';
