import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";

@Injectable()
export class UserService{
    public users : User[] = [
        {
            id:1,
            name:"user1",
            email:'user1@gmail.com',
            password:"user1@admin"
        },
        {
            id:2,
            name:"user2",
            email:'user2@gmail.com',
            password:"user2@admin"
        },
        {
            id:3,
            name:"user3",
            email:'user3@gmail.com',
            password:"user3@admin"
        }
    ];

    getUserById(userId) : User{
        return this.users.find((user:User) => user.id === userId);
    }
}