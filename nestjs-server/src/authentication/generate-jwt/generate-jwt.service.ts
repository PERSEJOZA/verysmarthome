import {Injectable} from '@nestjs/common';

import {KeyGenerationService} from '../keyGeneration/keyGeneration.service';

@Injectable()
export class GenerateJwtService {
  private crypto = require('crypto');

  public constructor(private keyGenerator: KeyGenerationService) {}

  public getJWT(userNameFromUser: string, passwordFromUser: string) {
    const JWTHeader = this.generateJWTHeader();
    const JWTPlayload = this.generatePlayload(userNameFromUser);
    const JWTSignature = this.generateSignature(JWTHeader, JWTPlayload);

    return JWTHeader + '.' + JWTPlayload + '.' + JWTSignature;
  }

  private generateJWTHeader() {
    const header = {alg: 'SHA256', typ: 'JWT'};

    return Buffer.from(JSON.stringify(header)).toString('base64');
  }

  private generatePlayload(userName: string) {
    const playload = {name: userName};

    return Buffer.from(JSON.stringify(playload)).toString('base64');
  }

  private generateSignature(JWTHeader, JWTPlayload) {
    const sign = this.crypto.createSign('SHA256');
    sign.update(JWTHeader + '.' + JWTPlayload);

    return sign.sign(this.keyGenerator.getKey(), 'base64');
  }
}
