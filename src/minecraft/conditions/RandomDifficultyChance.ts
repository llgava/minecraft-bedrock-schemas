export interface RandomDifficultyChance {
  condition?: 'random_difficulty_chance';
  default_chance?: number;
  peaceful?: number;
  easy?: number;
  normal?: number;
  hard?: number;
}
