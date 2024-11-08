import { Controller, Get } from '@nestjs/common';
import { CvpdfService } from './cvpdf.service';

@Controller('cvpdf')
export class CvpdfController {
    constructor(private readonly AppCvService: CvpdfService) {}

    @Get('/getData')
    async getTextOfPdf(): Promise<any> {
        return this.AppCvService.getTextOfPdf()
    }
}
