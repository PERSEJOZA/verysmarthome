import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';

export class RecipeStep {
  @ApiProperty({type: String})
  name: string;
  @ApiPropertyOptional({type: String})
  message?: string;
  @ApiPropertyOptional({type: String})
  image?: any;
}
