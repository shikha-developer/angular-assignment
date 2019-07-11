import { TestBed } from '@angular/core/testing';

import { UserDetailService } from './user-detail.service';
import { HttpClientModule } from '@angular/common/http';

describe('UserDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({

    imports: [HttpClientModule],
    providers: [UserDetailService]
  }));

  it('should be created', () => {
    const service: UserDetailService = TestBed.get(UserDetailService);
    expect(service).toBeTruthy();
  });
});
