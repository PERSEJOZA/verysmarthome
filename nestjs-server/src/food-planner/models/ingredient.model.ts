import {ApiModelProperty, ApiModelPropertyOptional} from '@nestjs/swagger';

export class Ingredient {
  @ApiModelProperty({type: String})
  name: string;
  @ApiModelPropertyOptional({type: Number})
  mg?: number;
  @ApiModelPropertyOptional({type: Number})
  ml?: number;
  @ApiModelPropertyOptional()
  pieces?: any;
}
