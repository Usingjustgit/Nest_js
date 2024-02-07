import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Request, Response } from "express";
import { Observable, map } from "rxjs";


@Injectable()
export class BookInterseptor implements NestInterceptor{

    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {

        const ctx = context.switchToHttp();
        const request = ctx.getRequest<Request>();
        const response = ctx.getResponse<Response>();

        request.body.name = "My name is John.";


        return next.handle().pipe(map(data => {
            return "New name is required";
        }))
    }

    
    
}