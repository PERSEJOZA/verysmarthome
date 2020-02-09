import {Module} from '@nestjs/common';

import {DbModule} from '../db/db.module';
import {LoggerModule} from '../logger/logger.module';
import {FoodPlannerDbService} from './food-planner-db.service';
import {RecipeController} from './recipe.controller';

@Module({
  imports: [DbModule, LoggerModule],
  controllers: [RecipeController],
  providers: [FoodPlannerDbService]
})
export class FoodPlannerModule {}
