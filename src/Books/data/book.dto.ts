import { IsInt, IsString } from "class-validator";

export class Book{
    
    id : Number;

    @IsString()
    title : string;

    @IsInt()
    price : Number;

    @IsInt()
    released : Number;

    @IsString()
    developedBy : string;

}