import {Controller, Get,Redirect} from "@nestjs/common";


@Controller("/users")
export class usersAlbum{
    @Get("/album")
    @Redirect('/users/redirect')// once you'll hit the users/album url you will get the content of redirect page it is the static way
    getAlbum(){
        return "Photo";
    }
}