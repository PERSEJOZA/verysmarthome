import { Injectable } from '@nestjs/common';
import { KeygeneratorService } from '../keygenerator/keygenerator.service';

@Injectable()
export class VerifyJwtService {
  private crypto = require('crypto');

  public constructor(private keyGenerator: KeygeneratorService) {};

  public verifyJWT(token: any): boolean {
    var verify = this.crypto.createVerify('SHA256');
    token = token.split(".");
    verify.update(token[0] + '.' + token[1]);
    return verify.verify(this.keyGenerator.getPublicKey(), token[2], 'base64');
  };
}
