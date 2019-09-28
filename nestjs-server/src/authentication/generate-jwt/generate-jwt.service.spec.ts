import {Test, TestingModule} from '@nestjs/testing';
import {GenerateJwtService} from './generate-jwt.service';
import {KeyGenerationService} from '../keyGeneration/keyGeneration.service';

describe('GenerateJwtService', () => {
  let service: GenerateJwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenerateJwtService, KeyGenerationService]
    }).compile();

    service = module.get<GenerateJwtService>(GenerateJwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
