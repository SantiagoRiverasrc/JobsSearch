import { Test, TestingModule } from '@nestjs/testing';
import { CvpdfController } from './cvpdf.controller';

describe('CvpdfController', () => {
  let controller: CvpdfController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CvpdfController],
    }).compile();

    controller = module.get<CvpdfController>(CvpdfController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
