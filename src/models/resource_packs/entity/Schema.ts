import { SchemaBase } from 'types/SchemaBase';
import { ClientEntity } from './ClientEntity';

/** @id llgava.resource_packs.SoundsDefinition */
export class ClientEntitySchema implements SchemaBase {
  public format_version?: string | '1.10.0';
  public ['minecraft:client_entity']?: ClientEntity;

  /** @ignore */
  get path(): string {
    return __filename;
  }
}
