import { Body, Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { CreateUserBody } from './dtos/create-user-body';

@Controller()
export class AppController {
  constructor(
    private prisma: PrismaService,
  ) {}

  @Get()
  async getHello(@Body() body: CreateUserBody) {
    const {name, occupation} = body;

    const user = await this.prisma.user.create({
      data: {
        name,
        occupation
      },
    })

    return {
      user
    }; 
  }
}
