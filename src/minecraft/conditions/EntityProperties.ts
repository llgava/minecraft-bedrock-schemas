export interface EntityProperties {
  condition?: 'entity_properties';
  entity?: 'this';
  properties?: Properties;
}

interface Properties {
  on_fire?: boolean;
  on_ground?: boolean;
}
