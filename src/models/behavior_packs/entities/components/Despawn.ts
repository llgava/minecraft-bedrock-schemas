import { MinecraftFilters } from '@minecraft/types/MinecraftFilters';
export interface Despawn {
  despawn_from_chance?: boolean;
  despawn_from_distance?: DespawnFromDistance;
  despawn_from_inactivity?: boolean;
  despawn_from_simulation_edge?: boolean;
  filters?: MinecraftFilters;
  min_range_inactivity_timer?: number;
  min_range_random_chance?: number;
  remove_child_entities?: boolean;
}

interface DespawnFromDistance {
  max_distance?: number;
  min_distance?: number;
}
