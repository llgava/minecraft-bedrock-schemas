import { RecipeKey } from './properties/RecipeKey';
import { RecipeResult } from './properties/RecipeResult';
import { Description } from './RecipeProperties';

export interface RecipeShape {
  description?: Description;
  tags?: ['crafting_table'];

  /** @pattern ^[a-zA-Z0-9 !@#$%&]{3}$ */
  pattern?: string[];

  key?: RecipeKey;
  result?: RecipeResult;
  group?: string;
  priority?: number;
}
