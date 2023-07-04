import { Table, Column, Model, AllowNull, ForeignKey } from 'sequelize-typescript';
import { User } from './users.entity';
import { Job } from './jobs.entity';

@Table
export class UsersJobs extends Model {
  @ForeignKey(() => User)
  @AllowNull(false)
  @Column
  userId: number;

  @ForeignKey(() => Job)
  @AllowNull(false)
  @Column
  jobId: number;
}
