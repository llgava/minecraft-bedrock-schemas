import { MinecraftFilters } from '@minecraft/types/MinecraftFilters';
import { MinecraftSubjects } from '@minecraft/types/MinecraftSubjects';

export interface Interact {
  add_items?: AddItems;
  cooldown?: number;
  cooldown_after_being_attacked?: number;
  health_amount?: number;
  hurt_item?: number;
  interact_text?: string;
  on_interact?: OnInteract;
  particle_on_start?: ParticleOnStart;
  play_sounds?: string;
  spawn_entities?: string[] | string;
  spawn_items?: AddItems;
  swing?: boolean;
  transform_to_item?: string;
  use_item?: boolean;
}

interface AddItems {
  table?: string;
}

interface OnInteract {
  filters?: MinecraftFilters;
  event?: string;
  target?: MinecraftSubjects;
}

interface ParticleOnStart {
  particle_type?: string;
  particle_y_offset?: number;
  particle_offset_towards_interactor?: boolean;
}

