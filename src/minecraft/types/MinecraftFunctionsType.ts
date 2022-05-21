import { EnchantBookForTrading } from '../functions/EnchantBookForTrading';
import { EnchantRandomGear } from '../functions/EnchantRandomGear';
import { EnchantRandomly } from '../functions/EnchantRandomly';
import { EnchantWithLevels } from '../functions/EnchantWithLevels';
import { ExplorationMap } from '../functions/ExplorationMap';
import { FillContainer } from '../functions/FillContainer';
import { FurnaceSmelt } from '../functions/FurnaceSmelt';
import { LootingEnchant } from '../functions/LootingEnchant';
import { RandomAuxValue } from '../functions/RandomAuxValue';
import { RandomBlockState } from '../functions/RandomBlockState';
import { RandomDye } from '../functions/RandomDye';
import { SetActorId } from '../functions/SetActorId';
import { SetBannerDetails } from '../functions/SetBannerDetails';
import { SetBookContents } from '../functions/SetBookContents';
import { SetCount } from '../functions/SetCount';
import { SetDamage } from '../functions/SetDamage';
import { SetData } from '../functions/SetData';
import { SetDataFromColorIndex } from '../functions/SetDataFromColorIndex';
import { SetLore } from '../functions/SetLore';
import { SetName } from '../functions/SetName';
import { SpecificEnchants } from '../functions/SpecificEnchants';
import { TraderMaterialType } from '../functions/TraderMaterialType';

export type MinecraftFunctionsType =
  | EnchantBookForTrading
  | EnchantRandomGear
  | EnchantRandomly
  | EnchantWithLevels
  | ExplorationMap
  | FillContainer
  | FurnaceSmelt
  | LootingEnchant
  | RandomAuxValue
  | RandomBlockState
  | RandomDye
  | SetActorId
  | SetBannerDetails
  | SetBookContents
  | SetCount
  | SetDamage
  | SetData
  | SetDataFromColorIndex
  | SetLore
  | SetName
  | SpecificEnchants
  | TraderMaterialType;
