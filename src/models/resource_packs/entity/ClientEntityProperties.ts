import { Materials } from './properties/Materials';
import { Geometry } from './properties/Geometry';
import { ClientTextures } from './properties/ClientTextures';

export interface ClientEntityProperties {
  /** @TJS-pattern ^(?:(?:(?!minecraft|minecon))+[a-z]*:[a-z_]*)+$ */
  identifier?: string;
  materials?: Materials;
  geometry?: Geometry;
  render_controllers?: string[];
  textures?: ClientTextures;
  scripts?: ClientScripts;
}
