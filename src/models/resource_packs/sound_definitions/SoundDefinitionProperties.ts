import { MinecraftSoundCategories } from '@minecraft/types/MinecraftSoundCategories';
import { SoundDefinitionProperty } from './properties/SoundDefinitionProperty';

export interface SoundDefinitionProperties {
  category?: MinecraftSoundCategories;
  sounds?: SoundDefinitionProperty[];
  max_distance?: number;
  __use_legacy_max_distance?: boolean;
}
