import {ApiProperty} from '@nestjs/swagger';

import {Recipe} from './recipe.model';

export class RecipeDb extends Recipe {
  @ApiProperty()
  // tslint:disable-next-line: variable-name
  public _id: string;
  @ApiProperty()
  // tslint:disable-next-line: variable-name
  public _rev: string;
}
