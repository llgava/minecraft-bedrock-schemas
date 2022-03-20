import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface IsSkingId extends MinecraftFilterBase {
  test?: 'is_skin_id';
  value?: number;
}
