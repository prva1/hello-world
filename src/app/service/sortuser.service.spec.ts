import { TestBed, inject } from '@angular/core/testing';

import { SortuserService } from './sortuser.service';

describe('SortuserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SortuserService]
    });
  });

  it('should be created', inject([SortuserService], (service: SortuserService) => {
    expect(service).toBeTruthy();
  }));
});
