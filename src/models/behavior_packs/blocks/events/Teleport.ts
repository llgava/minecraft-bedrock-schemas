import { MinecraftTarget } from '@minecraft/MinecraftTarget';

export interface Teleport extends MinecraftTarget {
  avoid_water?: boolean;
  destination?: [number, number, number];
  land_on_block?: boolean;
  max_range?: [number, number, number];
}
