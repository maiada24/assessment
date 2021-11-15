import { TestBed } from '@angular/core/testing';

import { HttpConfigInterceptor } from './http-interceptor.service';

describe('HttpInterceptorService', () => {
  let service: HttpConfigInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpConfigInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
