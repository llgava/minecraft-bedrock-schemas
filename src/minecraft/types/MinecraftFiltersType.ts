import { ClockTime } from '../filters/ClockTime';
import { DistanceToNearestPlayer } from '../filters/DistanceToNearestPlayer';
import { HasAbility } from '../filters/HasAbility';
import { HasBiomeTag } from '../filters/HasBiomeTag';
import { HasComponent } from '../filters/HasComponent';
import { HasContainerOpen } from '../filters/HasContainerOpen';
import { HasDamage } from '../filters/HasDamage';
import { HasEquipment } from '../filters/HasEquipment';
import { HasMobEffect } from '../filters/HasMobEffect';
import { HasNametag } from '../filters/HasNametag';
import { HasRangedWeapon } from '../filters/HasRangedWeapon';
import { HasTag } from '../filters/HasTag';
import { HasTarget } from '../filters/HasTarget';
import { HasTradeSupply } from '../filters/HasTradeSupply';
import { HourlyClockTime } from '../filters/HourlyClockTime';
import { InactivityTimer } from '../filters/InactivityTimer';
import { InBlock } from '../filters/InBlock';
import { InCaravan } from '../filters/InCaravan';
import { InClouds } from '../filters/InClouds';
import { InContactWithWater } from '../filters/InContactWithWater';
import { InLava } from '../filters/InLava';
import { InNether } from '../filters/InNether';
import { InWater } from '../filters/InWater';
import { InWaterOrRain } from '../filters/InWaterOrRain';
import { IsAltitude } from '../filters/IsAltitude';
import { IsAvoidingMobs } from '../filters/IsAvoidingMobs';
import { IsBiome } from '../filters/IsBiome';
import { IsBlock } from '../filters/IsBlock';
import { IsBrightness } from '../filters/IsBrightness';
import { IsClimbing } from '../filters/IsClimbing';
import { IsColor } from '../filters/IsColor';
import { IsDaytime } from '../filters/IsDaytime';
import { IsDifficulty } from '../filters/IsDifficulty';
import { IsFamily } from '../filters/IsFamily';
import { IsGameRule } from '../filters/IsGameRule';
import { IsHumid } from '../filters/IsHumid';
import { IsImmobile } from '../filters/IsImmobile';
import { IsInVillage } from '../filters/IsInVillage';
import { IsLeashed } from '../filters/IsLeashed';
import { IsLeashedTo } from '../filters/IsLeashedTo';
import { IsMarkVariant } from '../filters/IsMarkVariant';
import { IsMissingHealth } from '../filters/IsMissingHealth';
import { IsMoving } from '../filters/IsMoving';
import { IsOwner } from '../filters/IsOwner';
import { IsPersistent } from '../filters/IsPersistent';
import { IsRiding } from '../filters/IsRiding';
import { IsSkingId } from '../filters/IsSkingId';
import { IsSleeping } from '../filters/IsSleeping';
import { IsSneaking } from '../filters/IsSneaking';
import { IsSnowCovered } from '../filters/IsSnowCovered';
import { IsTarget } from '../filters/IsTarget';
import { IsTemperatureType } from '../filters/IsTemperatureType';
import { IsTemperatureValue } from '../filters/IsTemperatureValue';
import { IsUnderground } from '../filters/IsUnderground';
import { IsUnderwater } from '../filters/IsUnderwater';
import { IsVariant } from '../filters/IsVariant';
import { IsVisible } from '../filters/IsVisible';
import { IsWeather } from '../filters/IsWeather';
import { LightLevel } from '../filters/LightLevel';
import { MoonIntensity } from '../filters/MoonIntensity';
import { MoonPhase } from '../filters/MoonPhase';
import { OnGround } from '../filters/OnGround';
import { OnLadder } from '../filters/OnLadder';
import { RandomChance } from '../filters/RandomChance';
import { RiderCount } from '../filters/RiderCount';
import { SurfaceMob } from '../filters/SurfaceMob';
import { Trusts } from '../filters/Trusts';
import { Weather } from '../filters/Weather';
import { WeatherAtPosition } from '../filters/WeatherAtPosition';

export type MinecraftFiltersType =
  | ClockTime
  | DistanceToNearestPlayer
  | HasAbility
  | HasBiomeTag
  | HasComponent
  | HasContainerOpen
  | HasDamage
  | HasEquipment
  | HasMobEffect
  | HasNametag
  | HasRangedWeapon
  | HasTag
  | HasTarget
  | HasTradeSupply
  | HourlyClockTime
  | InactivityTimer
  | InBlock
  | InCaravan
  | InClouds
  | InContactWithWater
  | InLava
  | InNether
  | InWater
  | InWaterOrRain
  | IsAltitude
  | IsAvoidingMobs
  | IsBiome
  | IsBlock
  | IsBrightness
  | IsClimbing
  | IsColor
  | IsDaytime
  | IsDifficulty
  | IsFamily
  | IsGameRule
  | IsHumid
  | IsImmobile
  | IsInVillage
  | IsLeashed
  | IsLeashedTo
  | IsMarkVariant
  | IsMissingHealth
  | IsMoving
  | IsOwner
  | IsPersistent
  | IsRiding
  | IsSkingId
  | IsSleeping
  | IsSneaking
  | IsSnowCovered
  | IsTarget
  | IsTemperatureType
  | IsTemperatureValue
  | IsUnderground
  | IsUnderwater
  | IsVariant
  | IsVisible
  | IsWeather
  | LightLevel
  | MoonIntensity
  | MoonPhase
  | OnGround
  | OnLadder
  | RandomChance
  | RiderCount
  | SurfaceMob
  | Trusts
  | Weather
  | WeatherAtPosition;
