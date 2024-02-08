import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";

export class RoleStratergy implements CanActivate{

    private passRole;

    constructor(role: any){
        this.passRole = role;
    }

    canActivate(context: ExecutionContext): boolean{
        const ctx = context.switchToHttp();
        const request : any = ctx.getRequest<Request>();

        return this.passRole === request.user.role;
    }
}