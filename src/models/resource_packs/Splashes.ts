/** @$id llgava.resource_packs.Splashes */
export class SplashesSchema {
  public splashes: string[];

  /** @TJS-ignore */ get fileName(): string {
    return 'splashes';
  }
  /** @TJS-ignore */ get path(): string {
    return __filename;
  }
  /** @TJS-ignore */ get name(): string {
    return this.constructor.name;
  }

  /** @TJS-ignore */ get fileMatch(): string[] {
    return ['resource_packs/*/splashes.json', 'development_resource_packs/*/splashes.json'];
  }
};
