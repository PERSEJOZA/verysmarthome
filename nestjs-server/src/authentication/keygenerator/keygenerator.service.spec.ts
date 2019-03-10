import { Test, TestingModule } from '@nestjs/testing';
import { KeygeneratorService } from './keygenerator.service';

describe('KeygeneratorService', () => {
  let service: KeygeneratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KeygeneratorService],
    }).compile();

    service = module.get<KeygeneratorService>(KeygeneratorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
