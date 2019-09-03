import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';

@Controller('api')
export class AuthController {
  public constructor(private authService: AuthService) { }

  @Post('login')
  public async login(@Body() credantials: { username: string, password: string }): Promise<string> {
    return await this.authService.login(credantials);
  }

  @Post('register')
  public async register(@Body() credantials: { username: string, password: string }): Promise<{ token: string }> {
    return await this.authService.register(credantials);
  }
}
