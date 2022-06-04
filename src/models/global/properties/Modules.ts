import { MinecraftManifests } from '@minecraft/types/MinecraftManifests';
import { UUID } from '../UUID';

export interface Modules {
  description?: string;
  type: MinecraftManifests;
  version: [number, number, number];
  uuid: UUID;
}
