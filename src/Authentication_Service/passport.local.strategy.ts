import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { UserService } from "src/User_Information/user.service";

@Injectable()
export class LocalAuthentication extends PassportStrategy(Strategy){
    
    constructor(private readonly userService : UserService){
        super();
    }

    async validate(userId:number, userPassword:string):Promise<any>{
        const currentUser = await this.userService.getUserById(userId);

        if(currentUser && currentUser.password === userPassword){
            return currentUser;
        }
        return "Sorry, You can not use this service...";
    }

}