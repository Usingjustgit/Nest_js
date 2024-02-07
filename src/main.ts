import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

function GlobalMiddleware(req:Request,res:Response,next:any){
  console.log("This is a global middleware to call the all router...");
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(GlobalMiddleware);
  await app.listen(9091);
}
bootstrap();
