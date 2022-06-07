import { SchemaBase } from 'types/SchemaBase';

/** @id llgava.resource_packs.Splashes */
export class SplashesSchema implements SchemaBase {
  public splashes: string[];

  /** @ignore */
  get path(): string {
    return __filename;
  }
}
