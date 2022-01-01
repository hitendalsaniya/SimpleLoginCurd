import { TestBed } from '@angular/core/testing';

import { APIServicService } from './api-servic.service';

describe('APIServicService', () => {
  let service: APIServicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIServicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
