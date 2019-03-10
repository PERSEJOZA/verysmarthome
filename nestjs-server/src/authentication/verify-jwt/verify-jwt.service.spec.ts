import { Test, TestingModule } from '@nestjs/testing';
import { VerifyJwtService } from './verify-jwt.service';

describe('VerifyJwtService', () => {
  let service: VerifyJwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VerifyJwtService],
    }).compile();

    service = module.get<VerifyJwtService>(VerifyJwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
