import {Injectable} from '@nestjs/common';

import {KeyGenerationService} from '../keyGeneration/keyGeneration.service';
import * as Crypto from 'crypto';
@Injectable()
export class GenerateJwtService {
  private crypto = Crypto;

  public constructor(private keyGenerator: KeyGenerationService) {}

  public getJWT(userNameFromUser: string, passwordFromUser: string) {
    const JWTHeader = this.generateJWTHeader();
    const JWTPayload = this.generatePayload(userNameFromUser);
    const JWTSignature = this.generateSignature(JWTHeader, JWTPayload);

    return JWTHeader + '.' + JWTPayload + '.' + JWTSignature;
  }

  private generateJWTHeader() {
    const header = {alg: 'SHA256', typ: 'JWT'};

    return Buffer.from(JSON.stringify(header)).toString('base64');
  }

  private generatePayload(userName: string) {
    const payload = {name: userName};

    return Buffer.from(JSON.stringify(payload)).toString('base64');
  }

  private generateSignature(JWTHeader, JWTPayload) {
    const sign = this.crypto.createSign('SHA256');
    sign.update(JWTHeader + '.' + JWTPayload);

    return sign.sign(this.keyGenerator.getKey(), 'base64');
  }
}
