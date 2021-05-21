import { TestBed } from '@angular/core/testing';

import { BankdetailsService } from './bankdetails.service';

describe('BankdetailsService', () => {
  let service: BankdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
