import { MinecraftFurnaceRecipeTags } from '@minecraft/types/MinecraftFurnaceRecipeTags';
import { Description } from './RecipeProperties';

export interface RecipeFurnace {
  description?: Description;
  input?: string;
  output?: string;
  tags?: MinecraftFurnaceRecipeTags[];
}
