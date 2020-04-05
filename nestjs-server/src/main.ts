import {ValidationPipe} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';
import {DocumentBuilder, OpenAPIObject, SwaggerModule} from '@nestjs/swagger';

import {AppModule} from './app.module';
import {AuthenticationModule} from './authentication/authentication.module';
import {FoodPlannerModule} from './food-planner/food-planner.module';
import {LoggerService} from './logger/logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.useLogger(app.get(LoggerService));
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  const foodPlannerOptions = new DocumentBuilder()
    .setTitle('Food-planner')
    .setBasePath('/api/v1')
    .addBearerAuth()
    .setDescription('The food-planner API description')
    .setVersion('1.0')
    .addTag('recipe, food, planner')
    .build();
  const document: OpenAPIObject = SwaggerModule.createDocument(app, foodPlannerOptions, {
    include: [FoodPlannerModule, AuthenticationModule]
  });
  SwaggerModule.setup('food-planner/swagger', app, document);

  await app.listen(3000);
}
bootstrap();
