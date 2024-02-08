import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './Authentication_Service/auth.module';
import { UserModule } from './User_Information/user.module';

@Module({
  imports: [AuthModule, UserModule],
  controllers: [AppController],
  providers: [],
  exports: [],
})

export class AppModule {
  constructor(){
    console.log("This is a main AppModule.");
  }
}
