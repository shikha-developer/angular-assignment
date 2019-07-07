import { TestBed } from '@angular/core/testing';

import { isUserLoggedInService } from './isUserLoggedIn.service';

describe('isUserLoggedInService', () => {
  let service : isUserLoggedInService;
  beforeEach(() => TestBed.configureTestingModule({ }),
    service = TestBed.get(isUserLoggedInService)
);

  it('should be created', () => {
    expect(this.service).toBeTruthy();
  });
  it('isUserLoggedIn should return true when it is set to true', () => {
    service.setUserloggedIn(true);
    expect(service.isUserLoggedIn).toBeTruthy();
  });
  
});
