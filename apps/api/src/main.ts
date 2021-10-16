/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  // Instantiate nestjs app
  const app = await NestFactory.create(AppModule);

  // Set Validation pipe
  app.useGlobalPipes(new ValidationPipe());

  // Set global prefix
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  // Configure swagger documentation
  const config = new DocumentBuilder()
    .setTitle('Vegestation API')
    .setDescription('Documentation of the vegestation API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`${globalPrefix}/docs`, app, document);

  // Default port
  const port = process.env.PORT || 3333;

  await app.listen(port, () => {
    Logger.log(`Listening at http://localhost: ${port}/${globalPrefix}`);
  });
}

bootstrap();
