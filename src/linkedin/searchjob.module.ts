import { Module } from '@nestjs/common';
import { SearchjobService } from './searchjob.service';
import { SearchjobController } from './searchjob.controller';

@Module({
  providers: [SearchjobService],
  controllers: [SearchjobController]
})
export class SearchjobModule {}
