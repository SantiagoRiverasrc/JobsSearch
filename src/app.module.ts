import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchjobModule } from './linkedin/searchjob.module';
import { OpenaiModule } from './openai/openai.module';

@Module({
  imports: [SearchjobModule, OpenaiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
