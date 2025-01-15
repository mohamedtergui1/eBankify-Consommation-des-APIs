import { TestBed } from '@angular/core/testing';

import { TransactionMangeService } from './transaction-mange.service';

describe('TransactionMangeService', () => {
  let service: TransactionMangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionMangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
