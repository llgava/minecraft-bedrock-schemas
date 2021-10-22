// tslint:disable: align
import { IBehaviorManifestDependency, IManifestHeader, IManifestModules } from '../../interfaces/IManifest';

class BehaviorsManifest {
  public format_version: 2;
  public header: IManifestHeader;
  public modules: IManifestModules[];
  public dependencies?: IBehaviorManifestDependency[];

  /** @TJS-ignore */ get schemaName(): string { return 'manifest_behavior'; }
  /** @TJS-ignore */ get path(): string { return __filename; }
  /** @TJS-ignore */ get name(): string { return this.constructor.name; }
}

export default new BehaviorsManifest();
