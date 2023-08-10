import { TestBed } from '@angular/core/testing';

import { OpensilverService } from './opensilver.service';

describe('OpensilverService', () => {
  let service: OpensilverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpensilverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
