import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { GetBreedNames } from './getBreedNames.service';

describe('GetBreedNamesService', () => {
  let service: GetBreedNames;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GetBreedNames],
    });
    service = TestBed.inject(GetBreedNames);
  });

  it('should be created', async () => {
    expect(service).toBeTruthy();
  });
});
