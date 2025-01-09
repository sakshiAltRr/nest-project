import { Controller, Post ,HttpCode,HttpStatus,Res,Header} from "@nestjs/common";
import { Request,Response } from "express";


@Controller("/users")
export class usersData{
    // @HttpCode(HttpStatus.NOT_FOUND) to set the status on our own
    @HttpCode(HttpStatus.ACCEPTED)
    @Header('Cache-Control', 'none')
    @Header('X-Name', 'Sakshi')
    @Post("/data")
    postData(@Res() res:Response){    //if we inject response here so after hitting the url the response will not be sent automatically nestjs wants us to sent the response
       res.send("Data entered succesfully");
    }
}