import { SoundDefinition } from './SoundDefinition';

/** @$id llgava.resource_packs.SoundsDefinition */
export class SoundDefinitionsSchema {
  public format_version?: string | '1.14.0';
  public sound_definitions?: SoundDefinition;
  public __use_legacy_max_distance?: boolean;

  /** @TJS-ignore */ get fileName(): string {
    return 'sound_definitions';
  }
  /** @TJS-ignore */ get path(): string {
    return __filename;
  }
  /** @TJS-ignore */ get name(): string {
    return this.constructor.name;
  }

  /** @TJS-ignore */ get fileMatch(): string[] {
    return [
      'resource_packs/*/sounds/sound_definitions.json',
      'development_resource_packs/*/sounds/sound_definitions.json',
    ];
  }
}
