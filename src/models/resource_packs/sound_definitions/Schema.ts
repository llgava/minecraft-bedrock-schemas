import { SchemaBase } from 'types/SchemaBase';
import { SoundDefinition } from './SoundDefinition';

/** @id llgava.resource_packs.SoundsDefinition */
export class SoundDefinitionsSchema {
  public format_version?: string | '1.14.0';
  public sound_definitions?: SoundDefinition;
  public __use_legacy_max_distance?: boolean;

  /** @ignore */
  get path(): string {
    return __filename;
  }
}
