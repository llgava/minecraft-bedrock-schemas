import { MinecraftTextureData } from '@minecraft/MinecraftTextureData';
import { SchemaBase } from 'types/SchemaBase';

/** @id llgava.resource_packs.ItemTexture */
export class ItemTextureSchema {
  public resource_pack_name: string | 'pack.name';
  public texture_name: 'atlas.items';
  public texture_data: MinecraftTextureData;

  get path(): string {
    return __filename;
  }
}
