import { IsInt, IsNumberString, IsString } from "class-validator";

export class Book{
    
    @IsNumberString()
    id : number;

    @IsString()
    title : string;

    @IsInt()
    price : number;

    @IsInt()
    released : number;

    @IsString()
    developedBy : string;

}