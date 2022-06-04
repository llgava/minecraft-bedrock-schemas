import { MinecraftLanguages } from '@minecraft/types/MinecraftLanguages';

/** @$id llgava.global.LanguageNames */
export type LanguageNames = Array<[MinecraftLanguages, string]>;

export const name = 'LanguageNames';
export const fileName = 'language_names';
export const path = __filename;
export const fileMatch = [
  'resource_packs/*/texts/language_names.json',
  'development_resource_packs/*/texts/language_names.json',
];
