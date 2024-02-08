import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { PassportModule } from "@nestjs/passport";

@Module({
    imports : [PassportModule],
    controllers : [],
    providers : [UserService],
    exports : [UserService]
})

export class UserModule{}