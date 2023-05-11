import { TestBed } from '@angular/core/testing';

import { InfportfolioService } from './infportfolio.service';

describe('InfportfolioService', () => {
  let service: InfportfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfportfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
