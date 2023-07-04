import { Sequelize } from 'sequelize-typescript';
import { User } from '../entitites/users.entity';
import { Job } from 'src/entitites/jobs.entity';
import { UsersJobs } from 'src/entitites/usersJobs.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
      });
      sequelize.addModels([User, Job, UsersJobs]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
