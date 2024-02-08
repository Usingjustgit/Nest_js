<<<<<<< HEAD
import { Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthenticationService } from "./Authentication_Service/auth.service";
import { RoleStratergy } from "./Authentication_Service/role.stratergy";
import { jwtConstrant } from "./jwtConstant";

@Controller("/app")
export class AppController{

    constructor(private readonly jwtAuthService : AuthenticationService){}

    @Get("/")
    @UseGuards(AuthGuard('local'))
    async index(@Request() req) : Promise<any>{
        return await req.user;
    }

    @Post("/login")
    @UseGuards(AuthGuard("local"),new RoleStratergy(jwtConstrant.role.ADMIN))
    async login(@Request() req) : Promise<any>{
        return await this.jwtAuthService.generateToken(req.user);
    }

    @Post("/verify")
    @UseGuards(AuthGuard("local"), new RoleStratergy(jwtConstrant.role.USER))
    async verify(@Request() req) : Promise<any>{
        return await this.jwtAuthService.generateToken(req.user);
    }
}
=======
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(): string {
    return "";
  }
}
>>>>>>> cb92cbc (This is a connection and cured operation with mongoose.)
