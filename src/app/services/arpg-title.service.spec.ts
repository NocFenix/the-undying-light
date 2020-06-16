/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArpgTitleService } from './arpg-title.service';

describe('Service: ArpgTitle', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArpgTitleService]
    });
  });

  it('should ...', inject([ArpgTitleService], (service: ArpgTitleService) => {
    expect(service).toBeTruthy();
  }));
});
