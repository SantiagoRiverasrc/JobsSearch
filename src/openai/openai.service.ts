import { Injectable } from '@nestjs/common';
import { CvpdfService } from 'src/cv/cvpdf.service';
import { SearchjobService  } from 'src/linkedin/searchjob.service';
import axios from 'axios'
import * as dotenv from 'dotenv'

dotenv.config()

@Injectable()
export class OpenaiService {
    constructor(private readonly AppCvService: CvpdfService, private readonly AppSearchJobService: SearchjobService) {}
    public async getRecomendationsJobs(): Promise<any>{
        const textPdfCv = await this.AppCvService.getTextOfPdf()
        const compatibleJobs = await this.AppSearchJobService.getJob('nodejs');
        let results = []

        try{
            for(let i = 0; i < compatibleJobs.length; i++){
                const response = await axios({
                    method: 'post',
                    url: process.env.COMPLETIONS_URL,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
                    },
                    data: {
                        model: 'gpt-4o-mini',
                        messages: [
                            { role: 'system', content: `De este texto que se extrae de una hoja de vida formato pdf ${textPdfCv}, y esta es una descripción de un puesto de trabajo ${compatibleJobs[i].description}, habilidades que ocupa el puesto ${compatibleJobs[i].skills}, el enlace del empleo ${compatibleJobs[i].link}, compara esto con lo que se extrajo de la hoja de vida, y devuelveme solamente un json con esta estructura, sin formato markdown para poder hacer el JSON Parse en código { compatibilidad: (En porcentaje que tan compatible es la hoja de vida con ese empleo), url: 'Link del empleo'}` }
                        ]
                    }
                })
                if (response) {
                    let answer = JSON.parse(response?.data?.choices[0]?.message?.content)
                    results.push(answer)
                    
                } else {
                    results.push('No se ha podido obtener las skills')
                }
            }

            return results;
        }catch(err){
            throw new Error(`No se ha podido obtener los trabajos recomendados ${err}`)
        }
        
    }


    private async getSkills(): Promise<any> {
        const getSkillsPdf = await this.AppCvService.getTextOfPdf()

        try{
            const response =  await axios({
                method: 'post',
                url: process.env.COMPLETIONS_URL,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
                },
                data: {
                    model: 'gpt-4o-mini',
                    messages: [
                        { role: 'system', content: `De estos datos que vienen de un pdf y es de una hoja de vida ${getSkillsPdf}, devuelveme las habilidades técnologicas en un array` }
                    ]
                }
            })

            if (response) {
                return response?.data?.choices[0]?.message?.content
            } else {
                return 'No he podido obtener respuesta de gpt respecto a la hoja de vida'
            }
        }catch(err){
            throw new Error(`No se ha podido obtener las habilidades téacnicas ${err}`)
        }
    }
}
