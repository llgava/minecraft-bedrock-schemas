import { MusicDefinition } from './MusicDefinition';

/** @$id llgava.resource_packs.MusicDefinitions */
export class MusicDefinitionsSchema {
  [property_name: string]: MusicDefinition;

  /** @TJS-ignore */ get fileName(): string | any {
    return 'music_definitions';
  }
  /** @TJS-ignore */ get path(): string | any {
    return __filename;
  }
  /** @TJS-ignore */ get name(): string | any {
    return this.constructor.name;
  }

  /** @TJS-ignore */ get fileMatch(): string[] | any {
    return [
      'resource_packs/*/sounds/music_definitions.json',
      'development_resource_packs/*/sounds/music_definitions.json',
    ];
  }
}
