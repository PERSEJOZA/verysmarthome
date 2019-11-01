import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';

import {RecipeDb} from '../models/recipe-db.model';
import {RecipeService} from '../services/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeResolver implements Resolve<RecipeDb> {
  constructor(private recipeService: RecipeService) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<RecipeDb> | Observable<never> {
    const id = route.paramMap.get('id');

    return this.recipeService.getById(id);
  }
}
