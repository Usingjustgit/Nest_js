import { Module } from '@nestjs/common';
import { BookModul } from './Books/book.module';

@Module({
  imports: [BookModul],
  controllers: [],
  providers: [],
  exports: [],
})

export class AppModule {
  constructor(){
    console.log("This is a main AppModule.");
  }
}
