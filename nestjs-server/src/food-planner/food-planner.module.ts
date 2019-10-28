import {Module} from '@nestjs/common';

import {DbModule} from '../db/db.module';
import {FoodPlannerDbService} from './food-planner-db.service';
import {RecipeController} from './recipe.controller';

@Module({
  imports: [DbModule],
  controllers: [RecipeController],
  providers: [FoodPlannerDbService]
})
export class FoodPlannerModule {}
