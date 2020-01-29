import {Injectable} from '@nestjs/common';
import * as Nano from 'nano';

import {ConfigService} from '../../config/config/config.service';
import {LoggerService} from '../../logger/logger/logger.service';

@Injectable()
export class CouchDBConnectorService {
  private nano: Nano.ServerScope;

  constructor(private configService: ConfigService, private readonly logger: LoggerService) {
    this.logger.setContext(this.constructor.name);
    this.nano = Nano(
      this.configService.foodPlannerDbConfig.protocol +
        '://' +
        this.configService.foodPlannerDbConfig.username +
        ':' +
        this.configService.foodPlannerDbConfig.password +
        '@' +
        this.configService.foodPlannerDbConfig.url +
        ':' +
        this.configService.foodPlannerDbConfig.port
    );
  }

  public recipeDb: Nano.DocumentScope<any>;

  public async connectToRecipeDb() {
    this.logger.debug('<' + this.connectToRecipeDb.name);
    await this.nano.db
      .get(this.configService.foodPlannerDbConfig.dbRecipeName)
      .then(() => {
        this.logger.debug('=' + this.connectToRecipeDb.name + ' existing database will be used');
      })
      .catch((error: Error) => {
        this.logger.error('=' + this.connectToRecipeDb.name + 'creating a new db', JSON.stringify(error));
        this.nano.db.create(this.configService.foodPlannerDbConfig.dbRecipeName);
        this.logger.debug('=' + this.connectToRecipeDb.name + 'a new database created');
      });
    this.recipeDb = this.nano.db.use(this.configService.foodPlannerDbConfig.dbRecipeName);
    this.logger.debug('>' + this.connectToRecipeDb.name);
  }
}
