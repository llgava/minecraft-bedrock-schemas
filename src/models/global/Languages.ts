import { MinecraftLanguages } from '@minecraft/types/MinecraftLanguages';

/** @id llgava.global.Languages */
export class Languages extends Array<MinecraftLanguages> {
  /** @ignore */
  get path(): string {
    return __filename;
  }
}
