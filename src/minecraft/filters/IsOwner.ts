import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface IsOwner extends MinecraftFilterBase {
  test?: 'is_owner';
  value?: boolean;
}
