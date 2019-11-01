import {TestBed} from '@angular/core/testing';

import {RecipesResolver} from './recipes.resolver';

describe('RecipesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipesResolver = TestBed.get(RecipesResolver);
    expect(service).toBeTruthy();
  });
});
