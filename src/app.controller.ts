import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('principal')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('job')
  getJob(): string {
    return this.appService.getJob('Zapatero')
  }

  @Post('create')
  postMessage(@Body() body: any): Response {
    return this.appService.processRequest(body)
  }
  

}
