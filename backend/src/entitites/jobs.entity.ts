import { Table, Column, Model, AllowNull, Default, BelongsToMany } from 'sequelize-typescript';
import { UsersJobs } from './usersJobs.entity';
import { User } from './users.entity';

@Table
export class Job extends Model {
  @BelongsToMany(() => User, () => UsersJobs)
  users: User[];

  @AllowNull(false)
  @Column
  company: string;

  @Default('Remote')
  @Column
  location: string;

  @AllowNull(false)
  @Column
  title: string;

  @AllowNull(true)
  @Column
  description: string;

  @AllowNull(false)
  @Column
  salary: string;

  @AllowNull(false)
  @Column
  skills: string;
}
