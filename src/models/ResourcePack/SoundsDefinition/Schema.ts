import { SoundDefinition } from './SoundDefinition';

/** @$id llgava.resource_packs.SoundsDefinition */
export class SoundsDefinitionSchema {
  public format_version?: string | '1.14.0';
  public sound_definitions?: SoundDefinition;
  public __use_legacy_max_distance?: boolean;

  /** @TJS-ignore */ get fileName(): string | any {
    return 'sounds_definition';
  }
  /** @TJS-ignore */ get path(): string | any {
    return __filename;
  }
  /** @TJS-ignore */ get name(): string | any {
    return this.constructor.name;
  }

  /** @TJS-ignore */ get fileMatch(): string[] | any {
    return [
      'resource_packs/*/sounds/sounds_definitions.json',
      'development_resource_packs/*/sounds/sounds_definitions.json',
    ];
  }
}
