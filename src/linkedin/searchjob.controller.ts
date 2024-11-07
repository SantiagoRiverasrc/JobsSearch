import { Controller, Param, Post } from '@nestjs/common';
import { SearchjobService } from './searchjob.service';

@Controller('searchjob')
export class SearchjobController {
    constructor(private readonly AppSearchJob: SearchjobService) {}

    @Post('/getJob/:job')
    async getJob(@Param('job') job: string): Promise<any> {
        return this.AppSearchJob.getJob(job)
    }
}
