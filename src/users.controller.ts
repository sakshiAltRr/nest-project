import { Controller ,Get} from "@nestjs/common";


@Controller("/users")
export class usersController{
    @Get("/profile")
    getprofile(){
        return "Profile Created";
    }
    
}