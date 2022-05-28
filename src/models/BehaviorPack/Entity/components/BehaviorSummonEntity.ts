import { MinecraftFilters } from '@minecraft/types/MinecraftFilters';
import { MinecraftShapes } from '@minecraft/types/MinecraftShapes';
import { MinecraftSubjects } from '@minecraft/types/MinecraftSubjects';

export interface BehaviorSummonEntity {
  summon_choices?: SummonChoices[];
}

interface SummonChoices {
  cast_duration?: number;
  cooldown_time?: number;
  do_casting?: boolean;
  filters?: MinecraftFilters;
  max_activation_range?: number;
  min_activation_range?: number;
  particle_color?: number;
  sequence?: Sequence[];
  start_sound_event?: string;
  weight?: number;
}

interface Sequence {
  base_delay?: number;
  delay_per_summon?: number;
  entity_lifespan?: number;
  entity_type?: string;
  num_entities_spawned?: number;
  shape?: MinecraftShapes;
  size?: number;
  sound_event?: string;
  summon_cap?: number;
  summon_cap_radius?: number;
  target?: MinecraftSubjects;
}
