import {Module} from '@nestjs/common';

import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AuthenticationModule} from './authentication/authentication.module';
import {FoodPlannerModule} from './food-planner/food-planner.module';

@Module({
  imports: [AuthenticationModule, FoodPlannerModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
