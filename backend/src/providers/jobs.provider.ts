import { Job } from '../entitites/jobs.entity';

export const jobsProviders = [
  {
    provide: 'JOBS_REPOSITORY',
    useValue: Job,
  },
];
