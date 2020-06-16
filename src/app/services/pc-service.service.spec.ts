/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PcServiceService } from './pc-service.service';

describe('Service: PcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PcServiceService]
    });
  });

  it('should ...', inject([PcServiceService], (service: PcServiceService) => {
    expect(service).toBeTruthy();
  }));
});
