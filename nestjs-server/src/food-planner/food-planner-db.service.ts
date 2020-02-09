import {Injectable} from '@nestjs/common';
import {DocumentDestroyResponse, DocumentInsertResponse, MangoResponse} from 'nano';

import {CouchDBConnectorService} from '../db/couch-db-connector/couch-db-connector.service';
import {LoggerService} from '../logger/logger/logger.service';
import {RecipeDb} from './models/recipe-db.model';
import {Recipe} from './models/recipe.model';

@Injectable()
export class FoodPlannerDbService {
  constructor(private couchConnection: CouchDBConnectorService, private readonly logger: LoggerService) {
    this.logger.setContext(this.constructor.name);
  }

  public async addRecipe(document: Recipe, photo: any): Promise<DocumentInsertResponse> {
    this.logger.debug('<' + this.addRecipe.name);

    const documentInsertResponse: DocumentInsertResponse = await this.couchConnection.recipeDb
      .insert(document)
      .catch((error: Error) => {
        this.logger.debug('=' + this.addRecipe.name + 'ERROR!!!', JSON.stringify(error));
        throw error;
      });

    this.logger.debug('<' + this.addRecipe.name);
    return documentInsertResponse;
  }

  public async updateRecipe(document: RecipeDb, photo?: any): Promise<DocumentInsertResponse> {
    this.logger.debug('<' + this.updateRecipe.name);

    const documentInsertResponse: DocumentInsertResponse = await this.couchConnection.recipeDb.multipart
      .insert(document, [{name: 'ímage.png', data: photo, content_type: 'ímage/png'}])
      .catch((error: Error) => {
        this.logger.debug('=' + this.updateRecipe.name + 'ERROR!!!', JSON.stringify(error));
        throw error;
      });

    this.logger.debug('<' + this.updateRecipe.name);
    return documentInsertResponse;
  }

  public async deleteRecipe(document: RecipeDb): Promise<DocumentDestroyResponse> {
    this.logger.debug('<' + this.deleteRecipe.name);

    const documentDestroyResponse: DocumentDestroyResponse = await this.couchConnection.recipeDb
      .destroy(document._id, document._rev)
      .catch((error: Error) => {
        this.logger.debug('=' + this.deleteRecipe.name + 'ERROR!!!', JSON.stringify(error));
        throw error;
      });

    this.logger.debug('<' + this.deleteRecipe.name);
    return documentDestroyResponse;
  }

  public async getRecipeById(id: string): Promise<RecipeDb> {
    this.logger.debug('<' + this.getRecipeById.name);

    const recipe: RecipeDb = await this.couchConnection.recipeDb.get(id).catch((error: Error) => {
      this.logger.debug('=' + this.getRecipeById.name + 'ERROR!!!', JSON.stringify(error));
      throw error;
    });

    this.logger.debug('<' + this.updateRecipe.name);
    return recipe;
  }

  public async getAllRecipes(): Promise<RecipeDb[]> {
    this.logger.debug('<' + this.getAllRecipes.name);
    const query = {selector: {}};

    // TODO: replace all to something more sweet
    const recipes: MangoResponse<RecipeDb> = await this.couchConnection.recipeDb.find(query).catch((error: Error) => {
      this.logger.debug('=' + this.getAllRecipes.name + 'ERROR!!!', JSON.stringify(error));
      throw error;
    });

    this.logger.debug('<' + this.getAllRecipes.name);
    return recipes.docs;
  }
}
