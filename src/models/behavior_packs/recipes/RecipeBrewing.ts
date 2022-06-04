import { Description } from './RecipeProperties';

export interface RecipeBrewing {
  description?: Description;
  input?: string;
  output?: string;
  reagent?: string;
  tags?: ['brewing_stand'];
}
