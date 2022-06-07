import { SchemaBase } from 'types/SchemaBase';
import { Capabilities } from './properties/Capabilities';
import { Dependencies } from './properties/Dependencies';
import { Header } from './properties/Header';
import { Metadata } from './properties/Metadata';
import { Modules } from './properties/Modules';

/** @id llgava.global.Manifest */
export class ManifestSchema implements SchemaBase {
  public format_version: 2;
  public header: Header;
  public modules: Modules[];
  public dependencies?: Dependencies[];
  public metadata?: Metadata;
  public capabilities?: Capabilities;

  /** @ignore */
  get path(): string {
    return __filename;
  }
}
