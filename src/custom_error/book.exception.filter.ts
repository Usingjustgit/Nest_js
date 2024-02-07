import { ArgumentsHost, ExceptionFilter, HttpException } from "@nestjs/common";
import { Request, Response } from "express";

export class BookExceptionFilter implements ExceptionFilter{

    catch(exception: HttpException, host: ArgumentsHost) {
        const contex = host.switchToHttp();
        const resopnse = contex.getResponse<Response>();
        const request = contex.getRequest<Request>();
        const statusCode = exception.getStatus();

        resopnse.status(statusCode).json({
            statusCode,
            url : request.url,
            timeStamp : new Date().toISOString(),
            host : request.get("host")
        })
    }
}