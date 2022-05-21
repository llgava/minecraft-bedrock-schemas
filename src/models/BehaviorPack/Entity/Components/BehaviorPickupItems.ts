export interface BehaviorPickupItems {
  can_pickup_any_item?: boolean;
  can_pickup_to_hand_or_equipment?: boolean;
  excluded_items?: string[];
  goal_radius?: number;
  max_dist?: number;
  pickup_based_on_chance?: boolean;
  speed_multiplier?: number;
  track_target?: boolean;
}
