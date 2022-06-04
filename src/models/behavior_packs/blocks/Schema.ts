import { Block } from './Block';

/** @id llgava.behavior_packs.Blocks */
export class BlocksSchema {
  public format_version: string | '1.18.0';
  public 'minecraft:block': Block;

  /** @TJS-ignore */ get fileName(): string {
    return 'blocks_behavior';
  }
  /** @TJS-ignore */ get path(): string {
    return __filename;
  }
  /** @TJS-ignore */ get name(): string {
    return this.constructor.name;
  }

  /** @TJS-ignore */ get fileMatch(): string[] {
    return ['behavior_packs/*/blocks/*.json', 'development_behavior_packs/*/blocks/*.json'];
  }
}