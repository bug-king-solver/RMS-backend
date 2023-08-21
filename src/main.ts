import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const port: number = Number(process.env.SERVER_PORT);
  const siteUrl = process.env.SITE_URL;

  app.enableCors();
  
  await app.listen(port, () => {
    Logger.log(`Server is running at ${siteUrl}graphql`)
  });
}
bootstrap();
