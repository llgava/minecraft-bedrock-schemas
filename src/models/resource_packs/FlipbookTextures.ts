import { MinecraftFlipbookTexture } from '@minecraft/MinecraftFlipbookTexture';

/** @$id llgava.resource_packs.FlipbookTextures */
export type FlipbookTextures = Array<MinecraftFlipbookTexture>;

export const name = 'FlipbookTextures';
export const fileName = 'flipbook_textures';
export const path = __filename;
export const fileMatch = [
  'resource_packs/*/textures/flipbook_textures.json',
  'development_resource_packs/*/textures/flipbook_textures.json',
];
