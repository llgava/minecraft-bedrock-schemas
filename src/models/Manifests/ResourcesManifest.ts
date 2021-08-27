// tslint:disable: align
import { IManifestHeader, IManifestModules } from '../../interfaces/Manifest';

class ResourcesManifest {
  public format_version: 2;
  public header: IManifestHeader;
  public modules: IManifestModules[];

  /** @TJS-ignore */ get schemaName(): string { return 'rp_manifest'; }
  /** @TJS-ignore */ get path(): string { return __filename; }
  /** @TJS-ignore */ get name(): string { return this.constructor.name; }
}

export default new ResourcesManifest();
