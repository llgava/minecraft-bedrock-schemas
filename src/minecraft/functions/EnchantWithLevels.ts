export interface EnchantWithLevels {
  function?: 'enchant_with_levels';
  treasure?: boolean;
  levels?: Levels;
}

interface Levels {
  max?: number;
  min?: number;
}
