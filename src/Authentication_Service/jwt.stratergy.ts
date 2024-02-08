import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstrant } from "../jwtConstant";
import { Injectable } from "@nestjs/common";

@Injectable()
export class JwtStratergy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration : false,
            secretOrKey : jwtConstrant.secret,
        })
    }

    validate(payload : any) : any{
        return payload;
    }
}