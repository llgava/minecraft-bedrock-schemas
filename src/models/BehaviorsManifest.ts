import { IBehaviorManifestDependency } from '../interfaces/Manifest';
import { ManifestBase } from './ManifestBase';

class BehaviorsManifest extends ManifestBase {
  public format_version: 2;
  public dependencies?: IBehaviorManifestDependency[];
}

export default new BehaviorsManifest();
