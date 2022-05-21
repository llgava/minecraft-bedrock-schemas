import { MinecraftFilters } from '@minecraft/types/MinecraftFilters';

export interface Trail {
  block_type?: string;
  spawn_filter?: MinecraftFilters;
  spawn_offset: [number, number, number];
}
