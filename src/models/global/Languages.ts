import { MinecraftLanguages } from '@minecraft/types/MinecraftLanguages';

/** @id llgava.global.Languages */
export type Languages = Array<MinecraftLanguages>;

export const name = 'Languages';
export const fileName = 'languages';
export const path = __filename;
export const fileMatch = [
  'resource_packs/*/texts/languages.json',
  'behavior_packs/*/texts/languages.json',
  'development_resource_packs/*/texts/languages.json',
  'development_behavior_packs/*/texts/languages.json',
];
