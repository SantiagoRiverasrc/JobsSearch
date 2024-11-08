import { Module } from '@nestjs/common';
import { OpenaiService } from './openai.service';
import { OpenaiController } from './openai.controller';
import { CvpdfService } from 'src/cv/cvpdf.service';

@Module({
  providers: [OpenaiService, CvpdfService],
  controllers: [OpenaiController]
})
export class OpenaiModule {}
