import { Module } from "@nestjs/common";
import { LocalAuthentication } from "./passport.local.strategy";
import { UserModule } from "src/User_Information/user.module";
import { PassportModule } from "@nestjs/passport";

@Module({
    imports : [UserModule,PassportModule],
    controllers : [],
    providers : [LocalAuthentication],
    exports : []
})

export class AuthModule{

}