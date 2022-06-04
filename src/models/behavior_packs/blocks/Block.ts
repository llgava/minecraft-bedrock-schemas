import { Description, Permutations, Components, Events } from './BlockProperties';

export class Block {
  public description: Description;
  public permutations?: Permutations[];
  public components?: Components;
  public events?: Events;
}
