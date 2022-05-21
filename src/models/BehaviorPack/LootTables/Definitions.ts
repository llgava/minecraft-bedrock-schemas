import { MinecraftConditionsType } from '@minecraft/types/MinecraftConditionsType';
import { MinecraftEntriesType } from '@minecraft/types/MinecraftEntriesType';

export interface LootTablePool {
  rools?: number;
  conditions?: MinecraftConditionsType[];
  entries?: MinecraftEntriesType[];
}
