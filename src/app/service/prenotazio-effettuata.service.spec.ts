import { TestBed } from '@angular/core/testing';

import { PrenotazioEffettuataService } from './prenotazio-effettuata.service';

describe('PrenotazioEffettuataService', () => {
  let service: PrenotazioEffettuataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrenotazioEffettuataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
