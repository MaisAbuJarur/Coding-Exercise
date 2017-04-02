import { TestBed, inject } from '@angular/core/testing';

import { OffersService } from './offers.service';

import { Http } from '@angular/http';

describe('OffersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OffersService,
	{provide: Http, useValue: OffersService }]
    });
  });

  it('should ...', inject([OffersService], (service: OffersService) => {
    expect(service).toBeTruthy();
  }));
});
