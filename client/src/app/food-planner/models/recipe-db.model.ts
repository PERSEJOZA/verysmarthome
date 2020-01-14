import {Ingredient} from './ingredient.model';
import {RecipeStep} from './recipe-step.model';
import {Recipe} from './recipe.model';

export class RecipeDb extends Recipe {
  // tslint:disable-next-line: variable-name
  public _id: string;
  // tslint:disable-next-line: variable-name
  public _rev: string;

  public constructor(
    id: string,
    rev: string,
    name: string,
    image: any,
    shortDescription: string,
    timeToCook: number,
    minNumberOfPeople: number,
    tags: string[],
    ingredients: Ingredient[],
    steps: RecipeStep[]
  ) {
    super();
    this._id = id;
    this._rev = rev;
    this.name = name;
    this.image = image;
    this.shortDescription = shortDescription;
    this.timeToCook = timeToCook;
    this.minNumberOfPeople = minNumberOfPeople;
    this.tags = tags;
    this.ingredients = ingredients;
    this.steps = steps;
  }
}
