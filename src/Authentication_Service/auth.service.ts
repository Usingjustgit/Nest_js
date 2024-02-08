import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/User_Information/user.entity";

@Injectable()
export class AuthenticationService{
    constructor(private readonly jwtService : JwtService){ }

    generateToken(payload : User): string{
        if(!payload){
            throw new UnauthorizedException();
        }else{
            return this.jwtService.sign(payload);
        }
    }
} 