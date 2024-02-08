import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD
  await app.listen(9091);
}

=======
  await app.listen(3000);
}
>>>>>>> cb92cbc (This is a connection and cured operation with mongoose.)
bootstrap();
