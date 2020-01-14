import {Ingredient} from './ingredient.model';
import {RecipeStep} from './recipe-step.model';

export abstract class Recipe {
  public name: string; // equal to id
  public image: string;
  public shortDescription: string;
  public timeToCook: number;
  public minNumberOfPeople: number;
  public tags: string[];
  public ingredients: Ingredient[];
  public steps: RecipeStep[];
}
