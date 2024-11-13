import { Module } from '@nestjs/common';
import { OpenaiService } from './openai.service';
import { OpenaiController } from './openai.controller';
import { CvpdfService } from 'src/cv/cvpdf.service';
import { SearchjobService } from 'src/linkedin/searchjob.service';

@Module({
  providers: [OpenaiService, CvpdfService, SearchjobService],
  controllers: [OpenaiController]
})
export class OpenaiModule {}
