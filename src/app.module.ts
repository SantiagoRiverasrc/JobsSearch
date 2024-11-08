import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchjobModule } from './linkedin/searchjob.module';

@Module({
  imports: [SearchjobModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
