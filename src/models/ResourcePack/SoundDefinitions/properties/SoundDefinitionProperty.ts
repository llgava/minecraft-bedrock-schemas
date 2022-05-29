import { MinecraftSound } from '@minecraft/MinecraftSound';

export interface SoundDefinitionProperty extends MinecraftSound {
  is3D?: boolean;
  name?: string;
  weight?: number;
  load_on_low_memory?: boolean;
  stream?: boolean;
}
