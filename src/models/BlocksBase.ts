import { BlocksComponents } from './BlocksComponents';
import { BlocksDescription } from './BlocksDescription';

export class BlocksBase {
  public description: BlocksDescription;
  public components: BlocksComponents;

  constructor() {
    this.description = new BlocksDescription();
    this.components = new BlocksComponents();
  }
}
