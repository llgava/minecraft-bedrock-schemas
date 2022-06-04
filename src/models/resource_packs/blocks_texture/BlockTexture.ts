export interface BlockTexture {
  textures: string | Textures;
}

export interface Textures {
  up?: string;
  down?: string;
  east?: string;
  west?: string;
  north?: string;
  south?: string;
  side?: string;
}
