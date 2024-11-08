import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios, { AxiosRequestConfig } from 'axios';
import * as dotenv from 'dotenv'

dotenv.config()

@Injectable()
export class SearchjobService {
    private readonly API_HOST = 'https://linkedin-data-api.p.rapidapi.com';
    private readonly HEADERS = {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
        'x-rapidapi-host': 'linkedin-data-api.p.rapidapi.com',
    };

    public async getJob(job: string): Promise<any> {
        try {
            const jobIds = await this.fetchJobIds(job);
            if (jobIds.length === 0) {
                throw new HttpException('No se encontraron trabajos', HttpStatus.NOT_FOUND);
            }

            const jobDetail = await this.getDetail(jobIds[0]);
            return jobDetail;
        } catch (error) {
            throw new HttpException(
                `Error al buscar un trabajo: ${error.message}`,
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    private async fetchJobIds(job: string): Promise<string[]> {
        const options: AxiosRequestConfig = {
            method: 'GET',
            url: `${this.API_HOST}/search-jobs`,
            params: {
                keywords: job,
                locationId: '110697062',
                datePosted: 'past24Hours',
                sort: 'mostRelevant',
            },
            headers: this.HEADERS,
        };

        const response = await axios.request(options);
        return response.data.data.map((job) => job.id);
    }

    async getDetail(id: string): Promise<any> {
        const options: AxiosRequestConfig = {
            method: 'GET',
            url: `${this.API_HOST}/get-job-details`,
            params: { id },
            headers: this.HEADERS,
        };

        try {
            const response = await axios.request(options);
            return response.data.data.description;
        } catch (error) {
            throw new HttpException(
                `Error al buscar detalles del trabajo con id ${id}: ${error.message}`,
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}
