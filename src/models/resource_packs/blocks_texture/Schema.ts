import { SchemaBase } from 'types/SchemaBase';
import { BlockTexture } from './BlockTexture';

/** @id llgava.resource_packs.BlocksTexture */
export class BlocksTextureSchema implements SchemaBase {
  [property_name: string]: BlockTexture;

  /** @ignore */
  get path(): string | any {
    return __filename;
  }
}
