import { MinecraftTarget } from '@minecraft/MinecraftTarget';

export interface Damage extends MinecraftTarget {
  amount?: number;
  type?: 'all';
}
