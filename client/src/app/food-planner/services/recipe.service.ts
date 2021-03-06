import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {ConfigurationService} from '../../services/configuration.service';
import {DbSuccessResponse} from '../models/dbSuccessResponse.model';
import {RecipeDb} from '../models/recipe-db.model';
import {Recipe} from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private http: HttpClient, private configuration: ConfigurationService) {}

  getById(id: string): Observable<RecipeDb> {
    return this.http.get<RecipeDb>(`${this.configuration.nestJSServerUrl}/recipes/${id}`);
  }

  getAll(): Observable<RecipeDb[]> {
    return this.http.get<RecipeDb[]>(`${this.configuration.nestJSServerUrl}/recipes`);
  }

  addRecipe(recipe: Recipe): Observable<DbSuccessResponse> {
    return this.http.post<DbSuccessResponse>(`${this.configuration.nestJSServerUrl}/recipes`, recipe);
  }

  updateRecipe(recipe: RecipeDb): Observable<DbSuccessResponse> {
    return this.http.put<DbSuccessResponse>(`${this.configuration.nestJSServerUrl}/recipes`, recipe);
  }

  deleteRecipe(id: string): Observable<DbSuccessResponse> {
    return this.http.get<DbSuccessResponse>(`${this.configuration.nestJSServerUrl}/recipes/${id}`);
  }
}
