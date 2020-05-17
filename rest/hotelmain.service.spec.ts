import { TestBed } from '@angular/core/testing';

import { HotelmainService } from './hotelmain.service';

describe('HotelmainService', () => {
  let service: HotelmainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelmainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
