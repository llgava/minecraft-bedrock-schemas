import { BlockTexture } from './BlockTexture';

/** @$id llgava.resource_packs.BlocksTexture */
export class BlocksTextureSchema {
  [property_name: string]: BlockTexture;

  /** @TJS-ignore */ get fileName(): string | any {
    return 'blocks_texture';
  }
  /** @TJS-ignore */ get path(): string | any {
    return __filename;
  }
  /** @TJS-ignore */ get name(): string | any {
    return this.constructor.name;
  }

  /** @TJS-ignore */ get fileMatch(): string[] | any {
    return ['resource_packs/*/blocks.json', 'development_resource_packs/*/blocks.json'];
  }
}
