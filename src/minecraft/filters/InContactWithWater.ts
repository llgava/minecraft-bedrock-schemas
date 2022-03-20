import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface InContactWithWater extends MinecraftFilterBase {
  test?: 'in_contact_with_water';
  value?: boolean;
}
