import { RecipeBrewing } from './RecipeBrewing';
import { RecipeFurnace } from './RecipeFurnace';
import { RecipeShape } from './RecipeShape';

/** @$id llgava.behavior_packs.Recipes */
export class RecipesSchema {
  public format_version: string | '1.18.10';
  public ['minecraft:recipe_shaped']?: RecipeShape;
  public ['minecraft:recipe_shapeless']?: RecipeShape;
  public ['minecraft:recipe_brewing_container']?: RecipeBrewing;
  public ['minecraft:recipe_brewing_mix']?: RecipeBrewing;
  public ['minecraft:recipe_furnace']?: RecipeFurnace;

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
