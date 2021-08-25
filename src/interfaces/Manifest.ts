

export interface IManifestHeader extends IUUID {
  description: string;
  name: string;
  version: [number, number, number];
  min_engine_version: [number, number, number];
}

export interface IManifestModules extends IUUID {
  type: 'data' | 'resources';
  version: [number, number, number];
}

export interface IBehaviorManifestDependency extends IUUID {
  version: [number, number, number];
}

interface IUUID {
  /** @TJS-pattern ^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89AB][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$ */
  uuid: string;
}
