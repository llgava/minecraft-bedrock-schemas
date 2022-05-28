import { LootTablePool } from '@models/BehaviorPack/LootTables/LootTableProperties';
import { MinecraftFunctionsType } from '@minecraft/types/MinecraftFunctionsType';

export interface ItemType {
  type?: 'item';
  name?: string;
  count?: number;
  weight?: number;
  quality?: number;
  pools?: LootTablePool[];
  functions?: MinecraftFunctionsType[];
}
