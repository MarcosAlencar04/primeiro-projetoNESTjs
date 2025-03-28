import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserBody } from './dtos/create-user-body';
import { UserRepository } from './repositories/user-repository';

@Controller()
export class AppController {
  constructor(private userRepository: UserRepository){}

  @Post()
  async getHello(@Body() body: CreateUserBody) {
    const {name, occupation} = body;
    await this.userRepository.create(name, occupation);
  }
}
