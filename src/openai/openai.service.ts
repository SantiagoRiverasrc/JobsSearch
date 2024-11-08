import { Injectable } from '@nestjs/common';
import { CvpdfService } from 'src/cv/cvpdf.service';
import axios from 'axios'
import * as dotenv from 'dotenv'

@Injectable()
export class OpenaiService {
    constructor(private readonly AppCvService: CvpdfService) {}
    public async getSkills(): Promise<any>{
        const dataSkill = await this.AppCvService.getTextOfPdf()

        try{
            const response = await axios({
                method: 'post',
                url: process.env.COMPLETIONS_URL,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
                },
                data: {
                    model: 'gpt-3.5-turbo',
                    messages: [
                        { role: 'system', content: `De este texto que se extrae de un pdf, es de una cv, devuelveme un array de las habilidades técnicas ${dataSkill}` }
                    ]
                }
            })

            if (response) {
                return response?.data?.choices[0]?.message?.content
            } else {
                return 'No se ha podido obtener las skills'
            }

        }catch(err){
            throw new Error('No se ha podido obtener las habilidades técnicas')
        }



        
    }
}
