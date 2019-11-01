import {Recipe} from './recipe.model';

export class RecipeDb extends Recipe {
  // tslint:disable-next-line: variable-name
  public _id: string;
  // tslint:disable-next-line: variable-name
  public _rev: string;
}
