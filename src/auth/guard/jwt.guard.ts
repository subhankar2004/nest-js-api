import { AuthGuard } from "@nestjs/passport";

export class JwtGuard extends AuthGuards('jwt'){
    constructor(){
        super();
    }
}