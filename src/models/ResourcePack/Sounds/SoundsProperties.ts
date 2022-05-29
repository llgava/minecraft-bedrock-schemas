import { BlockSoundsProperty } from './properties/BlockSoundsProperty';
import { EntitySoundsProperty } from './properties/EntitySoundsProperty';
import { IndividualEventSoundEvents } from './properties/IndividualEventSoundsProperty';
import { InteractiveSoundsProperty } from './properties/InteractiveSoundsProperty';

export interface BlockSounds {
  [key: string]: BlockSoundsProperty;
}

export interface EntitySounds {
  [key: string]: EntitySoundsProperty;
}

export interface IndividualEventSounds {
  events?: IndividualEventSoundEvents;
}

export interface InteractiveSounds {
  [key: string]: InteractiveSoundsProperty;
}
