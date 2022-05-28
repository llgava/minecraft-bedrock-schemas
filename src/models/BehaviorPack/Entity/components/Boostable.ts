export interface Boostable {
  boost_items?: BoostItems[];
  duration?: number;
  speed_multiplier?: number;
}

interface BoostItems {
  damage?: number;
  item?: string;
  replace_item?: string;
}
