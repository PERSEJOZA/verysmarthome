import {Module} from '@nestjs/common';

import {ConfigModule} from '../config/config.module';
import {ConfigService} from '../config/config/config.service';
import {LoggerModule} from '../logger/logger.module';
import {LoggerService} from '../logger/logger/logger.service';
import {CouchDBConnectorService} from './couch-db-connector/couch-db-connector.service';

@Module({
  imports: [ConfigModule, LoggerModule],
  providers: [
    {
      provide: CouchDBConnectorService,
      useFactory: async (configService: ConfigService, loggerService: LoggerService) => {
        const service = new CouchDBConnectorService(configService, loggerService);
        await service.connectToRecipeDb();
        return service;
      },
      inject: [ConfigService, LoggerService]
    }
  ],
  exports: [CouchDBConnectorService]
})
export class DbModule {}
