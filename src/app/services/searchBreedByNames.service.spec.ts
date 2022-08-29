import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SearchBreedByName } from './searchBreedByName.service';

describe('SearchBreedByNameService', () => {
  let service: SearchBreedByName;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchBreedByName],
    });
    service = TestBed.inject(SearchBreedByName);
  });

  it('should be created', async () => {
    expect(service).toBeTruthy();
  });
});
