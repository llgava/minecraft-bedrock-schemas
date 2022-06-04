import { MinecraftSound } from '@minecraft/MinecraftSound';
import { MinecraftSoundEvent } from '@minecraft/MinecraftSoundEvent';

export interface BlockSoundsProperty extends MinecraftSound {
  events?: BlockSoundEvents;
}

export interface BlockSoundEvents {
  default?: MinecraftSoundEvent;
  break?: MinecraftSoundEvent;
  hit?: MinecraftSoundEvent;
  place?: MinecraftSoundEvent;
  ['item.use.on']?: MinecraftSoundEvent;
  ['power.off']?: MinecraftSoundEvent;
  ['power.on']?: MinecraftSoundEvent;
}
