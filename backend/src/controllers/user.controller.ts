import { BadRequestException, Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../entitites/users.entity';
import { CreateUserDto } from 'src/dtos/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() body: CreateUserDto): Promise<User> {
    try {
      return await this.userService.create(body);
    } catch(error) {
      throw new BadRequestException(error);
    }
  }

  @Get()
  async getUsers(@Query('search') search: string): Promise<User[]> {
    try {
      return await this.userService.findAll(search);
    } catch(error) {
      throw new BadRequestException(error);
    }
  }

  @Get('/applied')
  async aplliedJobs(): Promise<User[]> {
    try {
      return await this.userService.applied();
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
