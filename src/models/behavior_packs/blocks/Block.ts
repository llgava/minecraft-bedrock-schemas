import { BlockDescription, BlockPermutations, BlockComponents, BlockEvents } from './BlockProperties';

export class Block {
  public description: BlockDescription;
  public permutations?: BlockPermutations[];
  public components?: BlockComponents;
  public events?: BlockEvents;
}
