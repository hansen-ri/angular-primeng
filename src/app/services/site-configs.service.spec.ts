import { TestBed } from '@angular/core/testing';

import { SiteConfigsService } from './site-configs.service';

describe('SiteConfigsService', () => {
  let service: SiteConfigsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteConfigsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
