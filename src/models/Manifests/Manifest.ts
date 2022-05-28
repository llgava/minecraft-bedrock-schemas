import { Capabilities } from './Components/Capabilities';
import { Dependencies } from './Components/Dependencies';
import { Header } from './Components/Header';
import { Metadata } from './Components/Metadata';
import { Modules } from './Components/Modules';

export class Manifest {
  public format_version: 2;
  public header: Header;
  public modules: Modules[];
  public dependencies?: Dependencies[];
  public metadata?: Metadata;
  public capabilities?: Capabilities;

  /** @TJS-ignore */ get fileName(): string {
    return 'manifest';
  }
  /** @TJS-ignore */ get path(): string {
    return __filename;
  }
  /** @TJS-ignore */ get name(): string {
    return this.constructor.name;
  }

  /** @TJS-ignore */
  get fileMatch(): string[] {
    return [
      'behavior_packs/*/manifest.json',
      'resource_packs/*/manifest.json',
      'development_behavior_packs/*/manifest.json',
      'development_resource_packs/*/manifest.json',
    ];
  }
}
