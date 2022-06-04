import { MinecraftTextureData } from '@minecraft/MinecraftTextureData';

/** @id llgava.resource_packs.TerrainTexture */
export class TerrainTextureSchema {
  public resource_pack_name: string | 'pack.name';
  public texture_name: 'atlas.terrain';
  public num_mip_levels: number | 4;
  public padding: number | 8;
  public texture_data: MinecraftTextureData;

  /** @TJS-ignore */ get fileName(): string {
    return 'terrain_texture';
  }
  /** @TJS-ignore */ get path(): string {
    return __filename;
  }
  /** @TJS-ignore */ get name(): string {
    return this.constructor.name;
  }

  /** @TJS-ignore */ get fileMatch(): string[] {
    return [
      'resource_packs/*/textures/terrain_texture.json',
      'development_resource_packs/*/textures/terrain_texture.json',
    ];
  }
}
