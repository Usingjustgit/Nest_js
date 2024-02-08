import { Controller, Get, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Controller("/user")
export class UserController{

    @Get()
    @UseGuards(AuthGuard('local'))
    index(): any{
        return "This is common user instruction.";
    }

}