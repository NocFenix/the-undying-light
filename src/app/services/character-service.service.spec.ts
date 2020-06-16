/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CharacterServiceService } from './character-service.service';

describe('Service: CharacterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacterServiceService]
    });
  });

  it('should ...', inject([CharacterServiceService], (service: CharacterServiceService) => {
    expect(service).toBeTruthy();
  }));
});
