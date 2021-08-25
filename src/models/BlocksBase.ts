import { IBlocksDescription, IBlocksComponents, IBlocksEvents } from '../interfaces/Blocks';

export class BlocksBase {
  public description: IBlocksDescription;
  public components?: IBlocksComponents;
  public events?: IBlocksEvents;
}
