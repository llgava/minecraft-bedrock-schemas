import { MinecraftLanguages } from '@minecraft/types/MinecraftLanguages';

/** @id llgava.global.LanguageNames */
export class LanguageNames extends Array<[MinecraftLanguages, string]> {
  /** @ignore */
  get path(): string {
    return __filename;
  }
}
