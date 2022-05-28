import { MinecraftFurnaceRecipeTags } from '@minecraft/types/MinecraftFurnaceRecipeTags';
import { Description } from './Definitions';

export interface RecipeFurnaceBehavior {
  description?: Description;
  input?: string;
  output?: string;
  tags?: MinecraftFurnaceRecipeTags[];
}
