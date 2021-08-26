// tslint:disable: align
import { IBehaviorManifestDependency, IManifestHeader, IManifestModules } from '../../interfaces/Manifest';
import { SchemaCategories } from '../../interfaces/Schema';

class BehaviorsManifest {
  public format_version: 2;
  public header: IManifestHeader;
  public modules: IManifestModules[];
  public dependencies?: IBehaviorManifestDependency[];

  /** @TJS-ignore */ private _schemaName: string = 'bp_manifest';
  /** @TJS-ignore */ private _category: SchemaCategories = 'Manifests';
  /** @TJS-ignore */ get schemaName(): string { return this._schemaName; }
  /** @TJS-ignore */ get category(): SchemaCategories { return this._category; }
}

export default new BehaviorsManifest();
