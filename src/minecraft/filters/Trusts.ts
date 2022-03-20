import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface Trusts extends MinecraftFilterBase {
  test?: 'trusts';
  value?: boolean;
}
