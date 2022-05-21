import { OtherWithFamilies } from '../filters/OtherWithFamilies';
import { PlayerWithInstabuild } from '../filters/PlayerWithInstabuild';
import { WithoutComponents } from '../filters/WithoutComponents';
import { MinecraftFiltersOf } from '../MinecraftFilterOf';
import { MinecraftFiltersType } from './MinecraftFiltersType';

export type MinecraftFilters =
  | MinecraftFiltersOf
  | MinecraftFiltersType
  | PlayerWithInstabuild
  | OtherWithFamilies
  | WithoutComponents;
