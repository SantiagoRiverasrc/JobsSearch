import { Controller, Get } from '@nestjs/common';
import { OpenaiService } from './openai.service';
@Controller('openai')
export class OpenaiController {
    constructor(private readonly AppOpenaiService: OpenaiService) {}

    @Get('/getSkill')
    async getSkills(): Promise<any> {
        return this.AppOpenaiService.getSkills()
    }
}
