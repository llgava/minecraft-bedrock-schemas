export interface ItemTexture {
  textures?: string | string[] | Textures;
}

export interface Textures {
  path?: string;

  /** @TJS-pattern ^#(?:[0-9a-fA-F]{3}){1,2}$ */
  overlay_color?: string;
  /** @TJS-pattern ^#(?:[0-9a-fA-F]{3}){1,2}$ */
  tint_color?: string;
  variations?: Variations[];
}

export interface Variations {
  path?: string;
  weight?: number;
}
