import { EmptyType } from '../entries/EmptyType';
import { ItemType } from '../entries/ItemType';
import { LootTableType } from '../entries/LootTableType';

export type MinecraftEntriesType =
  | EmptyType
  | ItemType
  | LootTableType;
