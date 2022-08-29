import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { getCountryFlag } from './getCountryFlag.service';

describe('GetCountryFlagService', () => {
  let service: getCountryFlag;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [getCountryFlag],
    });
    service = TestBed.inject(getCountryFlag);
  });

  it('should return request URL from Country Flag API of correct country', async () => {
    expect(service).toBeTruthy();
    expect(service.getCountryFlag('AE')).toBe(
      'https://countryflagsapi.com/png/AE'
    );
  });
});
