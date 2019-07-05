import { TestBed } from '@angular/core/testing';

import { UserdetailService } from './userdetail.service';

describe('UserdetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserdetailService = TestBed.get(UserdetailService);
    expect(service).toBeTruthy();
  });
});
