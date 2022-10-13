import { TestBed } from '@angular/core/testing';

import { ServiceEventoDataSettoreService } from './service-evento-data-settore.service';

describe('ServiceEventoDataSettoreService', () => {
  let service: ServiceEventoDataSettoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEventoDataSettoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
