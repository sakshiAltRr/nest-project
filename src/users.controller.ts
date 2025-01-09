import { Controller, Get, Req} from "@nestjs/common";
import {Request} from 'express';

@Controller("/users")//route
export class usersController{
    @Get("/profile")   //request method with request path
    getProfile(@Req() req: Request /*returns the request info and :Request is in typescript that tells the type of object*/){   //request Handler 
        console.log(req);
        return "Hello Sakshi";
        }
}