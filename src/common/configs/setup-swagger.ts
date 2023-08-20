import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export const setupSwagger = (app: INestApplication) => {
  const options = new DocumentBuilder()
    .setTitle('RMS')
    .setDescription('The RMS API description')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api', app, document);
};
