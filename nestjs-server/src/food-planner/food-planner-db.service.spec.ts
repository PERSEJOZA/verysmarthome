import {Test, TestingModule} from '@nestjs/testing';
import {FoodPlannerDbService} from './food-planner-db.service';

describe('FoodPlannerDbService', () => {
  let service: FoodPlannerDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoodPlannerDbService]
    }).compile();

    service = module.get<FoodPlannerDbService>(FoodPlannerDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
