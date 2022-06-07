import { SchemaBase } from 'types/SchemaBase';
import { AnimationController } from './AnimationController';

/** @id llgava.behavior_packs.AnimationControllers */
export class AnimationControllersSchema implements SchemaBase {
  public format_version: string | '1.10.0';
  public 'animation_controllers': AnimationController;

  /** @ignore */
  get path(): string {
    return __filename;
  }
}
