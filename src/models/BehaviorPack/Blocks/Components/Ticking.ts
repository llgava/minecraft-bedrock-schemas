import { OnTick } from './OnTick';

export interface Ticking extends OnTick {
  looping?: boolean;
  range?: [number, number];
}
