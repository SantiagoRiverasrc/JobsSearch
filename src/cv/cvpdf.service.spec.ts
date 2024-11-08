import { Test, TestingModule } from '@nestjs/testing';
import { CvpdfService } from './cvpdf.service';

describe('CvpdfService', () => {
  let service: CvpdfService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CvpdfService],
    }).compile();

    service = module.get<CvpdfService>(CvpdfService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
