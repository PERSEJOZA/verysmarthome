import {Injectable} from '@nestjs/common';

import {KeyGenerationService} from '../keyGeneration/keyGeneration.service';
import * as Crypto from 'crypto';

@Injectable()
export class VerifyJwtService {
  private crypto = Crypto;

  public constructor(private keyGenerator: KeyGenerationService) {}

  public verifyJWT(token: any): boolean {
    const verify = this.crypto.createVerify('SHA256');
    token = token.split('.');
    verify.update(token[0] + '.' + token[1]);
    return verify.verify(this.keyGenerator.getPublicKey(), token[2], 'base64');
  }
}
