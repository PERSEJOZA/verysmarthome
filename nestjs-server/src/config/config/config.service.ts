import {Injectable} from '@nestjs/common';

@Injectable()
export class ConfigService {
  public foodPlannerDbConfig = {
    protocol: 'http',
    username: 'root',
    password: 'example',
    url: 'couch-db',
    port: 5984,
    dbRecipeName: 'recipes'
  };
}
