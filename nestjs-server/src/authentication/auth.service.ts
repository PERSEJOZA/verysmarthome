import { Injectable } from '@nestjs/common';
import { GenerateJwtService } from './generate-jwt/generate-jwt.service';
import { VerifyJwtService } from './verify-jwt/verify-jwt.service';

@Injectable()
export class AuthService {

  public constructor(private generateJWT: GenerateJwtService, private verifyJWT: VerifyJwtService) { }

  public async login(creditanials: any): Promise<any> {
    if (!this.checkCreditenials(creditanials.username, creditanials.password)) {
      return {'token':'booo'};
    }

    return await {'token': this.generateJWT.getJWT(creditanials.username, creditanials.password)};
  }

  public async validateUser(token: string) {
    return this.verifyJWT.verifyJWT(token)
  }

  private checkCreditenials(usernameFromUser, passwordFromUser) {
    const userName = 'admin';
    const password = '00000';
    if (usernameFromUser === userName && passwordFromUser === password) {
      return true;
    } else {
      return false;
    }
  }
}
