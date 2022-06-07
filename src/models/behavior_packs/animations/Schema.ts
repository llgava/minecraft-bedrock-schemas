import { SchemaBase } from 'types/SchemaBase';
import { Animation } from './Animation';

/** @id llgava.behavior_packs.Animations */
export class AnimationsSchema implements SchemaBase {
  public format_version: string | '1.10.0';
  public 'animations': Animation;

  /** @ignore */
  get path(): string {
    return __filename;
  }
}
