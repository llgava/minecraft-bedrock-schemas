import { MinecraftTextureData } from '@minecraft/MinecraftTextureData';

/** @$id llgava.resource_packs.ItemTexture */
export class ItemTextureSchema {
  public resource_pack_name: string | 'pack.name';
  public texture_name: 'atlas.items';
  public texture_data: MinecraftTextureData;

  /** @TJS-ignore */ get fileName(): string {
    return 'item_texture';
  }
  /** @TJS-ignore */ get path(): string {
    return __filename;
  }
  /** @TJS-ignore */ get name(): string {
    return this.constructor.name;
  }

  /** @TJS-ignore */ get fileMatch(): string[] {
    return [
      'resource_packs/*/textures/item_texture.json',
      'development_resource_packs/*/textures/item_texture.json',
    ];
  }
}
