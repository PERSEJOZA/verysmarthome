import { throwError } from 'rxjs';

import { Injectable } from '@nestjs/common';

import { GenerateJwtService } from './generate-jwt/generate-jwt.service';
import { VerifyJwtService } from './verify-jwt/verify-jwt.service';

@Injectable()
export class AuthService {
  public constructor(
    private generateJWT: GenerateJwtService,
    private verifyJWT: VerifyJwtService,
  ) { }

  public async login(credentials: any): Promise<any> {
    if (!this.checkCredentials(credentials.username, credentials.password)) {
      throwError('Invalid username or password');
    }

    return await {
      token: this.generateJWT.getJWT(
        credentials.username,
        credentials.password,
      ),
    };
  }

  public validateUser(token: string) {
    return this.verifyJWT.verifyJWT(token);
  }

  private checkCredentials(usernameFromUser: string, passwordFromUser: string) {
    const userName = 'admin';
    const password = '0000';
    if (usernameFromUser === userName && passwordFromUser === password) {
      return true;
    } else {
      return false;
    }
  }
}
