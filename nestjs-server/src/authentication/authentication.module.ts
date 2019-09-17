import {Module} from '@nestjs/common';

import {AuthController} from './auth.controller';
import {AuthService} from './auth.service';
import {GenerateJwtService} from './generate-jwt/generate-jwt.service';
import {KeyGenerationService} from './keyGeneration/keyGeneration.service';
import {VerifyJwtService} from './verify-jwt/verify-jwt.service';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    KeyGenerationService,
    GenerateJwtService,
    VerifyJwtService,
  ],
})
export class AuthenticationModule {}
