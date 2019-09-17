import {Body, Controller, Post} from '@nestjs/common';

import {AuthService} from './auth.service';

@Controller('api')
export class AuthController {
  public constructor(private authService: AuthService) {}

  @Post('login')
  public async login(@Body()
  credentials: {
    username: string;
    password: string;
  }): Promise<string> {
    return await this.authService.login(credentials);
  }

  @Post('register')
  public async register(@Body()
  credentials: {
    username: string;
    password: string;
  }): Promise<{token: string}> {
    return await this.authService.register(credentials);
  }
}
