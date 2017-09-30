import { TestBed, inject } from '@angular/core/testing';

import { FormServiceService } from './form-service.service';

describe('FormServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormServiceService]
    });
  });

  it('should ...', inject([FormServiceService], (service: FormServiceService) => {
    expect(service).toBeTruthy();
  }));
});
