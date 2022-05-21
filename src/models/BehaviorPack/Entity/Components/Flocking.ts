export interface Flocking {
  block_distance?: number;
  block_weight?: number;
  breach_influence?: number;
  cohesion_threshold?: number;
  goal_weight?: number;
  high_flock_limit?: number;
  in_water?: boolean;
  influence_radius?: number;
  inner_cohesion_threshold?: number;
  loner_chance?: number;
  low_flock_limit?: number;
  match_variants?: boolean;
  max_height?: number;
  min_height?: number;
  separation_threshold?: number;
  separation_weight?: number;
  use_center_of_mass?: boolean;
}
