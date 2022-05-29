import { MinecraftSound } from '@minecraft/MinecraftSound';
import { MinecraftSoundEvent } from '@minecraft/MinecraftSoundEvent';

export interface InteractiveSoundsProperty extends MinecraftSound {
  events?: InteractiveSoundEvents;
}

export interface InteractiveSoundEvents {
  default?: MinecraftSoundEvent;
  fall?: MinecraftSoundEvent;
  jump?: MinecraftSoundEvent;
  land?: MinecraftSoundEvent;
  step?: MinecraftSoundEvent;
}
