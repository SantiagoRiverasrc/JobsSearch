import { Test, TestingModule } from '@nestjs/testing';
import { SearchjobController } from './searchjob.controller';

describe('SearchjobController', () => {
  let controller: SearchjobController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchjobController],
    }).compile();

    controller = module.get<SearchjobController>(SearchjobController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
