import { TestBed } from '@angular/core/testing';

import { ChatLibService } from './chat-lib.service';

describe('ChatLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatLibService = TestBed.get(ChatLibService);
    expect(service).toBeTruthy();
  });
});
