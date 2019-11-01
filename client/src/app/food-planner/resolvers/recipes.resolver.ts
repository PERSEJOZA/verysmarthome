import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';

import {RecipeDb} from '../models/recipe-db.model';
import {RecipeService} from '../services/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesResolver implements Resolve<RecipeDb[]> {
  constructor(private recipeService: RecipeService) {}

  public resolve(): Observable<RecipeDb[]> | Observable<never> {
    return this.recipeService.getAll();
  }
}
