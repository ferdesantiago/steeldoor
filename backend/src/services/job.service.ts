import { Injectable, Inject } from '@nestjs/common';
import { Job } from '../entitites/jobs.entity';
import { ApplyJobDto, CreateJobDto } from 'src/dtos/job.dto';
import { Op } from 'sequelize';
import { UsersJobs } from 'src/entitites/usersJobs.entity';

@Injectable()
export class JobService {
  constructor(
    @Inject('JOBS_REPOSITORY')
    private readonly jobEntity: typeof Job,
  ) { }

  async findAll(search: string): Promise<Job[]> {
    if (!search) search = '';
    return await this.jobEntity.findAll({
      attributes: ['id', 'company', 'location', 'title', 'description', 'salary', 'skills'],
      where: {
        [Op.or]: [
          {
            "company": {
              [Op.like]: `%${search}%`,
            }
          },
          {
            "location": {
              [Op.like]: `%${search}%`,
            }
          },
          {
            "salary": {
              [Op.like]: `%${search}%`,
            }
          },
          {
            "skills": {
              [Op.like]: `%${search}%`,
            }
          }
        ]
      }
    });
  }

  async create(job: CreateJobDto): Promise<Job> {
    return await this.jobEntity.create({ ...job });
  }

  async update(id: string, job: CreateJobDto): Promise<Boolean> {
    const result = await this.jobEntity.update({ ...job }, { where: { id } });
    if (result[0] > 0) {
      return true;
    } else {
      return false;
    }
  }

  async delete(id: string): Promise<Boolean> {
    return !!await this.jobEntity.destroy({
      where: {
        id: id
      }
    });
  }

  async apply(job: ApplyJobDto): Promise<UsersJobs> {
    return await UsersJobs.create({ ...job });
  }
}
