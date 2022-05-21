import { Description } from './Definitions';

export interface RecipeBrewingBehavior {
  description?: Description;
  input?: string;
  output?: string;
  reagent?: string;
  tags?: ['brewing_stand'];
}
