import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface IsLeashedTo extends MinecraftFilterBase {
  test?: 'is_leashed_to';
  value?: boolean;
}
