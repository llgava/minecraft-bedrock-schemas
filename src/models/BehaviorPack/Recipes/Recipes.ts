import { RecipeBrewingBehavior } from './RecipeBrewingBehavior';
import { RecipeFurnaceBehavior } from './RecipeFurnaceBehavior';
import { RecipeShapeBehavior } from './RecipeShapeBehavior';

export class Recipes {
  public format_version: string | '1.18.10';
  public ['minecraft:recipe_shaped']?: RecipeShapeBehavior;
  public ['minecraft:recipe_shapeless']?: RecipeShapeBehavior;
  public ['minecraft:recipe_brewing_container']?: RecipeBrewingBehavior;
  public ['minecraft:recipe_brewing_mix']?: RecipeBrewingBehavior;
  public ['minecraft:recipe_furnace']?: RecipeFurnaceBehavior;

  /** @TJS-ignore */ get fileName(): string {
    return 'recipe';
  }
  /** @TJS-ignore */ get path(): string {
    return __filename;
  }
  /** @TJS-ignore */ get name(): string {
    return this.constructor.name;
  }

  /** @TJS-ignore */
  get fileMatch(): string[] {
    return [
      'behavior_packs/*/recipes/*.json',
      'development_behavior_packs/*/recipes/*.json',
    ];
  }
}
