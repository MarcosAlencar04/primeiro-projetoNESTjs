import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { UserRepository } from './repositories/user-repository';
import { PrismaUserRepository } from './repositories/prisma/prisma-user-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    }
  ],
})
export class AppModule {}
