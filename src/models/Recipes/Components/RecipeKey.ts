import { MinecraftRecipeItemProperties } from '../../../minecraft/MinecraftRecipeItemProperties';

export interface RecipeKey {
  /** @maxLength 1 */
  [property_name: string]: MinecraftRecipeItemProperties;
}
