import { Controller, Get } from "@nestjs/common";

@Controller("/users")
export class usersRedirect{
    @Get('/redirect')
    getRedirected(){
        return "The user is redirected";
    }
}