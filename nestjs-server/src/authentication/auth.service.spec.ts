import {Test, TestingModule} from '@nestjs/testing';
import {AuthService} from './auth.service';
import {GenerateJwtService} from './generate-jwt/generate-jwt.service';
import {KeyGenerationService} from './keyGeneration/keyGeneration.service';
import {VerifyJwtService} from './verify-jwt/verify-jwt.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        GenerateJwtService,
        KeyGenerationService,
        VerifyJwtService
      ]
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
