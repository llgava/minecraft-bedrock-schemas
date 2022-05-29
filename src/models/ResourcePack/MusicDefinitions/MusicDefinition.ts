import { MinecraftMusicEvents } from '@minecraft/types/MinecraftMusicEvents';

export interface MusicDefinition {
  event_name?: MinecraftMusicEvents;
  max_delay?: number;
  min_delay?: number;
}
