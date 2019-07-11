import { TestBed, async } from '@angular/core/testing';

import { logInService } from './log-in.service';

describe('logInService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(
      { providers: [logInService] }
    );
  });

  it('should be created', () => {
    const service: logInService = TestBed.get(logInService);

    expect(service).toBeTruthy();
  });
  it('isUserLoggedIn should return true when it is set to true', () => {
    const service: logInService = TestBed.get(logInService);

    service.setUserloggedIn(true);
    expect(service.isUserLoggedIn).toBeTruthy();
  });

});
