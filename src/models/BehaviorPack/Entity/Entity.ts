import {
  ComponentGroups,
  Components,
  Description,
  Events,
} from './EntityProperties';

export class Entity {
  public description: Description;
  public component_groups?: ComponentGroups;
  public components?: Components;
  public events?: Events;
}
