import { TestBed } from '@angular/core/testing';

import { UserdetailService } from './userdetail.service';
import { HttpClientModule } from '@angular/common/http';

describe('UserdetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({

    imports: [HttpClientModule],
    providers: [UserdetailService]
  }));

  it('should be created', () => {
    const service: UserdetailService = TestBed.get(UserdetailService);
    expect(service).toBeTruthy();
  });
});
