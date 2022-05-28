import { Movement } from './Movement';

export interface MovementSway extends Movement {
  sway_amplitude?: number;
  sway_frequency?: number;
}
