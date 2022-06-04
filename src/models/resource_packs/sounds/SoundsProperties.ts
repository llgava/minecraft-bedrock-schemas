import { BlockSoundsProperty } from './properties/BlockSoundsProperty';
import { EntitySoundsProperty } from './properties/EntitySoundsProperty';
import { IndividualEventSoundEvents } from './properties/IndividualEventSoundsProperty';
import { InteractiveSoundsProperty } from './properties/InteractiveSoundsProperty';

export interface BlockSounds {
  [property_name: string]: BlockSoundsProperty;
}

export interface EntitySounds {
  [property_name: string]: EntitySoundsProperty;
}

export interface IndividualEventSounds {
  events?: IndividualEventSoundEvents;
}

export interface InteractiveSounds {
  [property_name: string]: InteractiveSoundsProperty;
}
