import {Module} from '@nestjs/common';

import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AuthenticationModule} from './authentication/authentication.module';
import {ConfigModule} from './config/config.module';
import {DbModule} from './db/db.module';
import {FoodPlannerModule} from './food-planner/food-planner.module';

@Module({
  imports: [AuthenticationModule, DbModule, ConfigModule, FoodPlannerModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
