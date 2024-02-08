import { Module } from "@nestjs/common";
import { LocalAuthentication } from "./passport.local.strategy";
import { UserModule } from "src/User_Information/user.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstrant } from "../jwtConstant";
import { AuthenticationService } from "./auth.service";
import { JwtStratergy } from "./jwt.stratergy";
import { RoleStratergy } from "./role.stratergy";

@Module({
    imports : [UserModule,PassportModule, JwtModule.register({
        secret : jwtConstrant.secret,
        signOptions : {expiresIn : '1200s'},
    })],
    controllers : [],
    providers : [LocalAuthentication,AuthenticationService,JwtStratergy],
    exports : [AuthenticationService]
})

export class AuthModule{

}