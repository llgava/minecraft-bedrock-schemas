import { BlocksDescription } from './BlocksDescription';
import { BlocksComponents } from './BlocksComponents';
import { BlocksEvents } from './BlocksEvents';

export class BlocksBase {
  public description: BlocksDescription;
  public components: BlocksComponents;
  public events: BlocksEvents;

  constructor() {
    this.description = new BlocksDescription();
    this.components = new BlocksComponents();
    this.events = new BlocksEvents();
  }
}
