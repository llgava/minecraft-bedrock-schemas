import { SchemaBase } from 'types/SchemaBase';
import { MusicDefinition } from './MusicDefinition';

/** @id llgava.resource_packs.MusicDefinitions */
export class MusicDefinitionsSchema {
  [property_name: string]: MusicDefinition;

  /** @ignore */
  get path(): string | any {
    return __filename;
  }
}
