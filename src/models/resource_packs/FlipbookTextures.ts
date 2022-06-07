import { MinecraftFlipbookTexture } from '@minecraft/MinecraftFlipbookTexture';

/** @id llgava.resource_packs.FlipbookTextures */
export class FlipbookTextures extends Array<MinecraftFlipbookTexture> {
  /** @ignore */
  get path(): string {
    return __filename;
  }
}
