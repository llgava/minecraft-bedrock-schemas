import { IBlocksDescription, IBlocksPermutations, IBlocksComponents, IBlocksEvents } from '../../interfaces/Blocks';

export class BlocksBase {
  public description: IBlocksDescription;
  public permutations: IBlocksPermutations[];
  public components: IBlocksComponents;
  public events: IBlocksEvents;
}
