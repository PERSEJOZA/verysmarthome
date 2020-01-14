import {ApiModelProperty} from '@nestjs/swagger';

import {Ingredient} from './ingredient.model';
import {RecipeStep} from './recipe-step.model';

export abstract class Recipe {
  @ApiModelProperty({type: String})
  public name: string;
  @ApiModelProperty({type: String})
  public image: string;
  @ApiModelProperty({type: String})
  public shortDescription: string;
  @ApiModelProperty({type: Number})
  timeToCook: number;
  @ApiModelProperty({type: Number})
  minNumberOfPeople: number;
  @ApiModelProperty({type: [String]})
  public tags: [string];
  @ApiModelProperty({type: Ingredient, isArray: true})
  ingredients: Ingredient[];
  @ApiModelProperty({type: Ingredient, isArray: true})
  steps: RecipeStep[];
}
