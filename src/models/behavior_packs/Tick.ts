import { SchemaBase } from 'types/SchemaBase';

/** @id llgava.behavior_packs.functions.Tick */
export class Tick implements SchemaBase {
  public values?: string[];

  /** @ignore */
  get path(): string {
    return __filename;
  }
}
