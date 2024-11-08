import { Module } from '@nestjs/common';
import { CvpdfService } from './cvpdf.service';
import { CvpdfController } from './cvpdf.controller';

@Module({
  providers: [CvpdfService],
  controllers: [CvpdfController]
})
export class CvpdfModule {}
