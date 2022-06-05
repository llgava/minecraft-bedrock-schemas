import { Materials } from './properties/Materials';
import { Geometry } from './properties/Geometry';
import { Animations } from './properties/Animations';
import { SpawnEgg } from './properties/SpawnEgg';
import { SoundEffects } from './properties/SoundEffects';
import { RenderController } from './properties/RenderController';
import { ParticleEmitters } from './properties/ParticleEmitters';
import { ParticleEffects } from './properties/ParticleEffects';
import { ClientTextures } from './properties/ClientTextures';
import { ClientScripts } from './properties/ClientScripts';

export interface ClientEntityProperties {
  /** @pattern ^(?:(?:(?!minecraft|minecon))+[a-z]*:[a-z_]*)+$ */
  identifier?: string;

  render_controllers?: RenderController[];
  enable_attachables?: boolean;
  hide_armor?: boolean;
  min_engine_version?: string;
  sound_effects?: SoundEffects;
  particle_emitters?: ParticleEmitters;
  queryable_geometry?: string;
  materials?: Materials;
  geometry?: Geometry;
  particle_effects?: ParticleEffects;
  textures?: ClientTextures;
  animations?: Animations;
  scripts?: ClientScripts;
  spawn_egg?: SpawnEgg;
}
