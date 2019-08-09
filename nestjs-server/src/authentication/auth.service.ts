import { Injectable } from '@nestjs/common';

import { GenerateJwtService } from './generate-jwt/generate-jwt.service';
import { VerifyJwtService } from './verify-jwt/verify-jwt.service';
import { throwError } from 'rxjs';

@Injectable()
export class AuthService {
  public constructor(
    private generateJWT: GenerateJwtService,
    private verifyJWT: VerifyJwtService,
  ) {}

  public async login(credantials: any): Promise<any> {
    if (!this.checkCredantials(credantials.username, credantials.password)) {
      throwError('Invalid username or password');
    }

    return await {
      token: this.generateJWT.getJWT(
        credantials.username,
        credantials.password,
      ),
    };
  }

  public async validateUser(token: string) {
    return this.verifyJWT.verifyJWT(token);
  }

  private checkCredantials(usernameFromUser: string, passwordFromUser: string) {
    const userName = 'admin';
    const password = '0000';
    if (usernameFromUser === userName && passwordFromUser === password) {
      return true;
    } else {
      return false;
    }
  }
}
