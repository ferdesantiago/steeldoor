import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, Query, Search } from '@nestjs/common';
import { JobService } from '../services/job.service';
import { Job } from '../entitites/jobs.entity';
import { ApplyJobDto, CreateJobDto } from 'src/dtos/job.dto';
import { UsersJobs } from 'src/entitites/usersJobs.entity';
import { User } from 'src/entitites/users.entity';

@Controller('job')
export class JobController {
  constructor(private readonly jobService: JobService) { }

  @Post()
  async createJob(@Body() body: CreateJobDto): Promise<Job> {
    try {
      return await this.jobService.create(body);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Put('/:id')
  async updateJob(@Param('id') id: string, @Body() body: CreateJobDto): Promise<Boolean> {
    try {
      return await this.jobService.update(id, body);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Get()
  async getJobs(@Query('search') search: string): Promise<Job[]> {
    try {
      return await this.jobService.findAll(search);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Delete('/:id')
  async deleteJob(@Param('id') id: string): Promise<Boolean> {
    try {
      return await this.jobService.delete(id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Post('/apply')
  async applyJob(@Body() body: ApplyJobDto): Promise<UsersJobs> {
    try {
      return await this.jobService.apply(body);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
