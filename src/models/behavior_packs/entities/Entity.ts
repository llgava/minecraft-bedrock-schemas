import { ComponentGroups, EntityComponents, EntityDescription, EntityEvents } from './EntityProperties';

export class Entity {
  public description: EntityDescription;
  public component_groups?: ComponentGroups;
  public components?: EntityComponents;
  public events?: EntityEvents;
}
