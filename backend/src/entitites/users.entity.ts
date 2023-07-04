import { Table, Column, Model, AllowNull, Default, DataType, BelongsToMany, Unique } from 'sequelize-typescript';
import { UsersJobs } from './usersJobs.entity';
import { Job } from './jobs.entity';

@Table
export class User extends Model {
  @BelongsToMany(() => Job, () => UsersJobs)
  jobs: Job[];

  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Unique
  @Column
  email: string;

  @AllowNull(false)
  @Column
  password: string;

  @AllowNull(false)
  @Column(DataType.ENUM('admin', 'user'))
  role: string;

  @AllowNull(true)
  @Column
  resume: string;

  @Default(true)
  @Column
  isActive: boolean;
}
