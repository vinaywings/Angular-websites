import { TestBed } from '@angular/core/testing';

import { TwoWayBindingService } from './two-way-binding.service';

describe('TwoWayBindingService', () => {
  let service: TwoWayBindingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwoWayBindingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
