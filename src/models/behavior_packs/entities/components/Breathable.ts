export interface Breathable {
  breathe_blocks?: string[];
  breathes_air?: boolean;
  breathes_lava?: boolean;
  breathes_solids?: boolean;
  breathes_water?: boolean;
  generates_bubbles?: boolean;
  inhale_time?: number;
  non_breathe_blocks?: string[];
  suffocate_time?: number;
  total_supply?: number;
}
