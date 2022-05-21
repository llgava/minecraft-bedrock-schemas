export interface Navigation {
  avoid_damage_blocks?: boolean;
  avoid_portals?: boolean;
  avoid_sun?: boolean;
  avoid_water?: boolean;
  blocks_to_avoid?: string[];
  can_breach?: boolean;
  can_break_doors?: boolean;
  can_jump?: boolean;
  can_open_doors?: boolean;
  can_open_iron_doors?: boolean;
  can_pass_doors?: boolean;
  can_path_from_air?: boolean;
  can_path_from_lava?: boolean;
  can_path_over_water?: boolean;
  can_sink?: boolean;
  can_swim?: boolean;
  can_walk?: boolean;
  can_walk_in_lava?: boolean;
  is_amphibious?: boolean;
}
