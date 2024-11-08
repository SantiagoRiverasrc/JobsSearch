import { Injectable } from '@nestjs/common';
import pdf from 'pdf-parse'
import * as fs from 'fs'

@Injectable()
export class CvpdfService {
    public async getTextOfPdf(): Promise<any> {
        try {
            const dataBuffer = fs.readFileSync('C:/Users/USUARIO/Desktop/jobsearch/Curriculum (3).pdf');
            const data = await pdf(dataBuffer);
            return data.text;                    
        } catch (err) {
            console.error('Error al leer pdf', err);
        }
    }
}
