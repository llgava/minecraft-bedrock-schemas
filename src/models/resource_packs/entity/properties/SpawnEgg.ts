export interface SpawnEgg {
  /** @pattern ^#(?:[0-9a-fA-F]{3}){1,2}$ */
  base_color?: string;

  overlay_color?: string;
  texture_index?: number;
  texture?: string;
}
