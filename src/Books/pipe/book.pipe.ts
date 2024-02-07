import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { Validate, validate } from "class-validator";
import { Book } from "../data/book.dto";

export class BookPipe implements PipeTransform{

    async transform(value: any, metadata: ArgumentMetadata) : Promise<any> {
        
        // First we convert the up comming json vlaue(object) into the class.
        // Because the validator is not apply on the json(object) formate so we must be convet into the class.
        const bookClass = plainToInstance(Book,value);

        //Now we validate the all the datatype of up comming valus and fetach all the erros from it.
        const error = await validate(bookClass);

        if(error.length > 0){
            console.log(error);
            throw new BadRequestException(`Somthing goes to wrong ...${error}`);
        }

        
    }

}