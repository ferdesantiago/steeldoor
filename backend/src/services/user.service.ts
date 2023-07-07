import { Injectable, Inject } from '@nestjs/common';
import { User } from '../entitites/users.entity';
import { CreateUserDto } from 'src/dtos/user.dto';
import { createHash } from 'crypto';
import { Job } from 'src/entitites/jobs.entity';
import { Op } from 'sequelize';

@Injectable()
export class UserService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private readonly userEntity: typeof User,
  ) { }

  async findAll(search: string): Promise<User[]> {
    let options: any = {
      attributes: ['id', 'name', 'email', 'role', 'resume'],
      where: {
        [Op.or]: [
          {
            "name": {
              [Op.like]: `%${search}%`,
            }
          },
          {
            "email": {
              [Op.like]: `%${search}%`,
            }
          },
          {
            "role": {
              [Op.like]: `%${search}%`,
            }
          }
        ]
      }
    }
    if (!search) {
      options = {
        attributes: ['id', 'name', 'email', 'role', 'resume']
      }
    }
    return await this.userEntity.findAll(options);
  }

  async create(user: CreateUserDto): Promise<User> {
    const password = createHash('sha256').update(user.password).digest('hex');
    return await this.userEntity.create({ ...user, password });
  }

  async applied(): Promise<User[]> {
    return await User.findAll({
      include: [
        {
          model: Job,
          through: {
            attributes: []
          },
          required: true
        }
      ],
    });
  }
}
