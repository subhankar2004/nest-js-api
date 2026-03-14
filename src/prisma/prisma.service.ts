import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService) {
    const pool = new Pool({
      connectionString: config.get<string>('DATABASE_URL'),
    });
    const adapter = new PrismaPg(pool);

    super({
      adapter,
    });
  }
}