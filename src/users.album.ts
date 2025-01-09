import { Controller,Get } from "@nestjs/common";


@Controller("/users")
export class usersAlbum{
    @Get("/album")
    getPhoto(){
        return "Photo Added";
    }
}