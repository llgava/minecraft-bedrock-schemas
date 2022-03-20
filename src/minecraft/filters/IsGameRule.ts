import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface IsGameRule extends MinecraftFilterBase {
  test?: 'is_game_rule';
  domain?: string;
  value?: boolean;
}
