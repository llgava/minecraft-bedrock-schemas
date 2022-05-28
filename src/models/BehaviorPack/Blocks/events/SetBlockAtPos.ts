import { SetBlock } from './SetBlock';

export interface SetBlockAtPos extends SetBlock {
  block_offset?: [number, number, number];
}
