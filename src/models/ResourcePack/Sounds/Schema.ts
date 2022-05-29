import {
  BlockSounds,
  EntitySounds,
  IndividualEventSounds,
  InteractiveSounds,
} from './SoundsProperties';

/** @$id llgava.resource_packs.Sounds */
export class SoundsSchema {
  block_sounds?: BlockSounds;
  entity_sounds?: EntitySounds;
  individual_event_sounds?: IndividualEventSounds;
  interactive_sounds?: InteractiveSounds;

  /** @TJS-ignore */ get fileName(): string | any {
    return 'sounds';
  }
  /** @TJS-ignore */ get path(): string | any {
    return __filename;
  }
  /** @TJS-ignore */ get name(): string | any {
    return this.constructor.name;
  }

  /** @TJS-ignore */ get fileMatch(): string[] | any {
    return [
      'resource_packs/*/sounds.json',
      'development_resource_packs/*/sounds.json',
    ];
  }
}
