import { MinecraftFilterBase } from '../MinecraftFilterBase';
import { MinecraftAbilities } from '../types/MinecraftAbilities';

export interface HasAbility extends MinecraftFilterBase {
  value?: MinecraftAbilities;
}
