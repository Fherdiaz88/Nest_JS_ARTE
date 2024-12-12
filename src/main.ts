import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: `http://localhost:61259`,
  })
 const options = new DocumentBuilder()
  .setTitle('REST API')
  .setDescription('API de obras de arte abstracto')
  .setVersion('1.0')
  .build(); 

const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup('api',app, document);
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
