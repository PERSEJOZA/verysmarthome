import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';

export class Ingredient {
  @ApiProperty({type: String})
  name: string;
  @ApiPropertyOptional({type: Number})
  mg?: number;
  @ApiPropertyOptional({type: Number})
  ml?: number;
  @ApiPropertyOptional()
  pieces?: any;
}
