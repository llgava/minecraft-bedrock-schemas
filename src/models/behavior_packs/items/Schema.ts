import { SchemaBase } from 'types/SchemaBase';
import { Item } from './Item';

/** @id llgava.behavior_packs.Items */
export class ItemsSchema implements SchemaBase {
  public format_version: string | '1.18.0';
  public 'minecraft:item': Item;

  /** @ignore */
  get path(): string {
    return __filename;
  }
}
