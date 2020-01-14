import {ApiModelProperty, ApiModelPropertyOptional} from '@nestjs/swagger';

export class RecipeStep {
  @ApiModelProperty({type: String})
  name: string;
  @ApiModelPropertyOptional({type: String})
  message?: string;
  @ApiModelPropertyOptional({type: String})
  image?: any;
}
