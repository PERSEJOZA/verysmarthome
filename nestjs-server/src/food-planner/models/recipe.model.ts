import {ApiProperty} from '@nestjs/swagger';

import {Ingredient} from './ingredient.model';
import {RecipeStep} from './recipe-step.model';

export abstract class Recipe {
  @ApiProperty({type: String})
  public name: string;
  @ApiProperty({type: String})
  public image: string;
  @ApiProperty({type: String})
  public shortDescription: string;
  @ApiProperty({type: Number})
  timeToCook: number;
  @ApiProperty({type: Number})
  minNumberOfPeople: number;
  @ApiProperty({type: [String]})
  public tags: [string];
  @ApiProperty({type: Ingredient, isArray: true})
  ingredients: Ingredient[];
  @ApiProperty({type: Ingredient, isArray: true})
  steps: RecipeStep[];
}
