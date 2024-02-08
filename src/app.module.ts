import { Module } from '@nestjs/common';
<<<<<<< HEAD
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
=======
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal : true,
      envFilePath : [".local.env"],
    }),

    MongooseModule.forRootAsync({
      imports : [ConfigModule],
      useFactory : (configService : ConfigService) => ({uri : configService.get("MONGOOS_URI")}),
      inject : [ConfigService]
    }),

    BookModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}
>>>>>>> cb92cbc (This is a connection and cured operation with mongoose.)
