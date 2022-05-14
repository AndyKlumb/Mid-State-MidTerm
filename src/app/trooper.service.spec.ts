import { TestBed } from '@angular/core/testing';

import { TrooperService } from './trooper.service';

describe('TrooperService', () => {
  let service: TrooperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrooperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
