import { Test, TestingModule } from '@nestjs/testing';

import { KeyGenerationService } from './keyGeneration.service';

describe('keyGenerationService', () => {
  let service: KeyGenerationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KeyGenerationService],
    }).compile();

    service = module.get<KeyGenerationService>(KeyGenerationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
