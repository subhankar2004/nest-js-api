import { Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
    
    @Get('me')
    getMe(@GetUser() user: any) {
        return user;
    }

    @Patch()
    editUser(){

    }
}

