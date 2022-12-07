import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true});
  const PORT = process.env.PORT || 5000;
  await app.listen(PORT);
}
bootstrap();
