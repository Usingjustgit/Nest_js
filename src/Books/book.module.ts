import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { BookServices } from "./book.service";
import { BookController } from "./book.controller";
import { BookMiddleware } from "./book.middleware";

@Module({
    imports : [],
    controllers : [BookController],
    providers : [BookServices],
    exports : [],
})

export class BookModul implements NestModule{

    configure(consumer: MiddlewareConsumer) {
        consumer.apply(BookMiddleware).forRoutes("/book");
    }
    
}