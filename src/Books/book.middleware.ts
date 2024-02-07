import { NestMiddleware } from "@nestjs/common";

export class BookMiddleware implements NestMiddleware{

    use(req: Request, res: Response, next: (error?: any) => void) {
        console.log("This is a middleware for book router...");
        next();
    }

}