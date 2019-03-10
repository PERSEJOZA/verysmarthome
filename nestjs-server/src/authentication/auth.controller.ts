import { Controller, Post, Get, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('api')
export class AuthController {
  public constructor(private authService: AuthService) {}
  
  @Post('login')
  public async login(@Body() creditanials: any): Promise<string> {
    return await this.authService.login(creditanials);
  }
}