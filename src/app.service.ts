import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getJob(name: string): string {
    return `Hola Soy un empleo, ${name}`
  }

  processRequest(body: any): Response {
    // Aquí puedes hacer cualquier procesamiento que necesites con el JSON
    console.log('Procesando JSON:', body);  // Solo un ejemplo de lo que podrías hacer
    return body
  }
}
