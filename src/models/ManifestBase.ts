import { IManifestHeader, IManifestModules } from '../interfaces/Manifest';

export class ManifestBase {
  public header: IManifestHeader;
  public modules: IManifestModules[];
}
