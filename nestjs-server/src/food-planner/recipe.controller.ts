import {BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put} from '@nestjs/common';
import {ApiBearerAuth, ApiUseTags} from '@nestjs/swagger';
import {DocumentDestroyResponse, DocumentInsertResponse} from 'nano';

import {FoodPlannerDbService} from './food-planner-db.service';
import {RecipeDb} from './models/recipe-db.model';
import {Recipe} from './models/recipe.model';

@ApiUseTags('recipes')
@ApiBearerAuth()
@Controller('recipes')
export class RecipeController {
  constructor(private foodPlannerDbService: FoodPlannerDbService) {}

  @Post('')
  async addRecipe(@Body() recipe: Recipe): Promise<DocumentInsertResponse> {
    return await this.foodPlannerDbService.addRecipe(recipe, recipe.image).catch((error: Error) => {
      throw new BadRequestException(this.addRecipe.name + '=ERROR', JSON.stringify(error));
    });
  }

  @Put('')
  async updateRecipe(@Body() recipe: RecipeDb): Promise<DocumentInsertResponse> {
    return await this.foodPlannerDbService.updateRecipe(recipe).catch((error: Error) => {
      throw new BadRequestException(this.updateRecipe.name + '=ERROR', JSON.stringify(error));
    });
  }

  @Delete('')
  async deleteRecipe(@Body() recipe: RecipeDb): Promise<DocumentDestroyResponse> {
    return await this.foodPlannerDbService.deleteRecipe(recipe).catch((error: Error) => {
      throw new BadRequestException(this.deleteRecipe.name + '=ERROR', JSON.stringify(error));
    });
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<RecipeDb> {
    return await this.foodPlannerDbService.getRecipeById(id).catch((error: Error) => {
      throw new NotFoundException(this.getById.name + '=ERROR', JSON.stringify(error));
    });
  }

  @Get('')
  async getAll(): Promise<RecipeDb[]> {
    return await this.foodPlannerDbService.getAllRecipes().catch((error: Error) => {
      throw new NotFoundException(this.getAll.name + '=ERROR', JSON.stringify(error));
    });
  }
}
