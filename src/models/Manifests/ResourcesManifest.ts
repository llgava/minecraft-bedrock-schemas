// tslint:disable: align
import { IManifestHeader, IManifestModules } from '../../interfaces/Manifest';
import { SchemaCategories } from '../../interfaces/Schema';

class ResourcesManifest {
  public format_version: 2;
  public header: IManifestHeader;
  public modules: IManifestModules[];

  /** @TJS-ignore */ private _schemaName: string = 'rp_manifest';
  /** @TJS-ignore */ private _category: SchemaCategories = 'Manifests';
  /** @TJS-ignore */ get schemaName(): string { return this._schemaName; }
  /** @TJS-ignore */ get category(): SchemaCategories { return this._category; }
}

export default new ResourcesManifest();
