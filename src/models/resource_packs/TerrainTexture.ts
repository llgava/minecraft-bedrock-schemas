import { SchemaBase } from 'types/SchemaBase';
import { MinecraftTextureData } from '@minecraft/MinecraftTextureData';

/** @id llgava.resource_packs.TerrainTexture */
export class TerrainTextureSchema implements SchemaBase {
  public resource_pack_name: string | 'pack.name';
  public texture_name: 'atlas.terrain';
  public num_mip_levels: number | 4;
  public padding: number | 8;
  public texture_data: MinecraftTextureData;

  /** @ignore */
  get path(): string {
    return __filename;
  }
}
