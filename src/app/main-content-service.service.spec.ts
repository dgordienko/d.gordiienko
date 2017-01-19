/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MainContentServiceService } from './main-content-service.service';

describe('MainContentServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainContentServiceService]
    });
  });

  it('should ...', inject([MainContentServiceService], (service: MainContentServiceService) => {
    expect(service).toBeTruthy();
  }));
});
