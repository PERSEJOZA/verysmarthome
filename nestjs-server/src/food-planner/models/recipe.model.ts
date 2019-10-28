import {ApiModelProperty} from '@nestjs/swagger';

export abstract class Recipe {
  @ApiModelProperty({type: String})
  public id: string;
  @ApiModelProperty({type: String})
  public image: string;
  @ApiModelProperty({type: String})
  public name: string;
  @ApiModelProperty({type: String})
  public shortDescription: string;
  @ApiModelProperty({type: [String]})
  public tags: [string];
  @ApiModelProperty({type: [String]})
  public reviews: [string];
  @ApiModelProperty({type: Number})
  public personalRank: number;
}
