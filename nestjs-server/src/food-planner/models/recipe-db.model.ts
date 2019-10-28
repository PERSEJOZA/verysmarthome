import {ApiModelProperty} from '@nestjs/swagger';

import {Recipe} from './recipe.model';

export class RecipeDb extends Recipe {
  @ApiModelProperty()
  // tslint:disable-next-line: variable-name
  public _id: string;
  @ApiModelProperty()
  // tslint:disable-next-line: variable-name
  public _rev: string;
}
