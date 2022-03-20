import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface IsMoving extends MinecraftFilterBase {
  test?: 'is_moving';
  value?: boolean;
}
