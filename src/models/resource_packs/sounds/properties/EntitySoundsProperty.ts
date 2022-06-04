import { MinecraftSound } from '@minecraft/MinecraftSound';
import { MinecraftSoundEvent } from '@minecraft/MinecraftSoundEvent';

export interface EntitySoundsProperty extends MinecraftSound {
  events?: EntitySoundEvents;
}

export interface EntitySoundEvents {
  ambient?: MinecraftSoundEvent;
  hurt?: MinecraftSoundEvent;
  death?: MinecraftSoundEvent;
  step?: MinecraftSoundEvent;
  ['fall.big']?: MinecraftSoundEvent;
  ['fall.small']?: MinecraftSoundEvent;
  splash?: MinecraftSoundEvent;
  ashootttack?: MinecraftSoundEvent;
}
