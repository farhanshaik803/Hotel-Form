import { TestBed } from '@angular/core/testing';

import { RoommainService } from './roommain.service';

describe('RoommainService', () => {
  let service: RoommainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoommainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
