import { TestBed } from '@angular/core/testing';

import { LoginModalStateService } from './login-modal-state.service';

describe('LoginModalStateService', () => {
  let service: LoginModalStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginModalStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
