import { Module } from "@nestjs/common";
import { JobController } from "src/controllers/job.controller";
import { jobsProviders } from "src/providers/jobs.provider";
import { JobService } from "src/services/job.service";
import { DatabaseModule } from "./database.module";

@Module({
    imports: [DatabaseModule],
    controllers: [JobController],
    providers: [JobService, ...jobsProviders]
})
export class JobModule { }
