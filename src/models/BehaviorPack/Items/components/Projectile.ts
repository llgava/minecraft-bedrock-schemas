import { MinecraftEntities } from '@minecraft/types/MinecraftEntities';

export interface Projectile {
  projectile_entity?: MinecraftEntities | string;
  minimum_critical_power?: number;
}
