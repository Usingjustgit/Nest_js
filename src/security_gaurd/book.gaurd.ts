import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request, Response } from "express";


@Injectable()
export class BookGaurd implements CanActivate{

    public key : String = "Jay Shree Ram";

    canActivate(context: ExecutionContext): boolean {
        const ctx = context.switchToHttp();
        const response = ctx.getRequest<Response>();
        const request = ctx.getRequest<Request>();

        if(request.header("adminId") === this.key){
            return true;
        }
        return false;
    }

    
}