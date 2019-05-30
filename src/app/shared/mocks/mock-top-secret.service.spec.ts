import { TestBed } from '@angular/core/testing';

import { MockTopSecretService } from './mock-top-secret.service';

describe('MockTopSecretService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockTopSecretService = TestBed.get(MockTopSecretService);
    expect(service).toBeTruthy();
  });
});
