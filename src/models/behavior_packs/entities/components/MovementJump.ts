import { Movement } from './Movement';

export interface MovementJump extends Movement {
  jump_delay?: [number, number];
}
