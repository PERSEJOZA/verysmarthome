import {NestFactory} from '@nestjs/core';
import {DocumentBuilder, SwaggerDocument, SwaggerModule} from '@nestjs/swagger';

import {AppModule} from './app.module';
import {FoodPlannerModule} from './food-planner/food-planner.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const foodPlannerOptions = new DocumentBuilder()
    .setTitle('Food-planner')
    .addBearerAuth()
    .setDescription('The food-planner API description')
    .setVersion('1.0')
    .addTag('recipe, food, planner')
    .build();
  const document: SwaggerDocument = SwaggerModule.createDocument(app, foodPlannerOptions, {
    include: [FoodPlannerModule]
  });
  SwaggerModule.setup('food-planner/swagger', app, document);

  await app.listen(3000);
}
bootstrap();
