import { IBlocksDescription, IBlocksComponents, IEventsResponse } from '../interfaces/Blocks';

export class BlocksBase {
  public description: IBlocksDescription;
  public components: IBlocksComponents;
  public events: IEventsResponse;
}
