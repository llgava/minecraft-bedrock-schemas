import { ComponentGroups } from '../EntityProperties';

export interface Transformation {
  add?: Add;
  begin_transform_sound?: string;
  delay?: Delay;
  drop_equipment?: boolean;
  drop_inventory?: boolean;
  into?: string;
  keep_level?: boolean;
  keep_owner?: boolean;
  preserve_equipment?: boolean;
  transformation_sound?: string;
}

interface Add {
  component_groups?: ComponentGroups;
}

interface Delay {
  block_assist_chance?: number;
  block_chance?: number;
  block_max?: number;
  block_radius?: number;
  block_types?: string[];
  value?: number;
}
