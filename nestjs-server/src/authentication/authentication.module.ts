import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { KeygeneratorService } from './keygenerator/keygenerator.service';
import { GenerateJwtService } from './generate-jwt/generate-jwt.service';
import { VerifyJwtService } from './verify-jwt/verify-jwt.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, KeygeneratorService, GenerateJwtService, VerifyJwtService]
})
export class AuthenticationModule {}
