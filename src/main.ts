import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();
  
  await app.listen(3000);

  const appUrl = await app.getUrl();

  Logger.log(`app is running on ${appUrl}`, 'NestApplication');
}
bootstrap();
