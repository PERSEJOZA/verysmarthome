import {Module} from '@nestjs/common';

import {ConfigModule} from '../config/config.module';
import {ConfigService} from '../config/config/config.service';
import {CouchDBConnectorService} from './couch-db-connector/couch-db-connector.service';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: CouchDBConnectorService,
      useFactory: async (configService: ConfigService) => {
        const service = new CouchDBConnectorService(configService);
        await service.connectToRecipeDb();
        return service;
      },
      inject: [ConfigService]
    }
  ],
  exports: [CouchDBConnectorService]
})
export class DbModule {}
