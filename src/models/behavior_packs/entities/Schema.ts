import { Entity } from './Entity';

/** @id llgava.behavior_packs.Entities */
export class EntitiesSchema {
  public format_version: string | '1.18.0';
  public 'minecraft:entity': Entity;

  /** @TJS-ignore */ get fileName(): string {
    return 'entities_behavior';
  }
  /** @TJS-ignore */ get path(): string {
    return __filename;
  }
  /** @TJS-ignore */ get name(): string {
    return this.constructor.name;
  }

  /** @TJS-ignore */ get fileMatch(): string[] {
    return ['behavior_packs/*/entities/*.json', 'development_behavior_packs/*/entities/*.json'];
  }
}
