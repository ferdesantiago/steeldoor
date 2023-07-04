export class CreateJobDto {
    company: string;
    location: string;
    title: string;
    description: string;
    salary: string;
    skills: string;
}

export class ApplyJobDto {
    userId: string;
    jobId: string;
}
