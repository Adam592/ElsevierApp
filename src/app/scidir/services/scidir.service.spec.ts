import { TestBed } from '@angular/core/testing';

import { ScidirService } from './scidir.service';

describe('ScidirService', () => {
  let service: ScidirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScidirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
