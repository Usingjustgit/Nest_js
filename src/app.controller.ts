import { Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Controller("/app")
export class AppController{

    @Get("/")
    @UseGuards(AuthGuard('local'))
    index() : string{
        return "This is local controller...";
    }
}