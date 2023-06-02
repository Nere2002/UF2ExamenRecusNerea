import { TestBed } from '@angular/core/testing';

import { ConnectorBdService } from './connector-bd.service';

describe('ConnectorBdService', () => {
  let service: ConnectorBdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectorBdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
