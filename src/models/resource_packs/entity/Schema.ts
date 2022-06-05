import { ClientEntity } from './ClientEntity';

/** @id llgava.resource_packs.SoundsDefinition */
export class ClientEntitySchema {
  public format_version?: string | '1.10.0';
  public ['minecraft:client_entity']?: ClientEntity;

  /** @TJS-ignore */ get fileName(): string {
    return 'client_entity';
  }
  /** @TJS-ignore */ get path(): string {
    return __filename;
  }
  /** @TJS-ignore */ get name(): string {
    return this.constructor.name;
  }

  /** @TJS-ignore */ get fileMatch(): string[] {
    return ['resource_packs/*/entity/*.json', 'development_resource_packs/*/entity/*.json'];
  }
}
