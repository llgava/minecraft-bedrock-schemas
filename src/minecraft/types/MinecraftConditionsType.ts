import { EntityProperties } from '../conditions/EntityProperties';
import { HasMarkVariant } from '../conditions/HasMarkVariant';
import { KilledByPlayer } from '../conditions/KilledByPlayer';
import { KilledByPlayerOrPets } from '../conditions/KilledByPlayerOrPets';
import { RandomChanceWithLooting } from '../conditions/RandomChanceWithLooting';
import { RandomDifficultyChance } from '../conditions/RandomDifficultyChance';
import { RandomRegionalDifficultyChance } from '../conditions/RandomRegionalDifficultyChance';
import { RandomChance } from '../conditions/RandomChance';

export type MinecraftConditionsType =
  | EntityProperties
  | HasMarkVariant
  | KilledByPlayer
  | KilledByPlayerOrPets
  | RandomChance
  | RandomChanceWithLooting
  | RandomDifficultyChance
  | RandomRegionalDifficultyChance;
