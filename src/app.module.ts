import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchjobModule } from './linkedin/searchjob.module';
import { CvpdfModule } from './cv/cvpdf.module';
import { OpenaiModule } from './openai/openai.module';

@Module({
  imports: [SearchjobModule, CvpdfModule, OpenaiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
