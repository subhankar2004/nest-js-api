import { PassportStrategy } from "@nestjs/passport"
import { Strategy,ExtractJwt } from 'passport-jwt';

import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { log } from "console";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable()
export class JwtStrategy extends PassportStrategy(
    Strategy, // by default it assigns jwt
){
    constructor( config:ConfigService,private prisma:PrismaService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey:config.get('JWT_SECRET')
          });
    }
    async validate (payload:{sub:number,email:string}){
        const user=await this.prisma.user.findUnique({
            where:{
                id:payload.sub,

            }
        })
        delete user.hash;
        return user;
    }
}