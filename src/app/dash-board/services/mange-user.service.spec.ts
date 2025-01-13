import { TestBed } from '@angular/core/testing';

import { MangeUserService } from './mange-user.service';

describe('MangeUserService', () => {
  let service: MangeUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MangeUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
