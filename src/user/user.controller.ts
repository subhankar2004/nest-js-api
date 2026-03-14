import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { JwtGuard } from 'src/auth/guard';

interface RequestWithUser extends Request {
    user: any;
}

@Controller('users')
export class UserController {
    @UseGuards(JwtGuard)
    @Get('me')
    getMe(@Req() req: RequestWithUser) {
        return req.user;
    }
}

