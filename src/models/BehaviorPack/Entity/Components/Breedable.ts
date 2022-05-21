import { MinecraftFilters } from '@minecraft/types/MinecraftFilters';

export interface Breedable {
  allow_sitting?: boolean;
  blend_attributes?: boolean;
  breed_cooldown?: number;
  breed_items?: string[];
  breeds_with?: BreedsWith[];
  causes_pregnancy?: boolean;
  deny_parents_variant?: DenyParentsVariant;
  environment_requirements?: EnvironmentRequirements;
  extra_baby_chance?: number;
  inherit_tamed?: boolean;
  love_filters?: MinecraftFilters;
  mutation_factor?: MutationFactor;
  require_full_health?: boolean;
  require_tame?: boolean;
  transform_to_item?: string;
}

interface BreedsWith {
  baby_type?: string;
  breed_event?: string;
  mate_type?: string;
}

interface DenyParentsVariant {
  chance?: number;
  max_variant?: number;
  min_variant?: number;
}

interface EnvironmentRequirements {
  count?: number;
  radius?: number;
}

interface MutationFactor {
  color?: number;
  extra_variant?: number;
  variant?: number;
}
