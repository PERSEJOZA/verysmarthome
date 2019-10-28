import {Test, TestingModule} from '@nestjs/testing';

import {CouchDBConnectorService} from './couch-db-connector.service';

describe('CouchDBConnectorService', () => {
  let service: CouchDBConnectorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CouchDBConnectorService]
    }).compile();

    service = module.get<CouchDBConnectorService>(CouchDBConnectorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
