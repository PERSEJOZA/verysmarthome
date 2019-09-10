import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  controllers: [AppController],
  imports: [AuthenticationModule],
  providers: [AppService],
})
export class AppModule {}
