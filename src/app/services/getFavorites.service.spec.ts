import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { GetFavorites } from './getFavorites.service';

describe('GetFavoritesService', () => {
  let service: GetFavorites;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GetFavorites],
    });
    service = TestBed.inject(GetFavorites);
  });

  it('should be created', async () => {
    expect(service).toBeTruthy();
  });
});
