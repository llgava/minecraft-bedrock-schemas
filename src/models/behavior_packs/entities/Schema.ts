import { SchemaBase } from 'types/SchemaBase';
import { Entity } from './Entity';

/** @id llgava.behavior_packs.Entities */
export class EntitiesSchema {
  public format_version: string | '1.18.0';
  public 'minecraft:entity': Entity;

  /** @ignore */
  get path(): string {
    return __filename;
  }
}
