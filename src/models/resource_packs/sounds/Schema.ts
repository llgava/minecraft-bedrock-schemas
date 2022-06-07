import { SchemaBase } from 'types/SchemaBase';
import { BlockSounds, EntitySounds, IndividualEventSounds, InteractiveSounds } from './SoundsProperties';

/** @id llgava.resource_packs.Sounds */
export class SoundsSchema {
  block_sounds?: BlockSounds;
  entity_sounds?: EntitySounds;
  individual_event_sounds?: IndividualEventSounds;
  interactive_sounds?: InteractiveSounds;

  /** @ignore */
  get path(): string {
    return __filename;
  }
}
