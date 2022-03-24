import { RecipeKey } from './Components/RecipeKey';
import { RecipeResult } from './Components/RecipeResult';
import { Description } from './Definitions';

export interface RecipeShapeBehavior {
  description?: Description;
  tags?: ['crafting_table'];

  /** @TJS-pattern ^[a-zA-Z0-9 !@#$%&]{3}$ */
  pattern?: string[];

  key?: RecipeKey;
  result?: RecipeResult;
  group?: string;
  priority?: number;
}
