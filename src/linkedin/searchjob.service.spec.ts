import { Test, TestingModule } from '@nestjs/testing';
import { SearchjobService } from './searchjob.service';

describe('SearchjobService', () => {
  let service: SearchjobService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchjobService],
    }).compile();

    service = module.get<SearchjobService>(SearchjobService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
