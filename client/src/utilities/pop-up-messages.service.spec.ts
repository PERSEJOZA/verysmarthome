import { TestBed } from '@angular/core/testing';

import { PopUpMessagesService } from './pop-up-messages.service';

describe('PopUpMessagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PopUpMessagesService = TestBed.get(PopUpMessagesService);
    expect(service).toBeTruthy();
  });
});
