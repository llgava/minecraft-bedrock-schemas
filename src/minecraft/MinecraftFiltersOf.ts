import { MinecraftFiltersType } from './types/MinecraftFiltersType';

export interface MinecraftFiltersOf {
  any_of?: MinecraftFiltersType[];
  all_of?: MinecraftFiltersType[];
  none_of?: MinecraftFiltersType[];

  /**
   * @deprecated
   * @deprecationMessage Use `has_ability` filter  with value `instabuild` instead.
   */
  player_with_instabuild?: boolean;

  /**
   * @deprecated
   * @deprecationMessage Use `is_family` filter instead.
   */
  other_with_families?: string;

  /**
   * @deprecated
   * @deprecationMessage Use `has_component` filter instead.
   */
  without_components?: string | string[];
}
